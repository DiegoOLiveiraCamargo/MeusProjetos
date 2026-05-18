import { parseHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  temp1 = 0;
  temp2 = 0;
  temp3 = 0;
  temp4 = 0;
  valorRange1 = 0;
  valorRange2 = 0;
  valorRange3 = 0;
  valorRange4 = 0;

  constructor( public router: Router) {}

    abrirTela(){
        this.router.navigateByUrl(`/tela-confirmar/${this.temp1}/${this.temp2}/${this.temp3}/${this.temp4}`)
    }

    onIonChange(ev:  RangeCustomEvent, indice: number){
      const valor = parseInt(ev.detail.value.toString());

      switch(indice){
        case 1:
          this.valorRange1 = valor;
          break
        case 2:
          this.valorRange2 = valor;
          break
        case 3:
          this.valorRange3 = valor;
          break
        case 4:
          this.valorRange4 = valor;
          break
      }
    }
}
