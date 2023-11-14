import { Component, OnInit } from '@angular/core';
import { PostService } from "../../domain/posts/post.service";
import { PostModel } from "../../domain/posts/post.model";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  searchTerm: string = '';
  listPosts$: Observable<PostModel[]>;


  constructor(private PostService: PostService, private router: Router) {
    this.listPosts$ = this.PostService.getAllPost();
  }

  ngOnInit(): void {
    this.refreshPostList();
  }

  deletePost(PostId: number): void {
    this.PostService.deletePost(PostId).subscribe(() => {
      this.refreshPostList();
    });
  }

  private refreshPostList(): void {
    this.listPosts$ = this.PostService.getAllPost(this.searchTerm);
  }

  navigateToCreatePost(): void {
      this.router.navigate(['component/createPost']);
    
  }
  navigateToUpdatePost(PostId?: number): void{
    this.router.navigate(['component/updatePost', {PostId}]);
  }
  applySearch(): void {
    this.refreshPostList();
  }
  shouldShowPost(Post: PostModel): boolean {
    if (!this.searchTerm) {
      return true;
    }
  
    const searchTermLowerCase = this.searchTerm.toLowerCase();
    const PostFullName = `${Post.title} ${Post.content}`.toLowerCase();

    return PostFullName.includes(searchTermLowerCase);
  }
  
}
