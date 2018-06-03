import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSettingsFormComponent } from './demo-settings-form.component';

describe('DemoSettingsFormComponent', () => {
  let component: DemoSettingsFormComponent;
  let fixture: ComponentFixture<DemoSettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSettingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
