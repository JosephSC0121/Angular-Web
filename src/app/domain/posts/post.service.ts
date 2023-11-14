import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PostModel} from "./post.model";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class PostService{

  apiPostUrl = 'http://127.0.0.1:8000/api/posts/posts/'

  constructor(private httpClient: HttpClient) {
  }

  createPost(post: PostModel): Observable<any> {
    return this.httpClient.post(this.apiPostUrl, post);
  }
  getAllPost(searchTerm?: string): Observable<PostModel[]> {
    // Si hay un término de búsqueda, construye la URL con el parámetro de consulta
    const url = searchTerm ? `${this.apiPostUrl}?search=${searchTerm}` : this.apiPostUrl;

    return this.httpClient.get<PostModel[]>(url);
  }
  deletePost(PostId: number): Observable<PostModel[]> {
    const url = `${this.apiPostUrl}${PostId}/`;
    return this.httpClient.delete<PostModel[]>(url);
  }
  getPostById(PostId: number): Observable<PostModel> {
    const url = `${this.apiPostUrl}${PostId}/`;
    return this.httpClient.get<PostModel>(url);
  }
  updatePost(PostId: number, PostData: any): Observable<any> {
    const url = `${this.apiPostUrl}${PostId}/`;
    return this.httpClient.put(url, PostData);
  }
}
