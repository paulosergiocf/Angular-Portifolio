import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeBarComponent } from './rodape-bar.component';

describe('RodapeBarComponent', () => {
  let component: RodapeBarComponent;
  let fixture: ComponentFixture<RodapeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapeBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
