import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['../home/home.component.css']
})
export class RepositoriosComponent implements OnInit {
  resultados: any;
  pagina: number = 1;
  contador: number = 10;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['resultados']) {
        this.resultados = JSON.parse(params['resultados']);
      }
    });
  }
}