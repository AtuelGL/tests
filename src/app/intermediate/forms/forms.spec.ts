import { FormRegister } from './forms';
import { FormBuilder } from '@angular/forms';



describe('Formularios', () =>{

    let component: FormRegister;

    beforeEach(() => {
        component = new FormRegister( new FormBuilder() );
    });

    it('Debe de crear un formulario con dos campos', ()=>{
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('passwd')).toBeTruthy();
    });

    it('Email debe de ser obligatorio', ()=>{
        const control = component.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('Email debe de ser valido', ()=>{
        const control = component.form.get('email');
        control.setValue('atuelgl@gmail.com');
        expect(control.valid).toBeTruthy();
    });
});