import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionFotoComponent } from './section-foto/section-foto.component';
import { FooterComponent } from './footer/footer.component';
import { SectionTextoComponent } from './section-texto/section-texto.component';
import { SectionButtonComponent } from './section-button/section-button.component';

@Component({
  selector: 'app-page-principal',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, SectionFotoComponent, SectionTextoComponent,SectionButtonComponent],
  templateUrl: './page-principal.component.html',
  styleUrl: './page-principal.component.scss'
})
export class PagePrincipalComponent {

}
