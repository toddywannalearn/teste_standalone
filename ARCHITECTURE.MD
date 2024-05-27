
## 1. Estilos

1.1 Usar a metodologia BEM (Bloco, Elemento, Modificador) para padronizar os arquivos CSS.

[Tutorial Padrão BEM](https://desenvolvimentoparaweb.com/css/bem/)


``` html
<ul class="c-menu">
  <div class="c-menu__item">
    <a href="#" class="c-menu__link">Item</a>
  </div>
 
  <div class="c-menu__item">
    <a href="#" class="c-menu__link c-menu__link--disabled">Outro item</a>
  </div>
 
  <div class="c-menu__item">
    <a href="#" class="c-menu__link">E mais um</a>
  </div>
</ul>
```

``` css
.c-menu {}
 
.c-menu__item {}
 
.c-menu__link {}
 
.c-menu__link--disabled {}
```

1.2 Utilize as váriaveis do IDS(design system) para definições de tamanho de fonte, espaçamentos, entre outros.

O IDS prove váriaveis com valores já definidos para fontes, tamanhos de fonte, espaçamentos, entre outros, não sendo necessário que voce fique decidindo entre usar px ou rem por exemplo.

## 2. Nomenclaturas e idiomas
Além dos padrões de nomenclatura citados abaixo também é necessário respeitar o idioma decidido para os vários aspectos do código, neste caso optamos por conciliar o **inglês** e o **portugues** devido ao contexto em que estamos inseridos, onde o dominio deverá ser majoritariamente em português e o que for relacionado ao framework e sintaxes que apoiam o negócios serão em inglês.

### 2.1 Idioma

Classes, váriaveis, funções, entre outros que forem relacionados ao:

- Dominio
  - Devem ser descritos em portugues.
  - Podem receber prefixos em inglês que façam sentido ao seu objetivo.

>Normalmente serão os membros publicos das classes que devem ser claros e representar com facilidade as regras do negócio.

``` ts
valorSimulado: number;
operador: IOperador;

getSimulacao() {
    doRequest(); //códigos de apoio que normalmente são privados podem ser em inglês
};

goToAutenticacao() {}:
```

- Framework e pura lógica
  - Devem ser descritos em inglês

``` ts
biggestValue: number;
responseOferta: IResponse;

doRequest() {};

countNumber(num: number): number {};
```
### 2.2 Nomenclaturas
**Classes:** Devem usar o padrão PascalCase

- Ex: SimulacaoCG

**Variaveis e Atributos:** Devem usar o padrão camelCase
``` ts
 valorSimulado: number
 ```

**Funções e métodos:** Devem usar o padrão camelCase
``` ts
 doRequest() {};
 ```

**Interfaces**: Devem começar com o prefixo I
``` ts
 export class IOperador()
 ```

**Arquivos:** Arquivos e diretórios devem ser escritos em minusculo e no caso de palavras compostas usar hifen para separar.

``` ts
 import * from './custom-header.component.html'
 import * from './simulacao.service.ts'
 ```


## 3. Funcionalidades

Esta aplicação tem como objetivo servir como o front-end da Contratação de Conta Garantida e suas garantias.

Inicialmente contaremos com as seguintes funcionalidades:

**Landing Page Conta Garantida**

Apresenta uma tela que exibe todas as ofertas disponíveis de conta garantida para o cartões e direciona para a contratação caso possua a oferta e clique em contratar.
- No caso da garantia de CG Cartões que já esta nessa aplicação o cliente somente mudará mudará de página pelo Angular route;
- Para as garantias que ainda não estão aqui o cliente será direcionado pela op.

**Contratação de Conta Garantida Cartões**

Contratação modernizada do CG com garantia de cartões que apresenta tela de simulação, efetivação e comprovante.

## 4. Tecnologias e pacotes utilizados
- RXJS

## 5. Execução do projeto e adição de nova feature/fix
### 5.1 Adição de feature/fix

- Crie uma nova branch seguindo o padrão do IUPipes 2.0

[Link IUPipes 2.0]()

- Atualize a versão no arquivos iupipes.yml seguindo o versionamento semântico.

> Como recomendação faça isso o quanto antes para não esquecer e correr o risco de subir sua alteração e a mesma sobrepor outras.

[Introdução ao versionamento semântico](https://www.alura.com.br/artigos/versionamento-semantico-breve-introducao)


- Instale as dependências
``` sh
cd app
npm install
```

### 5.2 Execução do projeto


Execução do projeto:
``` sh
npm run start
```
## 6. Arquitetura
O projeto segue a arquitetura de BFF

Front
BFF
APIs

## 7. Design system e Lib Commons

### 7.1 IDS
O Ids é o design system oficial do banco e nele encontramos a maior parte dos componentes que precisamos para suprir a nossa aplicação e também manter a identidade visual do banco padronizada de acordo com seus canais e segmentos.

[Link IDS aqui]()

### 7.2 Lib Commons
Além do IDS também temos aqui na squad uma lib de serviços, componentes, entre outros que possam vir a ser reutilizados e que estão mais direcionados ao contexto da nossa squad.

[Link nossa doc github]()

## 8. Convenção de commits

## 9. Code review
As subidas de alterações devem ser revisadas por algum parceiro da equipe afim de que sejam aprovadas. É importante que os papéis do responsável pela alteração e do revisor sejam respeitadas e bem feitas para que a cultura de code review evolua na squad.

**Responsável alteração:** 
- Ao abrir o pull request para a Develop o mesmo deve solicitar para algum membro do time realizar o code review da PR.
- Deve explicar o contexto da alteração para o revisor

**Revisor:** 
- Deve revisar a PR solicitada considerando as boas práticas e também as diretrizes e padrões citados no arquivo ARCHITECURE.md

## 10. Conhecimentos necessários

## 11. Estrutura de pastas
Caso a service seja utilizada somente por uma View e estiver relacionada ao seu contexto, esta deve estar na mesma pasta.

Interfaces de components como props, entre outros podem ficar dentro do próprio arquivo