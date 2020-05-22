import { Player2 } from './player2';



describe('Player 2 Emit', ()=>{

    let player: Player2;

    beforeEach(() => player = new Player2());

    it('debe de emitir un evento cuando recibe daño', ()=>{
        let newHp = 0;
        player.hpChange.subscribe(hp =>{
            newHp = hp;
        });

        player.getDamage(1000);

        expect(newHp).toBe(0);
    });

    it('debe de emitir un evento cuando recibe daño y sobrevivir si es menor a 100', ()=>{
        let newHp = 0;
        player.hpChange.subscribe(hp =>{
            newHp = hp;
        });

        player.getDamage(50);

        expect(newHp).toBe(50);
    });
});