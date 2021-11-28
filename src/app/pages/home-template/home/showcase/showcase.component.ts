import { DataService } from './../../../../_core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})

export class ShowcaseComponent implements OnInit {
  showcaseArr: any = [
    {
      hinhAnh: "../../../../../assets/images/Online-Course-Banner.jpg"
    },
    {
      hinhAnh: "../../../../../assets/images/Online-Course-Banner.jpg"
    },
    {
      hinhAnh: "../../../../../assets/images/Online-Course-Banner.jpg"
    },
  ];

  slideConfig = {
    "infinite": true,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 1000,
    "arrows": true,
  };


  constructor() { }

  ngOnInit(): void {
    
  }

}
