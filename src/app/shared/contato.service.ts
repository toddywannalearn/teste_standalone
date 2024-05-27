export class ContatoService {
  private contatos: string[] = [];

  constructor() {
    this.contatos = ['contato 1', 'contato2', 'contato3'];
  }

  getContatos(): string[] {
    return this.contatos;
  }
}
