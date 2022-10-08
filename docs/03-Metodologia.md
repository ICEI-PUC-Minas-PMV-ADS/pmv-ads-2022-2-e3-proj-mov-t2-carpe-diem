
# 3. Metodologia

A metodologia pormenoriza as ferramentas aplicadas pelo grupo na organização e na estruturação da implantação das tarefas do projeto, assim como nas plataformas e artefatos utilizados para a manutenção e conservação dos códigos.

Em todos os artefatos produzidos no projeto, para melhor entendimento e padronização, a nomenclatura usuário será utilizada para os casos específicos do ator. 


## 3.1 Relação de Ambientes de Trabalho

Os artefatos do projeto são acompanhados e evoluídos com a ajuda de diferentes plataformas, cada qual com sua função específica. A combinação dos ambientes com suas respectivas finalidades é apresentada no quadro abaixo.

Quadro 8 - Ambientes de Trabalho

| AMBIENTE | PLATAFORMA | LINK DE ACESSO |
|----------|------------|----------------|
|Repositório de Código Fonte | _GitHub_ | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t2-carpe-diem |
|Documento do Projeto | _GitHub Docs_ | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t2-carpe-diem/tree/main/docs |
|Documento e Imagens do Projeto | _Google Drive_ | https://drive.google.com/drive/folders/1G8_-1YddGMTzaDmhfjCvY4k_b3dFiXZA |
|Projeto de Interface e _Wireframes_ | _Figma_ | Projeto <br> https://www.figma.com/file/MLy9JYx8OgyEiwEaGnb4JB/CarpeDiem-Mobile-(Wireframe)?node-id=8%3A101 <br> Wireframe Interativo <br> https://www.figma.com/proto/MLy9JYx8OgyEiwEaGnb4JB/CarpeDiem-Mobile-(Wireframe)?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2 |
|Gerenciamento do Projeto | _Git Projects_ | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/95 |

Fonte: Elaborado pelos autores


## 3.2 Gestão de Código Fonte

De acordo com Vietro (2015), é importante observar o uso de técnicas e metodologias para o desenvolvimento de sistemas, buscando melhorar as práticas atuais. Diante disso torna-se essencial o gerenciamento do _software_, e isso envolve administrar as várias etapas do processo, como, por exemplo: requisitos do sistema, arquitetura do _software_, padrões de codificação, gerência de configuração, _deploy_, entre outros.

Pensando nesse contexto, o grupo optou por utilizar um processo fundamentado no _GitFlow_ para a gestão do código fonte do _software_ que será desenvolvido.

O _GitFlow_ é um _framework_ criado em 2010 e considerado um ótimo modelo de _branching_, além de ser usado para trabalhar em conjunto com o sistema de controle de versão _Git_ (VIETRO, 2015). Assim sendo, as manutenções do código serão efetuadas definindo-se os papéis de cada _branch_ em separado, como eles devem interagir entre si, e com a identificação de _Branch Master, Branch Develop, Feature Branch, Release Branch, Maintenance Branch (Hotfix)_.

Figura 9 - _GitFlow Workflow_
Modelo de Fluxo de Controle do Código Fonte no Repositório _Git_

![image](https://user-images.githubusercontent.com/89549220/189541206-16bbdc25-c85d-4188-b87d-62775f1694e4.png)

Fonte: Vietro (2015)

Esse modelo de _workflow_ utiliza dois _branches_ principais para guardar o histórico do projeto, ao invés de trabalhar com apenas um _Branch Master_. O _Branch Master_ guarda o histórico oficial das entregas, já o _Branch Develop_ serve como integração entre todos os _branches_ de funcionalidades (_Feature Branches_). Cada funcionalidade deve ter seu próprio _branch_, e ele deve ser criado a partir do _Branch Develop_. Quando uma funcionalidade for concluída, ela é mesclada (_merged_) novamente com o seu _branch_ pai. Quando o _Branch Develop_ estiver com funcionalidades suficientes para uma entrega, criaremos um _branch_ de entrega (_Release Branch_). Com isso, damos início ao próximo ciclo de entrega, ou seja, nenhuma nova funcionalidade pode ser incluída a partir desse momento. Quando estivermos prontos para realizar a entrega, o _Release Branch_ é mesclada com os _branches Master e Develop_. O _Maintenance Branches (Hotfix)_ são usados para corrigir rapidamente algum problema em produção. Este é o único _branch_ que deve ser criado a partir do _Master_. Assim que a correção for finalizada, o _branch_ é fechado e mesclado com o _Master e Develop_, mantendo assim as linhas completamente atualizadas (VIETRO, 2015).


## 3.3 Gerenciamento de Projeto

O grupo decidiu por utilizar a metodologia Ágil, sendo escolhido o _Scrum_ como base para definição do processo de desenvolvimento do projeto.


### 3.3.1 Divisão de Papéis

A organização da equipe está apresentada conforme abaixo:

a) _Scrum Master_
- Fabiana Bicalho Palhano Rocha Cossenzo

