import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDragDropConnectedSortingGroupExampleComponent } from './cdk-drag-drop-connected-sorting-group-example/cdk-drag-drop-connected-sorting-group-example.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CdkDragDropConnectedSortingGroupExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
