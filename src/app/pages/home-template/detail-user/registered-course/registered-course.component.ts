import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-registered-course',
  templateUrl: './registered-course.component.html',
  styleUrls: ['./registered-course.component.scss']
})
export class RegisteredCourseComponent implements OnInit {
  mangKhoaHocDaXetDuyet: any = [];
  mangKhoaHocTimKiem: any = [];
  inputSearch: any = null;
  user = JSON.parse(localStorage.getItem('UserAdmin') || '{}');
  value = {"taiKhoan": this.user?.taiKhoan};
  tmp: any = [];
  notify: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.user) {
      this.dataService.post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', this.value).subscribe((result) => {
        this.tmp = [...result];
        this.mangKhoaHocDaXetDuyet = result;
      })
    }
  }

  ngDoCheck() {
    if (this.inputSearch) {
      this.mangKhoaHocTimKiem = this.mangKhoaHocDaXetDuyet.filter((item: any) => {
        return item.tenKhoaHoc.toLowerCase().includes(this.inputSearch?.toLowerCase());
      })
  
      if (this.mangKhoaHocTimKiem) {
        this.mangKhoaHocDaXetDuyet = [...this.mangKhoaHocTimKiem];
      }
    }
    else {
      this.mangKhoaHocDaXetDuyet = [...this.tmp];
    }
  }

  handleDeteleCourse(course: any) {
    let info = {"maKhoaHoc": course.maKhoaHoc, "taiKhoan": this.user?.taiKhoan}

    // Gọi Api xóa khóa học ghi danh
    this.dataService.post('QuanLyKhoaHoc/HuyGhiDanh', info).subscribe((result: any) => {}, (error: any) => {
      if (error.error.text === "Hủy ghi danh thành công!") {
        this.notify = error.error.text;
        
        // Gọi Api lấy danh sách khóa học đã xét duyệt
        this.dataService.post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', this.value).subscribe((result) => {
          this.tmp = [...result];
          this.mangKhoaHocDaXetDuyet = result;
        })
      }
      else {
        this.notify = "Hủy ghi danh thất bại!";
      }

      // Reset thông báo
      setTimeout(() => {
          this.notify = "";
        }, 1000);
    });
  }
}
