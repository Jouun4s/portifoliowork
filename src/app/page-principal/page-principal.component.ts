import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TextoComponent } from './texto/texto.component';
import { ImagensComponent } from './imagens/imagens.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-page-principal',
  standalone: true,
  imports: [NavbarComponent, TextoComponent,FooterComponent,ImagensComponent],
  templateUrl: './page-principal.component.html',
  styleUrl: './page-principal.component.scss'
})
export class PagePrincipalComponent {

}
