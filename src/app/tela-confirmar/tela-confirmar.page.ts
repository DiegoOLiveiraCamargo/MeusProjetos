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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.temp1 = this.activatedRoute.snapshot.paramMap.get('temp1');
    this.temp2 = this.activatedRoute.snapshot.paramMap.get('temp2');
    this.temp3 = this.activatedRoute.snapshot.paramMap.get('temp3');
    this.temp4 = this.activatedRoute.snapshot.paramMap.get('temp4');

    this.media = (this.temp1 + this.temp2 + this.temp3 + this.temp4)/4;

    
  }
}
