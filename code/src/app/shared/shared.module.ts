import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TopDetailsComponent } from './top-details/top-details.component';
import { CountingComponent } from './counting/counting.component';
import { ListComponent } from './list/list.component';
import { GraphComponent } from './graph/graph.component';
import { RightRatingComponent } from './right-rating/right-rating.component';



@NgModule({
  declarations: [
    NavComponent,
    TopDetailsComponent,
    CountingComponent,
    ListComponent,
    GraphComponent,
    RightRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    TopDetailsComponent,
    CountingComponent,
    ListComponent,
    GraphComponent,
    RightRatingComponent
  ]
})
export class SharedModule { }
