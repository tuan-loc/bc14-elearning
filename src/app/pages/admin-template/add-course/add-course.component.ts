import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {}

  addCourse(course: any) {
    this.data.post('QuanLyKhoaHoc/ThemKhoaHoc', course).subscribe((result) => {
      console.log(result);
    });
  }
}
