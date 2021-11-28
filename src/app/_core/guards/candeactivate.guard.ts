import { RegisterComponent } from './../../pages/home-template/register/register.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate (component: any) {
    const result = component.canDeactivateRegister() || window.confirm('Bạn có muốn rời khỏi trang này không ?');
    return result;
  }
}
