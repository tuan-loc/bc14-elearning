import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // từ file .ts muốn dom đến phần tử html phải sử dụng ViewChild
  @ViewChild('registerForm') registerForm: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  register(user: any) {
    user.maNhom = 'GP01';
    // console.log(user);

    this.dataService.post('QuanLyNguoiDung/DangKy', user).subscribe((result) => {
      // console.log(result);
    })
  }

  @HostListener('window:beforeunload', ['$event'])
  canDeactivateRegister() {
    return !this.registerForm.dirty;
  }

}
