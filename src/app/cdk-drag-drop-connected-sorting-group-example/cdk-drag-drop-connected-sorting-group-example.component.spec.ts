import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropConnectedSortingGroupExampleComponent } from './cdk-drag-drop-connected-sorting-group-example.component';

describe('CdkDragDropConnectedSortingGroupExampleComponent', () => {
  let component: CdkDragDropConnectedSortingGroupExampleComponent;
  let fixture: ComponentFixture<CdkDragDropConnectedSortingGroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDragDropConnectedSortingGroupExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDragDropConnectedSortingGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
