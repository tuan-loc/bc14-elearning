import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/services/share-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: any;

  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
  }

  xemNhanh() {
    // truyền thông tin khóa học khi người dùng bấm vào nút xem nhanh
    // lên trên service (tương tự redux stored bên react)
    this.shareData.sharingData(this.course);
  }

}
