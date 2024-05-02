import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuloComponent } from './componenti/modulo/modulo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModuloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'made';
}
