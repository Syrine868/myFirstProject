import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFilmComponent } from './reactive-form-film.component';

describe('ReactiveFormFilmComponent', () => {
  let component: ReactiveFormFilmComponent;
  let fixture: ComponentFixture<ReactiveFormFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
