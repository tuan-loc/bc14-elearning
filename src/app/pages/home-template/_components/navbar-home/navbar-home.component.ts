import { Component, OnInit } from '@angular/core';
declare var $:any;
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {
  isLogin: boolean = localStorage.getItem('UserAdmin') || localStorage.getItem('User') ? true : false;
  user: any = JSON.parse( localStorage.getItem('UserAdmin') || localStorage.getItem('User') || '{}');
  danhMucKhoaHoc: any = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    $(document).ready(() => {
      $("#menu-toggle").click(() => {
        $(".navbar").toggleClass("active");
      });
    });

    this.dataService.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc').subscribe((result) => {
      this.danhMucKhoaHoc = result
      // console.log(this.danhMucKhoaHoc);
    });
  }

  handleClickCategory() {
    $(".navbar").removeClass("active");
  }

  // User click Đăng xuất
  logout() {
    // Remove User info
    if (localStorage.getItem('User')) {
      localStorage.removeItem('User');
    }
    else {
      localStorage.removeItem('UserAdmin');
    }
  }
}
