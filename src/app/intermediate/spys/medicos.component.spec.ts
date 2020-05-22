import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, empty, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const service = new MedicosService( null );

    beforeEach( () => {
        componente = new MedicosComponent(service);
    });


    it('Init debe de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(service, 'getMedicos').and.callFake( ()=> {
            return from([medicos]);
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });

    it('Debe llaar al servidor para agregar medicos', () => {

        const spy = spyOn(service, 'agregarMedico').and.callFake( medico =>{
            return empty();
        });

        componente.agregarMedico();

        expect(spy).toHaveBeenCalled();

    });

    it('Debe de agregar un nuevo medico al arreglo de medicos', ()=>{

        const medico = {id: 1, name: 'Juan'};

        spyOn(service, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', ()=>{

        const myError = 'No se pudo agregar el medico';

        spyOn(service,'agregarMedico').and
        .returnValue(throwError(myError));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(myError);
    });

    it('Debe de llamar al servidor para borrar el medico', () => {

        spyOn(window, 'confirm').and.returnValue(true);

        const spy = spyOn(service, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(spy).toHaveBeenCalledWith('1');

    });

    it('No debe de llamar al servidor para borrar el medico', () => {

        spyOn(window, 'confirm').and.returnValue(false);

        const spy = spyOn(service, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(spy).not.toHaveBeenCalledWith('1');

    });


});
