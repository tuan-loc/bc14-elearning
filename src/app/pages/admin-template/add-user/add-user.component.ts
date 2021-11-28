import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  addUser(user: any) {
    user.maLoaiNguoiDung = 'HV';
    user.maNhom = 'GP01';
    // console.log(user);

    this.dataService
      .post('QuanLyNguoiDung/ThemNguoiDung', user)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
