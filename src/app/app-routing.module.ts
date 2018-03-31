import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'login', loadChildren: 'app/posts/posts.component#PostsComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
