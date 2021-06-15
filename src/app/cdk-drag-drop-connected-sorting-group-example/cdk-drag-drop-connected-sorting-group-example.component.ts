import { Component, OnInit } from '@angular/core';
import { DragDropModule ,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cdk-drag-drop-connected-sorting-group-example',
  templateUrl: './cdk-drag-drop-connected-sorting-group-example.component.html',
  styleUrls: ['./cdk-drag-drop-connected-sorting-group-example.component.css']
})
export class CdkDragDropConnectedSortingGroupExampleComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private router: Router) { 

  }

  ngOnInit(): void {
  }

  numbers: number[]=[1,2,3,4,5,6,7,8,9];
  otherNumbers: number[]=[1,2];
  otherNumbers2: number[]=[1,2,3,4];
  drop(event: CdkDragDrop<number[]>){
    if(event.previousContainer!==event.container){
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
    //}else{
     // moveItemInArray(this.numbers,event.previousIndex, event.currentIndex);
    }
    console.log('move');
  }
  drop1(event: CdkDragDrop<number[]>){
    // if(event.previousContainer!==event.container){
    //   transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
    //}else{
    moveItemInArray(this.numbers,event.previousIndex, event.currentIndex);
    // }
    // console.log('move');
  }
  drop2(event: CdkDragDrop<number[]>){
    // if(event.previousContainer!==event.container){
    //   transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
    //}else{
     moveItemInArray(this.otherNumbers,event.previousIndex, event.currentIndex);
    //}
    //console.log('move');
  }
  drop3(event: CdkDragDrop<number[]>){
    // if(event.previousContainer!==event.container){
    //   transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
    //}else{
    moveItemInArray(this.otherNumbers2,event.previousIndex, event.currentIndex);
    // }
    // console.log('move');
  }

  itemAdd:any;
  addItem(numberAdd:any): void{
    console.log(numberAdd);
    this.numbers.push(Number(numberAdd));
    console.log("List Number: "+this.numbers);
  }
  openVerticallyCentered(content: any) {
    console.log('add item');
    this.modalService.open(content, { centered: true });
  }
  itemShow: any;
  openScrollableContent(longContent: any, item: any) {
    this.modalService.open(longContent, { scrollable: true });
    this.itemShow=item;
  }

  reloadPage(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
