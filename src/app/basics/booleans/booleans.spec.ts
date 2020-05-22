import { userLogged } from './booleans';



describe('Pruebas de booleanos', () =>{
    it('Debe de regresar true', ()=>{
        const resp = userLogged();
        expect(resp).toBeTruthy();
    })
})