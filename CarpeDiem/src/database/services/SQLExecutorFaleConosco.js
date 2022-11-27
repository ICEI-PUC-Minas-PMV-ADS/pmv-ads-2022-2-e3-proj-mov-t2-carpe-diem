import Database from "./DbServices";

// const usuarioLogin = {
//   id: '',
//   nome: '',
//   email: '',
//   mensagem: '',
// }

// const montaDadosFaleConosco = (dadosUsuario) => {
//   usuarioLogin.id = dadosUsuario.id;
//   usuarioLogin.nome = dadosUsuario.nome;
//   usuarioLogin.cpf = dadosUsuario.cpf;
//   usuarioLogin.email = dadosUsuario.email;
//   usuarioLogin.mensagem = dadosUsuario.mensagem;

//   return usuarioLogin;
// }

const DB_EXEC = Database.getConnection();

//Seleciona todos usuarios
export const getFaleConosco = async () => {
  let results = await DB_EXEC(
    "SELECT * " + 
    "FROM FaleConosco"
  );

  return results.rows._array;
};

//Procura registro de usuario ao realizar login
// export const getUsuarioLogin = async (email, mensagem) => {
//   let results = await DB_EXEC(
//     "SELECT * " + 
//     "FROM Usuario " +
//     "WHERE email=? " +
//     "AND mensagem=? ",
//     [email, mensagem]
//   );

//   return montaDadosUsuario(results.rows._array[0]);
// };

//Insere usuario
export const insertFaleConosco = async (params) => {
  let results = await DB_EXEC(
    "INSERT INTO FaleConosco " + 
    "(nome, email, mensagem) " + 
    "VALUES(?,?,?)",
    [params.nome, params.email, params.mensagem]
  );

  return results.rowsAffected;
};

//Atualiza email do usuario
// export const updateUsuarioEmail = async (params) => {
//   let results = await DB_EXEC(
//     "UPDATE Usuario " + 
//     "SET email=? " + 
//     "WHERE id=?", 
//     [params.email, params.id, ]);

//   return results.rowsAffected;
// }

//Atualiza nome do usuario
// export const updateUsuarioNome = async (params) => {
//   let results = await DB_EXEC(
//     "UPDATE Usuario " + 
//     "SET nome=? " + 
//     "WHERE email=?", 
//     [params.nome, params.email, ]);

//   return results.rowsAffected;
// }

//Remove registro do usuario
// export const deleteUsuario = async (id) => {
//   let results = await DB_EXEC(
//     "DELETE * " + 
//     "FROM Usuario " + 
//     "WHERE id=?", 
//     [id]);

//   return results.rowsAffected;
// }