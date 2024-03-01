import { Component, OnInit,Input } from '@angular/core';
import { Stack } from 'src/models/stack.model';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css'],
})
export class ProjetoCardComponent implements OnInit {

  @Input()
  imagem: string = '';

  @Input()
  titulo: string = '';

  @Input()
  descricao: string = '';

  @Input()
  deploy: string = '';

  @Input()
  stacks: Stack[] = [];

  @Input()
  repositorio: string = '';

  constructor() {}

  ngOnInit(): void {}
}
