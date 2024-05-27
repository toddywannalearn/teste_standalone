import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../../shared/contato.service';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [ContatoService],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
})
export class Page2Component {
  contatos: string[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatos = this.contatoService.getContatos();
  }
}
