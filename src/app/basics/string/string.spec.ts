import { message } from './string';



// describe('Pruebas de strings');
// it('Debe de regresar un string')


describe('Pruebas de strings', () => {
    it('Debe de regresar un string', () => {
        const resp = message('Atuel');
        expect(typeof resp).toBe('string');
    });

    it('Debe de regresar un saludo con el nombre enviado', () => {

        const name = 'Juan';
        const resp = message(name);

        expect(resp).toContain(name);
    });
});