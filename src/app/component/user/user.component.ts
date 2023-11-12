import { Component, OnInit } from '@angular/core';
import { UserService } from "../../domain/users/user.service";
import { UserModel } from "../../domain/users/user.model";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listUsers$: Observable<UserModel[]>;

  constructor(private userService: UserService, private router: Router) {
    this.listUsers$ = this.userService.getAllUser();
  }

  ngOnInit(): void {
    this.refreshUserList();
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.refreshUserList();
    });
  }

  private refreshUserList(): void {
    this.listUsers$ = this.userService.getAllUser();
  }

  navigateToCreateUser(): void {
      this.router.navigate(['component/createUser']);
    
  }
  navigateToUpdateUser(userId?: number): void{
    this.router.navigate(['component/updateUser', {userId}]);
  }

}
