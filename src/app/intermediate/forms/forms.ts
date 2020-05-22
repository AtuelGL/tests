import { FormGroup, FormBuilder, Validators } from '@angular/forms'

export class FormRegister{

    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            email: ['', [Validators.required, Validators.email]],
            passwd: ['', Validators.required]
        });
    }
}
