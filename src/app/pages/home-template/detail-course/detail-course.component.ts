import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  course: any = '';
  id: any = '';
  notify: any = '';

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCourse(this.id);
  }

  getParamsFromUrl() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getDetailCourse(id: any) {
    this.dataService.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`).subscribe((result: any) => {
      this.course = result;
    })
  }

  handleClickRegister(course: any) {
    // Đã Login
    if (localStorage.getItem('User') || localStorage.getItem('UserAdmin')) {

      let currentUser = JSON.parse(localStorage.getItem('UserAdmin') || localStorage.getItem('User') || '{}');
      let value = {"maKhoaHoc": course.maKhoaHoc, "taiKhoan": currentUser?.taiKhoan}

      // Ghi danh khóa học
      this.dataService.post('QuanLyKhoaHoc/GhiDanhKhoaHoc', value).subscribe((result: any) => {}, (error) => {
        if (error.error && error.error.text === "Ghi danh thành công!") {
          // Đăng ký thành công => Chuyến đến trang /detail-user
          this.router.navigate(['/detail-user']);
          return;
        }
        
        this.notify = "Đăng ký khóa học thất bại vì bạn không đủ quyền"
      
      })
    }
    else {
      // Nếu chưa login thì chuyến đến trang /login
      this.router.navigate(['/login']);
      return;
    }
  }

}
