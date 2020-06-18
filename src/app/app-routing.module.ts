import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path:'cv', component: CvComponent},
    {path:'contact', component: ContactComponent},
    {path:'admin', component: AdminComponent},
    {path:'blog', component: BlogComponent},
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: '*', pathMatch: 'full', component: HomeComponent}
  
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
