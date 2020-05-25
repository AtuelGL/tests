import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class FakeRouter{
  navigate(params){};
}

class FakeActivatedRoute{
  // params: Observable<any> = empty();

  private subject = new Subject();

  get params(){
    return this.subject.asObservable();
  }

  push(value){
    this.subject.next(value);
  }
}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Al guardar debe de redireccionar a la pagina de medico', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', ()=>{
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id:'nuevo'})
    expect(component.id).toBe('nuevo')

  })
});
