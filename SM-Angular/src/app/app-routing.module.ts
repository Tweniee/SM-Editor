import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CodeSpaceComponent } from './code-space/code-space.component';

const routes: Routes = [
  { path: '', component: CodeSpaceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
