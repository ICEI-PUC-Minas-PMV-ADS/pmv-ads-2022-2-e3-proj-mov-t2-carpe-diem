# 8. Plano de Testes de Software

Os testes funcionais a serem realizados no aplicativo são descritos abaixo.

 Requisitos para realização dos testes:<br/>
 •	Aplicativo pubilcado na plataforma escolhida;<br/>
 •	Conexão com a internet para conseguir acessar a plataforma.<br/>
 
|Caso de Teste | CT-01 - Realizar cadastro |
|:--|:--|
|**Requisitos Associados**|RF-001 – A aplicação deve permitir ao usuário realizar o cadastro. |  
|**Objetivo do teste**|- Permitir que o usuário se cadastre no aplicativo.|
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Preencher os campos com informações validas. <br/> 5) Clicar no botão cadastrar.|
|**Critérios de Êxito**| - Confirmação do cadastro e orientação para realizar o Login.|

|Caso de Teste | CT-02 - Realizar _login_ |
|:--|:--|
|**Requisitos Associados**|RF-006 - A aplicação deve permitir que o usuário faça login em sua conta através do seu e-mail e senha cadastrados.|  
|**Objetivo do teste**|- Permitir que o usuário faça _login_ no aplicativo.|
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Clicar no link "Já possui cadastro? Faça Login". <br/> 4) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 5) Clicar em entrar.|
|**Critérios de Êxito**| - Confirmação do _login_ e redirecionamento para _homepage_ do aplicativo.|

|Caso de Teste | CT-03 - Realizar gerenciamento do cadastro (editar) |
|:--|:--|
|**Requisitos Associados**|RF-002 – A aplicação deve permitir ao usuário gerenciar seu cadastro. |
|**Objetivo do teste**|- Permitir que o usuário altere suas informações cadastradas.|
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Clicar no link "Já possui cadastro? Faça Login". <br/> 4) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 5) Clicar em entrar. <br/> 6) Clicar no botão "Perfil" do menu. <br/> 7) Digitar os dados a serem alterados. <br/> 8) Clicar em salvar alterações.|
|**Critérios de Êxito**| - Confirmação de atualização de Cadastro.|

|Caso de Teste | CT-04 - Realizar gerenciamento do cadastro (excluir) |
|:--|:--|
|**Requisitos Associados**|RF-002 – O sistema deve permitir ao usuário gerenciar seu cadastro.  
|**Objetivo do teste**|- Permitir que o usuário exclua sua conta.|
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Clicar no link "Já possui cadastro? Faça Login". <br/> 4) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 5) Clicar em entrar. <br/> 6) Clicar no botão "Perfil" do menu. <br/> 6) Clicar em excluir.|
|**Critérios de Êxito**| - Confirmação da exclusão da conta.|
 
|Caso de Teste | CT-05 - Realizar busca por imóvel |
|:--|:--|
|**Requisitos Associados**|RF-003 – A aplicação deve permitir ao usuário realizar a busca de imóveis através da funcionalidade de filtros como localidade ("cidade destino"). <br/> RF-007 – A aplicação deve disponibilizar informações detalhadas quanto às características dos imóveis.
|**Objetivo do teste**|- Permitir que o usuário realize a busca por imóveis de acordo com o filtro "cidade destino". <br/> - Apresentar nos resultados da busca os imóveis disponíveis na localidade selecionada, com opção de detalhes para cada imóvel.|
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Clicar no link "Já possui cadastro? Faça Login". <br/> 4) Selecionar a cidade em "Escolha seu Destino".  <br/> 5) Clicar em buscar.|
|**Critérios de Êxito**|- Apresentar os imóveis de acordo com a cidade informada na busca. E cada imóvel apresentar a opção de detalhes. |

|Caso de Teste | CT-06 - Preencher formulário fale conosco |
|:--|:--|
|**Requisitos Associados**|RF-004 – A aplicação deve disponibilizar um formulário de fale conosco para esclarecer dúvidas relacionadas ao site.  
|**Objetivo do teste**|- Permitir o envio do formulário fale conosco. |
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Clicar no link "Já possui cadastro? Faça Login". <br/> 4) Clicar em “fale conosco” do menu. <br/> 5) Preencher o formulário. <br/> 6) Clicar em "enviar". |
|**Critérios de Êxito**|- Confirmação do envio do formulário.|

|Caso de Teste | CT-07 - Redefinir senha |
|:--|:--|
|**Requisitos Associados**|RF-005 – A aplicação deve permitir ao usuário solicitar a redefinição de sua senha, informando o e-mail cadastrado.  
|**Objetivo do teste**|- Permitir que o usuário redefina sua senha.|
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Clicar no link "Já possui cadastro? Faça Login". <br/> 4) Clicar no link "esqueci minha senha" da página de login. <br/> 5) Digitar _e-mail_ cadastrado e clicar em "recuperar senha".<br/> 6) Clicar no _link_ de redefinição recebido no _e-mail_ cadastrado.<br/> 7) Inserir a nova senha nos campos indicados e clicar no botão “salvar”. |
|**Critérios de Êxito**|- Receber _e-mail_ com _link_ para redefinição de senha.<br/> - Realizar novo _login_ após redefinir senha.|

|Caso de Teste | CT-08 - Acesso as Políticas e Condições de Uso |
|:--|:--|
|**Requisitos Associados**|RF-008 – A aplicação deve permitir acesso à documentação de política de privacidade e termos e condições de uso.  
|**Objetivo do teste**|- Permitir o acesso as políticas e condições de uso. |
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar em “Políticas e Condições de Uso” do menu. |
|**Critérios de Êxito**|- Apresentar as informações de políticas e condições de uso para o uso do aplicativo.
 
|Caso de Teste | CT-09 - Acesso as Políticas e Condições de Uso |
|:--|:--|
|**Requisitos Associados**|RF-009 – A aplicação deve permitir acesso às suas redes sociais.  
|**Objetivo do teste**|- Permitir o acesso às redes sociais do aplicativo. |
|**Passos**| 1)	Realizar o download do app na plataforma. <br/> 2) Clicar nos ícones de: Instagram, Twitter e Facebook. |
|**Critérios de Êxito**|- Apresentar as páginas das redes sociais do aplicativo, de acordo com cada ícone.|
