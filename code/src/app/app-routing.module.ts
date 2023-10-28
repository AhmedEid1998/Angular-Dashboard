import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './shared/list/list.component';
import { GraphComponent } from './shared/graph/graph.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
  children: [
    { path: '', redirectTo: 'graph', pathMatch: 'full' },
    {path:'graph', component:GraphComponent},
    {path:'list', component:ListComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
