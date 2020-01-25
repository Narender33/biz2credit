import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-isp',
  templateUrl: './isp.component.html',
  styleUrls: ['./isp.component.css']
})
export class IspComponent implements OnInit {
  isps : Array<any> = [];
  ispDetail : Object = {};
  sortByPriceArray : Array<any> = [];
  sortByRatingArray : Array<any> = [];
  sortByPrice:boolean = false;
  sortByRating:boolean = false;
  constructor(private ispService: ServiceService) { }

  ngOnInit() {
    this.loadIsps();
    if(this.isps){
      this.ispDetail = this.isps[0];
    }
  }

  loadIsps(){
    this.ispService.getISPs().subscribe(
      data => {
        this.isps.push(data);
        this.sortByPriceArray.push(data);
        this.sortByRatingArray.push(data);
      },
      error => console.log(error))
  }

  changeISPDescription(isp){
    this.ispDetail = isp;
  }

  sortBy(order){
    if(order == 'price'){
      this.sortByRating = false;
      this.sortByPrice = true;
      this.sortingOrder(this.sortByPriceArray, 'lowest_price');
    }
    else {
      this.sortByPrice = false;
      this.sortByRating = true;
      this.sortingOrder(this.sortByRatingArray, 'rating');
    }
  }

  sortingOrder(array, key){
    return array.sort((a,b)=>b[key]-a[key]);
  }
}
