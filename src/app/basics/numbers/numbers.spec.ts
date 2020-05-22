import { increment } from './numbers';


describe('Pruebas de numeros', () => {

    it('Debe de regresar 100 si el numero ingresado es mayor a 100', () => {
        const resp = increment(300);
        expect(resp).toBe(100);
    });

    it('Debe de regresar el numero ingresado + 1 si no es mayor a 100', () => {
        const resp = increment(50);
        expect(resp).toBe(51);
    });


});