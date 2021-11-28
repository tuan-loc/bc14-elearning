import { DataService } from './../../../../_core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-course',
  templateUrl: './latest-course.component.html',
  styleUrls: ['./latest-course.component.scss']
})
export class LatestCourseComponent implements OnInit {

  danhSachKhoaHoc: any = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Call Api lấy danh sách khóa học
    this.dataService.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01').subscribe((result) => {
      this.danhSachKhoaHoc = result.filter((item: any, index: number) => {
        return index > 6 && index < 19;
      });
    })
  }

}
