import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Distancia: number = null
  ConsumoGasolina: number = null
  precoGasolina: number = null
  Total: number = 0 
  Litro: number = 0
  constructor() {}

  CalcularGasto(){
    this.Litro = this.Distancia / this.ConsumoGasolina;
    this.Total = this.precoGasolina * this.Litro;
  }




}
