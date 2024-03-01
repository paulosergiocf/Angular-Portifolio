import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao-card',
  templateUrl: './apresentacao-card.component.html',
  styleUrls: ['./apresentacao-card.component.css'],
})
export class ApresentacaoCardComponent implements OnInit {
  @Input()
  imagem: string = ""

  @Input()
  titulo: string = '';

  @Input()
  subtitulo: string = '';

  @Input()
  descricao: string = '';

  constructor() {}

  ngOnInit(): void {}
}
