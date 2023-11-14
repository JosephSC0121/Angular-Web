import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { UserComponent } from './user/user.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateUserComponent } from './user/updateuser/updateuser.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './post/createpost/createpost.component';
import { UpdatepostComponent } from './post/updatepost/updatepost.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    UserComponent,
    CreateuserComponent,
    UpdateUserComponent,
    PostComponent,
    CreatePostComponent,
    UpdatepostComponent
  ],
})
export class ComponentsModule { }
