import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDeleteComponent } from './create-user.component';

describe('CreateUpdateDeleteComponent', () => {
  let component: CreateUpdateDeleteComponent;
  let fixture: ComponentFixture<CreateUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
