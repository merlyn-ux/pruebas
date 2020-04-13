import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'poll',
  pathMatch: 'full'
},{
  path:'',
  component:DashboardComponent 
}, {

  path:'posts',
  component:PostsComponent
},
{
  path:'contacts',
  component: ContactComponent

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
