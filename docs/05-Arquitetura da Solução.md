# 5. Arquitetura da Solução

A arquitetura de solução apresenta como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação. Seguem abaixo os principais elementos relacionados a esse tópico.


## 5.1 Diagrama de Classes

O diagrama de classes ilustra esquematicamente como será a estrutura do software e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

Figura 25 - Diagrama de Classes

![Diagrama de Classes - Mobile](https://user-images.githubusercontent.com/89549220/194717860-20514f20-3dca-4baf-8842-45a32d72c7e5.png)

Fonte: Elaborado pelos autores


## 5.2 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa. Segue abaixo a representação do Modelo ER:

Figura 26 - Modelo ER

![Modelo ER](img/MER.png)

Fonte: Elaborado pelos autores.


## 5.3 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária. Segue abaixo a representação do Esquema Relacional:

Figura 27 - Esquema Relacional

![Esquema Relacional_Mobile](https://user-images.githubusercontent.com/89549220/193962871-3369ea16-d256-4983-9f37-49826326c30d.png)

Fonte: Elaborado pelos autores


## 5.4 Diagrama de Componentes

Compreendemos nessa seção os componentes que fazem parte da arquitetura da solução, consoante figura adiante.

Figura 28 - Arquitetura da Solução

(inserir imagem)

Fonte: Elaborado pelos autores


A arquitetura da solução concretizada conta com os seguintes módulos:

- Navegador - Interface básica do sistema (adaptar)
   * Páginas Web - Conjunto de arquivos JavaScript, Bootstrap e imagens que efetivam as funcionalidades do sistema.
- Hospedagem - local na Internet onde as páginas serão mantidas e conectadas pelo navegador. 
   * Plataforma Azure
- Local Storage - armazenamento mantido no Navegador, onde são empreendidos bancos de dados baseados no JSON (JavaScript Object Notation).  
   * Dados do Hóspede
   * Dados do Cadastro do Imóvel
   * Dados da Reserva do Imóvel


## 5.5 Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.


## 5.6 Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços _web, frameworks_, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

- Linguagens e _frameworks_ utilizadas para desenvolver o projeto: JavaScript
- IDEs de desenvolvimento: Visual Studio Code e Expo
- Plataforma para hospedagem do site: Expo
- Plataforma para hospedagem dos arquivos: _GitHub e Google Drive_
- Ferramenta de versionamento: _Git e GitHub Desktop_
- Ferramenta para a criação de logo e imagens: Figma, CorelDraw
- Ferramenta para criação do _template / wireframe_: Figma e Adobe XD
- Ferramenta para criação de diagramas e fluxos: Lucidchart e Visio
- Banco de Dados: SQLite


## 5.7 Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)


## 5.8 Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identificamos as sub-características que utilizararemos como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade.


### 5.8.1 Métricas de Qualidade de _Software_

Quadro 9 - Métricas de Qualidade

| CARACTERÍSTICA DE QUALIDADE | SUB-CARACTERÍSTICAS DE QUALIDADE ESCOLHIDAS |     JUSTIFICATIVA     | 
|-----------------------------|---------------------------------------------|-----------------------|
| Funcionalidade              | Acurácia; Segurança de Acesso               | Verificar se as funcionalidades estão de acordo com os requisitos levantados e a capacidade do _software_ de evitar o acesso não autorizado a dados | 
| Confiabilidade              | Maturidade; Recuperabilidade                | Verificar a capacidade do software em manter seu nível de desempenho | 
| Usabilidade                 | Inteligibilidade; Apreensibilidade          | Pensar em usabilidade é fundamental para medir o esforço do usuário em utilizar o _software_ | 
| Eficiência                  | Comportamento em relação ao tempo           | Avaliar o relacionamento entre o nível de desempenho do _software_ e a quantidade de recursos utilizada , sob condições estabelecidas  |
| Manutenibilidade            | Analisibilidade; Testabilidade              | Validar o _software_ e avaliar o risco de efeitos inesperados ocasionados por modificações |
| Portabilidade               | Adaptabilidade; Capacidade de instalação    | Testar a facilidade de instalação e a capacidade do _software_ em ser transferido de um ambiente para outro | 


| SUB-CARACTERÍSTICA                | MÉTRICAS DE QUALIDADE DE _SOFTWARE_                                                   | PESO |
|-----------------------------------|---------------------------------------------------------------------------------------|------|
| Acurácia                          | O _software_ gera resultados corretos e precisos para cada funcionalidade proposta?   | Alto |
| Acurácia                          | O _software_ é capaz de executar completamente todas as funções propostas?            | Alto |
| Segurança de Acesso               | Os dados coletados no cadastro estão armazenados de forma segura?                     | Alto |
| Segurança de Acesso               | O _software_ possui etapas de autorização e autenticação no momento do acesso?        | Alto |
| Maturidade                        | O _software_ apresenta falhas?                                                        | Alto |
| Maturidade                        | Qual a frequência entre as falhas?                                                    | Alto |
| Recuperabilidade                  | O _software_ consegue recuperar os dados após as falhas?                              | Alto |
| Recuperabilidade                  | Qual o tempo de recuperação da sessão em casos de falhas?                             | Alto |
| Inteligibilidade                  | O _software_ consegue transmitir os objetivos propostos?                              | Alto |
| Inteligibilidade                  | O usuário consegue reconhecer a lógica de funcionamento do _software_?                | Alto |
| Apreensibilidade                  | O _software_ apresenta telas que são de uso intuitivo?                                | Alto |
| Apreensibilidade                  | O _software_ apresenta funcionalidades que são compreendidas facilmente?              | Alto |
| Comportamento em relação ao tempo | O _software_ apresenta tempo de resposta esperado em troca de telas?                  | Alto |
| Comportamento em relação ao tempo | O _software_ apresenta velocidade na execução e no processamento de suas funções?     | Alto |
| Analisibilidade                   | O _software_ está bem documentado?                                                    | Alto |
| Analisibilidade                   | Para realizar manutenções é necessário muito esforço ao analisar o código?            | Alto |
| Testabilidade                     | O _software_ pode ser testado após modificações?                                      | Alto |
| Testabilidade                     | O _software_ possui registro de testes antes de atualizações?                         | Alto |
| Adaptabilidade                    | O _software_ é capaz de executar todas as suas funções em dispositivos Android e IOS? | Alto |
| Capacidade de instalação          | O _software_ pode ser instalado de maneira rápida e intuitiva?                        | Alto |

Fonte: Elaborado pelos autores
