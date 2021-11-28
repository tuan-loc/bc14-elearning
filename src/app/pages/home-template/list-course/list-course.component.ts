import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/_core/services/data.service';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  listCourse: any;
  subListCourse = new Subscription();

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  // tương đương componentDidMount()y
  ngOnInit(): void {
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.activatedRoute.queryParams.subscribe((params) => {
      let id = params.maDanhMuc;
      this.getCourse(id);
    })
  }

  getCourse(id: any) {
    // muốn lấy data trong getListCourse() thì phải sử dụng subscribe()
    // subscribe(): đăng kí theo dõi
    this.subListCourse =  this.data.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`).subscribe((result: any) => {
      // console.log("result:", result);
      this.listCourse = result;
    });
  }

  ngOnDestroy() {
    // hủy bỏ theo dõi
    this.subListCourse.unsubscribe();
  }

}
