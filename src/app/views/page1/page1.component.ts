import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContatoService } from '../../shared/contato.service';
import { CustomHeaderComponent } from '../../shared/custom-header/custom-header.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, CustomHeaderComponent, RouterModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
})
export class Page1Component {
  contatos: string[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatos = this.contatoService.getContatos();
  }
}
