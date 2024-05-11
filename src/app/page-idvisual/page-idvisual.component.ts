import { Component } from '@angular/core';
import { NavidvisualComponent } from './navidvisual/navidvisual.component';
import { FooteridvisualComponent } from './footeridvisual/footeridvisual.component';
import { GradeidvisualComponent } from './gradeidvisual/gradeidvisual.component';
import { TituloidvisualComponent } from './tituloidvisual/tituloidvisual.component';

@Component({
  selector: 'app-page-idvisual',
  standalone: true,
  imports: [NavidvisualComponent, FooteridvisualComponent, TituloidvisualComponent, GradeidvisualComponent],
  templateUrl: './page-idvisual.component.html',
  styleUrl: './page-idvisual.component.scss'
})
export class PageIdvisualComponent {

}
