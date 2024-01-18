import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { QuestionsComponent } from './pages/questions/questions.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  {
    path: 'questions', component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
