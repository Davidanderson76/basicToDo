import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/signIn/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up/sign-up.component';
import { TodoInputComponent } from './pages/todoInput/todo-input/todo-input.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'add-todo', component: TodoInputComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
