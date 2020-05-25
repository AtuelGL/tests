import { ROUTES } from './app.routes';
import { MedicoComponent } from '../../intermediate2/medico/medico.component';



describe('Rutas principales', ()=>{

    it('debe de existir la ruta /medico/id', ()=>{
        expect(ROUTES).toContain(
            {path: 'medico/:id', component: MedicoComponent});
    });
});