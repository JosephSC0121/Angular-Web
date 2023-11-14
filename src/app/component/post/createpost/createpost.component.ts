import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from 'src/app/domain/posts/post.model';
import { PostService } from 'src/app/domain/posts/post.service';

@Component({
  selector: 'app-createPost',
  templateUrl: './createPost.component.html',
  styleUrls: ['./createPost.component.scss']
})
export class CreatePostComponent {

  nuevoPost: PostModel = {
    id: 0,
    title: "",
    content: "",
    author: 0
  };

  constructor(private PostService: PostService, private router: Router) {    
  }
  
  submitForm() {
      this.PostService.createPost(this.nuevoPost).subscribe(response => {
        this.navigateToPosts()
        console.log('Post creado con éxito', response);
      });
    }
  navigateToPosts(): void{
    this.router.navigate(['component/post']);
  }
}
