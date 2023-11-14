import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/domain/posts/post.model';
import { PostService } from 'src/app/domain/posts/post.service';

@Component({
  selector: 'app-updatePost',
  templateUrl: './updatePost.component.html',
  styleUrls: ['./updatePost.component.scss']
})
export class UpdatepostComponent implements OnInit {
  nuevoPost: PostModel = {
    id: 0,
    title: "",
    content: "",
    author: 0
  };

  constructor(private PostService: PostService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const PostId = this.route.snapshot.params['PostId'];

    if (PostId) {
      this.PostService.getPostById(PostId).subscribe(Post => {
        this.nuevoPost = Post;
      });
    }
  }

  submitForm() {
    this.PostService.updatePost(this.nuevoPost.id, this.nuevoPost).subscribe(
      response => {
        console.log('Usuario actualizado con éxito', response);
        this.navigateToPosts(); 
      },
      error => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  navigateToPosts(): void {
    this.router.navigate(['component/post']);
  }
}
