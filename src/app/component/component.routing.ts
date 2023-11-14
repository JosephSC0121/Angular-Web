import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateUserComponent } from './user/updateuser/updateuser.component';
import { CreatePostComponent } from './post/createpost/createpost.component';
import { UpdatepostComponent } from './post/updatepost/updatepost.component';
import { PostComponent } from './post/post.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'createUser',
				component: CreateuserComponent
			},
			{
				path: 'updateUser',
				component: UpdateUserComponent
			},
			{
				path: 'createPost',
				component: CreatePostComponent
			},
			{
				path: 'updatePost',
				component: UpdatepostComponent
			},
			{
				path: 'user',
				component: UserComponent
			},
			{
				path: 'post',
				component: PostComponent
			},
		]
	}
];
