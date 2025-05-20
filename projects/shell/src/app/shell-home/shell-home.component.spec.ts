import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHomeComponent } from './shell-home.component';

describe('ShellHomeComponent', () => {
  let component: ShellHomeComponent;
  let fixture: ComponentFixture<ShellHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShellHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
