import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCommentsComponent } from './theme-comments.component';

describe('ThemeCommentsComponent', () => {
  let component: ThemeCommentsComponent;
  let fixture: ComponentFixture<ThemeCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
