import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  listUser: any;
  subListUser = new Subscription();

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.activatedRoute.queryParams.subscribe((params) => {
      let id = params.maDanhMuc;
      this.getUser(id);
    });
  }

  getUser(id: any) {
    this.subListUser = this.data
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?maDanhMuc=${id}&MaNhom=GP01`)
      .subscribe((result: any) => {
        this.listUser = result;
      });
  }

  ngOnDestroy() {
    this.subListUser.unsubscribe();
  }
}
