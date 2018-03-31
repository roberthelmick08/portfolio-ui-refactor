import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: ['/src/styles.scss']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      console.log(response.json());
      this.posts = response.json();
    });
   }

  ngOnInit() {
  }


}
