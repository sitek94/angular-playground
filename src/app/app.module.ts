import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstLessonComponent } from './shared/components/first-lesson/first-lesson.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, FirstLessonComponent, FirstLessonComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'first-lesson', component: FirstLessonComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
