
# Metodologia

A metodologia pormenoriza as ferramentas aplicadas pelo grupo na organização e na estruturação da implantação das tarefas do projeto, assim como nas plataformas e artefatos utilizados para a manutenção e conservação dos códigos.

Em todos os artefatos produzidos no projeto, para melhor entendimento e padronização, a nomenclatura usuário será utilizada para os casos específicos do ator. 


## Relação de Ambientes de Trabalho

Os artefatos do projeto são acompanhados e evoluídos com a ajuda de diferentes plataformas, cada qual com sua função específica. A combinação dos ambientes com suas respectivas finalidades é apresentada no quadro abaixo.

Quadro x - Ambientes de Trabalho

| AMBIENTE | PLATAFORMA | LINK DE ACESSO |
|----------|------------|----------------|
|Repositório de Código Fonte | GitHub | |
|Documento do Projeto | GitHub Docs | |
|Documento e Imagens do Projeto | Google Drive | |
|Projeto de Interface e _Wireframes_ | Figma | |
|Gerenciamento do Projeto | _Git Projects_ | |

Fonte: Elaborado pelos autores


## Gestão de Código Fonte

De acordo com Vietro (2015), é importante observar o uso de técnicas e metodologias para o desenvolvimento de sistemas, buscando melhorar as práticas atuais. Diante disso torna-se essencial o gerenciamento do software, e isso envolve administrar as várias etapas do processo, como, por exemplo: requisitos do sistema, arquitetura do software, padrões de codificação, gerência de configuração, deploy, entre outros.

Pensando nesse contexto, o grupo optou por utilizar um processo fundamentado no GitFlow para a gestão do código fonte do software que será desenvolvido.

O GitFlow é um framework criado em 2010 e considerado um ótimo modelo de branching, além de ser usado para trabalhar em conjunto com o sistema de controle de versão Git (VIETRO, 2015). Assim sendo, as manutenções do código serão efetuadas definindo-se os papéis de cada branch em separado, como eles devem interagir entre si, e com a identificação de Branch Master, Branch Develop, Feature Branch, Release Branch, Maintenance Branch (Hotfix).

Figura 2 - _GitFlow Workflow_
Modelo de Fluxo de Controle do Código Fonte no Repositório _Git_

![image](https://user-images.githubusercontent.com/89549220/189541206-16bbdc25-c85d-4188-b87d-62775f1694e4.png)

Fonte: Vietro (2015)

Esse modelo de workflow utiliza dois branches principais para guardar o histórico do projeto, ao invés de trabalhar com apenas um Branch Master. O Branch Master guarda o histórico oficial das entregas, já o Branch Develop serve como integração entre todos os branches de funcionalidades (Feature Branches). Cada funcionalidade deve ter seu próprio branch, e ele deve ser criado a partir do Branch Develop. Quando uma funcionalidade for concluída, ela é mesclada (merged) novamente com o seu branch pai. Quando o Branch Develop estiver com funcionalidades suficientes para uma entrega, criaremos um branch de entrega (Release Branch). Com isso, damos início ao próximo ciclo de entrega, ou seja, nenhuma nova funcionalidade pode ser incluída a partir desse momento. Quando estivermos prontos para realizar a entrega, o Release Branch é mesclada com os branches Master e Develop. O Maintenance Branches (Hotfix) são usados para corrigir rapidamente algum problema em produção. Este é o único branch que deve ser criado a partir do Master. Assim que a correção for finalizada, o branch é fechado e mesclado com o Master e Develop, mantendo assim as linhas completamente atualizadas (VIETRO, 2015).


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

O grupo decidiu por utilizar a metodologia Ágil, sendo escolhido o Scrum como base para definição do processo de desenvolvimento do projeto.

### Divisão de Papéis

Sua organização está apresentada conforme abaixo:

a) Scrum Master
Fabiana Bicalho Palhano Rocha Cossenzo

b) Product Owner
Eduardo Lordeiro Alves

c) Equipe de Desenvolvimento

Eduardo Lordeiro Alves
Fabiana Bicalho Palhano Rocha Cossenzo
Jaqueline Camara Poletto
Nayara Katlin Oliveira da Silva

d) Equipe de Design

Eduardo Lordeiro Alves
Fabiana Bicalho Palhano Rocha Cossenzo
Nayara Katlin Oliveira da Silva

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
