import{ Component } from '@angular/core'

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})

export class HelloComponent {

  nome: string;
  clientes: Cliente[];

  constructor() {
    this.nome = 'Higor';
    let fulano = new Cliente('Higor', 23);
    let cicraco = new Cliente('Cicrano',33);
    let outro = new Cliente('rapaz', 110);
    this.clientes = [fulano, cicraco, outro];

  }
}

class Cliente{
  constructor(
    public nome: string,
    public idade: number
    ){}
}
