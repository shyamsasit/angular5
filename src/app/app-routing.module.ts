import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { PostComponent } from './post/post.component'; 
// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path: 'contact',
//     component: ContactComponent
//   }
// ];
const appRoutes: Routes = [
   {
    path: '',
    component: HomeComponent
  },
                   {
    path: 'blog',
    component: PostComponent
  }                ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
