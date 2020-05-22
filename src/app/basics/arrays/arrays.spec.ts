import { getRobots } from './arrays';


xdescribe('Pruebas de arreglos', () => {
    it('debe de retornar al menos 3 robots', () => {
        const resp = getRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });
    it('debe de existir Megaman y Ultron', () => {
        const resp = getRobots();
        expect(resp).toContain('Megaman');
        expect(resp).toContain('Ultron');
    })
})