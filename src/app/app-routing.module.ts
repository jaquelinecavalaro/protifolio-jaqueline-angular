import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './page-view/about-me/about-me.component';
import { HomeComponent } from './page-view/home/home.component';
import { ProjectsComponent } from './page-view/projects/projects.component';
import { SkillsCertificateComponent } from './page-view/skills-certificate/skills-certificate.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills-certificate', component: SkillsCertificateComponent},
  {path: 'aboute-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
