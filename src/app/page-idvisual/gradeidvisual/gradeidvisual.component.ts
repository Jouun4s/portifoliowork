import { Component } from '@angular/core';

@Component({
  selector: 'app-gradeidvisual',
  standalone: true,
  imports: [],
  templateUrl: './gradeidvisual.component.html',
  styleUrl: './gradeidvisual.component.scss'
})
export class GradeidvisualComponent {

  downloadNOTION() {
    const link = document.createElement('a');
    link.href = 'assets/imagens/Manual de marca notion.pdf'; // caminho do seu arquivo PDF
    link.download = 'Notion - Manual de marca'; // nome do arquivo que será baixado
    link.click();
  }

  downloadST() {
    const link = document.createElement('a');
    link.href = 'assets/imagens/Software Team.pdf'; // caminho do seu arquivo PDF
    link.download = 'Software Team - Manual de marca'; // nome do arquivo que será baixado
    link.click();
  }
}

