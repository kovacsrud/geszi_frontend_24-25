import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    this.getPosts();
  }

  posts:any=[];
  isLoading=false;

  getPosts(){
    this.isLoading=true;
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>this.posts=posts)
    .catch(err=>alert(err))
    .finally(()=>this.isLoading=false);


  }

}
