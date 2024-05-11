import { Component } from '@angular/core';
import { FootepublicidadeComponent } from './footepublicidade/footepublicidade.component';
import { NavpublicidadeComponent } from './navpublicidade/navpublicidade.component';
import { TituloPublicidadeComponent } from './titulo-publicidade/titulo-publicidade.component';
import { GradeComponent } from './grade/grade.component';


@Component({
  selector: 'app-page-publicidade',
  standalone: true,
  imports: [TituloPublicidadeComponent,GradeComponent,NavpublicidadeComponent,FootepublicidadeComponent],
  templateUrl: './page-publicidade.component.html',
  styleUrl: './page-publicidade.component.scss'
})
export class PagePublicidadeComponent {

}
