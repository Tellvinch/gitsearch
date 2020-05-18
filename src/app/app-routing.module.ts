import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';



const routes: Routes = [
  { path: 'gitsearch', component: GitsearchComponent},
  { path:'**', component:NotFoundComponent},
  { path: 'user', component: UserComponent},
  { path: 'repo', component: RepoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
