import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  habilitado = true;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.siguientes();
  }

  recargar(event: any) {
    this.siguientes(event, true);
  }

  siguientes(event?: any, pull: boolean = false) {
    if(pull){
      this.habilitado=true;
      this.posts=[];
    }
    
    this.postsService.getPosts(pull).subscribe(resp => {
      console.log(resp)
      this.posts.push(...resp.posts);

      if (event) {
        event.target.complete();

        if (resp.posts.length === 0) {
          this.habilitado=false;

        }

      }



    });
  }



}
