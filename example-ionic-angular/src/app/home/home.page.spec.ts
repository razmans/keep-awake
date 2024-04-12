import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create check whether keep awake is supported', () => {
    component.checkIsSupported().then(result => {
      expect(result).toBe(true);
    });
  });

  it('should create keep awake', () => {
    component.keepAwake();
    expect(component.isKeptAwake).toBe(true);
  });

  it('should be able to allow to sleep', () => {
    component.allowToSleep();
    expect(component.isKeptAwake).toBe(false);
  });
});
