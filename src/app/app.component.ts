import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'apollo angular';
  rates: any[] = [];
  loading = true;
  error: any;
  calibration: any[] = [];

  constructor(private apollo: Apollo) {}
  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((response: any) => {
        this.rates = response.data.rates;
        this.loading = response.loading;
        this.error = response.error;
      });
  }

  // GET_DATA = gql`
  //   query Calibration {
  //     calibrations {
  //       data {
  //         id
  //         height
  //         width
  //         calibrationFactor
  //         startX
  //         startY
  //         endX
  //         endY
  //         unit
  //         value
  //         zoomRatio
  //         imageLink
  //         status
  //         expiryDate
  //         createdAt
  //         updatedAt
  //         errorCode
  //         errorMessage
  //       }
  //     }
  //   }
  // `;

  // ngOnInit() {
  //   this.apollo
  //     .watchQuery({
  //       query: this.GET_DATA,
  //     })
  //     .valueChanges.subscribe((response: any) => {
  //       this.calibration = response.calibrations.data;
  //       this.loading = response.loading;
  //       this.error = response.error;
  //     });
  // }
}
