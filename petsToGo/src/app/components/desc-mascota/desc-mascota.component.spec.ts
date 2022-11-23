import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescMascotaComponent } from './desc-mascota.component';

describe('DescMascotaComponent', () => {
  let component: DescMascotaComponent;
  let fixture: ComponentFixture<DescMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
