import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstLessonComponent } from './shared/components/first-lesson/first-lesson.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';

@NgModule({
  declarations: [AppComponent, FirstLessonComponent, HomeComponent, NavbarComponent, TourOfHeroesComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'test-page', component: FirstLessonComponent },
      { path: 'tour-of-heroes', component: TourOfHeroesComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
