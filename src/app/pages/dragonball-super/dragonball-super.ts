import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';

interface Character{
  id: number,
  name : string,
  power: number
}


@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
})
export class DragonballSuper {
 name = signal('');
  power = signal(0)

 characters = signal<Character[]>([
  { id: 1, name: 'Goku', power: 9001},
  { id: 2, name: 'Vegeta', power: 8000}
 ]);


 addCharacter(){
    if(!this.name() || !this.power() || this.power() <=0){
      return;
    }

    const newCharacter  : Character ={
      id : this.characters().length + 1,
      name : this.name(),
      power : this.power()
    };

    this.characters.update(actList => [...actList,newCharacter]);
    this.name.set('');
    this.power.set(0);
 }
}
