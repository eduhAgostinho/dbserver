import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './posts/post';
import { Subscription } from 'rxjs';
import { PostsService } from './posts/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular Http Observable';
  posts: Post[];
  private inscricaoPosts: Subscription;

  constructor(private servico: PostsService) { }

  ngOnInit() {
    this.inscricaoPosts = this.servico.buscarTodosPosts().subscribe(
      dados => this.posts = dados,
      erro => console.log(erro)
    );
  }

  ngOnDestroy() {
    this.inscricaoPosts.unsubscribe();
  }
}
