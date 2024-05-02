import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [],
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.css'
})
export class ModuloComponent {


  domande: any[] = [
    {domanda: 'Domanda 1', risposta: ''},
    {domanda: 'Domanda 2', risposta: ''},
    {domanda: 'Domanda 3', risposta: ''},
    {domanda: 'Domanda 4', risposta: ''},
    {domanda: 'Domanda 5', risposta: ''},
  ];

  
}
