import { DataService } from '@services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  notify: any = "";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  handleChangeInfo(user: any) {
    // Thêm maLoaiNguoiDung và maNhom
    // Cho User hoặc UserAdmin
    if (localStorage.getItem('User')) {
      user.maLoaiNguoiDung = "HV";
      user.maNhom = "GP01"
    }
    else {
      user.maLoaiNguoiDung = "GV";
      user.maNhom = "GP01"
    }

    this.dataService.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user).subscribe((result) => {
      this.notify = "Cập nhật thành công";
      
      // Lấy thông tin User hoặc UserAdmin lên để lưu lại accessToken
      let accessToken = JSON.parse(localStorage.getItem('UserAdmin') || localStorage.getItem('User') || '{}').accessToken;
      user.accessToken = accessToken;

      if (localStorage.getItem('User')) {
        // Xóa và Lưu User xuống localStorage
        localStorage.removeItem('User');
        localStorage.setItem('User', JSON.stringify(user));
      }
      else {
        // Xóa và Lưu UserAdmin xuống localStorage
        localStorage.removeItem('UserAdmin');
        localStorage.setItem('UserAdmin', JSON.stringify(user));
      }

      // Sau khi update thành công sẽ refresh Page
      // Để nhận thông tin mới
      setTimeout(() => {
        window.location.reload();
      }, 3000)

    }, (error) => this.notify = error.error);
  }

}
