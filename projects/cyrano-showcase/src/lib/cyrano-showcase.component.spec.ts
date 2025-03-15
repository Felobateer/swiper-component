import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyranoShowcaseComponent } from './cyrano-showcase.component';

describe('CyranoShowcaseComponent', () => {
  let component: CyranoShowcaseComponent;
  let fixture: ComponentFixture<CyranoShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyranoShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyranoShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
