import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "./user.model";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class UserService{

  apiUserUrl = 'http://127.0.0.1:8000/api/users/users/'

  constructor(private httpClient: HttpClient) {
  }

  crearUsuario(usuario: UserModel): Observable<any> {
    return this.httpClient.post(this.apiUserUrl, usuario);
  }
  getAllUser(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.apiUserUrl)
  }
  deleteUser(userId: number): Observable<UserModel[]> {
    const url = `${this.apiUserUrl}${userId}/`;
    return this.httpClient.delete<UserModel[]>(url);
  }
}
