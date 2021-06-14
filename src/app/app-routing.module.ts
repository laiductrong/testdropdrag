import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkDragDropConnectedSortingGroupExampleComponent } from './cdk-drag-drop-connected-sorting-group-example/cdk-drag-drop-connected-sorting-group-example.component';

const routes: Routes = [
  {path:'api',component: CdkDragDropConnectedSortingGroupExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
