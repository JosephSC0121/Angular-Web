import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateUserComponent } from './user/updateuser/updateuser.component';


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
				path: 'user',
				component: UserComponent
			},
		]
	}
];
