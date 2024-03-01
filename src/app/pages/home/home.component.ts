import { Component, OnInit } from '@angular/core';
import { perfilData } from 'src/data/profile';
import { projetosData } from 'src/data/projetos';
import { Perfil } from 'src/models/perfil.model';
import { Projeto } from 'src/models/projeto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projetos: Projeto[] = projetosData;
  perfil: Perfil = perfilData;

  constructor() { }

  ngOnInit(): void {
  }

}