b) _Product Owner_
- Eduardo Lordeiro Alves

c) Equipe de Desenvolvimento
- Eduardo Lordeiro Alves
- Fabiana Bicalho Palhano Rocha Cossenzo
- Nayara Katlin Oliveira da Silva
- Pedro Henrique Trindade Silva

d) Equipe de _Design_
- Eduardo Lordeiro Alves
- Fabiana Bicalho Palhano Rocha Cossenzo
- Nayara Katlin Oliveira da Silva
- Pedro Henrique Trindade Silva


### 3.3.2 Processo

Na organização e na distribuição das tarefas do projeto, o grupo utiliza o aplicativo de gerenciamento de projetos denominado _Git Projects_, onde o mesmo está estruturado com as seguintes listas:

- Documentação: sequência das tarefas referentes à documentação de contexto que serão trabalhadas pela equipe, conforme cronograma do curso.
- _Product Backlog_: local onde é adicionado as tarefas a serem trabalhadas pela equipe, assim como as tarefas que forem identificadas no andamento do projeto.
- _To Do_: representa o _Sprint Backlog_ atual que está sendo trabalhado.
- _In Progress_: tarefas que foram iniciadas são adicionadas nessa lista.
- _Test_ (CQ - Checagem de Qualidade): lista das tarefas que foram concluídas. Nesse estágio cabe-se ainda uma revisão para verificar a qualidade.
- _Done_: nesta lista são adicionadas as tarefas que passaram pela Checagem de Qualidade e estão prontas para serem enviadas e/ou entregues.
- _Locked_: lista onde será relacionado e especificado o que está impedindo a conclusão da tarefa, juntamente com um comentário sobre o que está travando a tarefa.

O quadro gerenciado pelo grupo no aplicativo _Git Projects_ está disponível através da URL especificada no Quadro 7 e é apresentado, em seu estado atual, congênere figura abaixo. A caracterização da estrutura montada se fundamentou no artigo escrito por Littlefield (2016), assim como nos conceitos de _Scrum_ de Schwaber e Sutherland (2020).

Figura 10 - Tela do _Git Projects_ para Gerenciamento do Projeto

![image](https://user-images.githubusercontent.com/89549220/194728615-4745a50c-506d-4ca8-80d2-17ff175b248f.png)

Fonte: _Git Projects_ - Elaborado pelos autores

Para visualizá-lo adequadamente torna-se necessário se direcionar para a aba _Projects_, ou através do [link](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/95).


## 3.4 Controle de Versão

A hospedagem do repositório, definida pela faculdade, será no _GitHub_, sendo assumido para o controle de versão do projeto, a utilização do _Git_.

O sistema de controle de versão moderno e mais utilizado é o _Git_ e, com ele, é possível acompanhar as alterações de código realizadas no decorrer da codificação, assim como ser possível reverter para versões anteriores e específicas (Taysser-Ghergal et al, 2022).

No que tange ao gerenciamento das _Issues_, optamos por adotar no projeto as etiquetas: _documentation, delivery, planning, invalid, help wanted e code review_.

A tarefas estão etiquetadas em função da natureza da atividade e seguem o esquema de cores/categorias conforme abaixo:

- _Documentation_
- _Delivery_
- _Planning_
- _Invalid_
- _Help Wanted_
- _Code Review_

Figura 11 - _Labels_

![image](https://user-images.githubusercontent.com/89549220/189545382-42e3f64f-2c34-402e-8c63-35058660181d.png)

Fonte: Elaborado pelos Autores


## 3.5 Ferramentas

As ferramentas aplicadas no projeto são:

a) Editor de código:
- _Visual Studio Code_ e _Expo_.
- Possuem integração com o _Git_, sendo possível realizar _commits_ do _GitHub_ para o _Visual Studio Code_.

b) Ferramentas de Comunicação:
- _WhatsApp, Discord, Microsoft Teams, Git Projects_.
- São ferramentas completas e úteis para a gestão da equipe, viabilizando as chamadas de vídeo, de áudio e/ou por _chat_, seja pelo computador ou pelo _smartphone_.

c) Ferramentas para Criação de Diagramas:
- _Lucidchart e Visio_
- Possui acesso gratuito e de fácil interação, sendo possível criar diagramas conforme a necessidade do projeto, assim como a edição colaborativa pela equipe.

d) Ferramentas de Desenho de Tela (_Wireframing_):
- _Figma_
- Possui acesso gratuito e de fácil interação, sendo possível criar _wireframes_ conforme a necessidade do projeto, assim como a edição colaborativa pela equipe.
