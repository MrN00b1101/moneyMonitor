import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyMakePage } from './family-make.page';

describe('FamilyMakePage', () => {
  let component: FamilyMakePage;
  let fixture: ComponentFixture<FamilyMakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyMakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyMakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
