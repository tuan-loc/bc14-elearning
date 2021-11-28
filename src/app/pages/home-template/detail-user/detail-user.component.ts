import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  mangKhoaHocDaXetDuyet: any = [];
  user: any = JSON.parse(localStorage.getItem('UserAdmin') || localStorage.getItem('User') || '{}');

  constructor() { }

  ngOnInit(): void {
  }
}
