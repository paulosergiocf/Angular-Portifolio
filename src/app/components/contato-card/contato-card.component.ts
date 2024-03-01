import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contato-card',
  templateUrl: './contato-card.component.html',
  styleUrls: ['./contato-card.component.css'],
})
export class ContatoCardComponent implements OnInit {

  @Input()
  telefone: string = '';
  @Input()
  email: string = '';
  @Input()
  github: string = '';
  @Input()
  githubUrl: string = '';
  @Input()
  linkedin: string = '';
  @Input()
  linkedinUrl: string = '';
  @Input()
  curriculoUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
