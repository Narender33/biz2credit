import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-isp-details',
  templateUrl: './isp-details.component.html',
  styleUrls: ['./isp-details.component.css']
})
export class IspDetailsComponent implements OnInit, OnChanges {
  @Input() data:any;
  negativeRating: number;
  positiveRating: number;
  maximumRating: number = 5;
  constructor(private ispService: ServiceService) { }

  ngOnInit() {
    if(!this.data){
      this.ispService.getSingleISP().subscribe(
        data => {
          this.data = data;
          this.positiveRating = this.data.rating;
          this.negativeRating = this.maximumRating - this.positiveRating;
        },
        error => console.log(error)
      )
    }
  }

  ngOnChanges(){
    if(this.data){
      this.positiveRating = this.data.rating;
      this.negativeRating = this.maximumRating - this.positiveRating;
    }
  }

}
