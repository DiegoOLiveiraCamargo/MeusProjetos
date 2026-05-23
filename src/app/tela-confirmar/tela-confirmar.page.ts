import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
  standalone: false
})
export class TelaConfirmarPage implements OnInit {
  temp1: any;
  temp2: any;
  temp3: any;
  temp4: any;
  media = 0;
  resposta: string[] = [];
  frutas = [
  { nome: 'Banana', min: 26, max: 30 },
  { nome: 'Manga', min: 24, max: 30 },
  { nome: 'Abacaxi', min: 22, max: 32 },
  { nome: 'Mamão', min: 22, max: 28 },
  { nome: 'Laranja', min: 23, max: 32 },
  { nome: 'Maçã', min: 18, max: 24 },
  { nome: 'Morango', min: 13, max: 26 },
  { nome: 'Uva', min: 15, max: 30 },
  { nome: 'Pêssego', min: 15, max: 25 },
  { nome: 'Kiwi', min: 10, max: 25 }
];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.temp1 = this.activatedRoute.snapshot.paramMap.get('temp1');
    this.temp2 = this.activatedRoute.snapshot.paramMap.get('temp2');
    this.temp3 = this.activatedRoute.snapshot.paramMap.get('temp3');
    this.temp4 = this.activatedRoute.snapshot.paramMap.get('temp4');

    this.media = (Number(this.temp1) + Number(this.temp2) + Number(this.temp3) + Number(this.temp4))/4;
    
    this.resposta = this.buscarFrutas(this.media);
  }

  buscarFrutas(temperatura: number): string[] {
  return this.frutas
    .filter(fruta => temperatura >= fruta.min && temperatura <= fruta.max)
    .map(fruta => fruta.nome);
}

  
  
} 