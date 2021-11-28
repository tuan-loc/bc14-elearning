import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AddUserComponent, ModalComponent],
  imports: [CommonModule, AddUserRoutingModule, FormsModule],
})
export class AddUserModule {}
