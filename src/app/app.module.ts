import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page-view/home/home.component';
import { CurriculunComponent } from './page-view/curriculun/curriculun.component';
import { ProjectsComponent } from './page-view/projects/projects.component';
import { SkillsCertificateComponent } from './page-view/skills-certificate/skills-certificate.component';
import { AboutMeComponent } from './page-view/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurriculunComponent,
    ProjectsComponent,
    SkillsCertificateComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
