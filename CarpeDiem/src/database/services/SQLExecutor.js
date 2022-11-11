import Database from "./DbServices";

const usuarioLogin = {
  id: '',
  nome: '',
  cpf: '',
  email: '',
  senha: '',
}

const montaDadosUsuario = (dadosUsuario) => {
  usuarioLogin.id = dadosUsuario.id;
  usuarioLogin.nome = dadosUsuario.nome;
  usuarioLogin.cpf = dadosUsuario.cpf;
  usuarioLogin.email = dadosUsuario.email;
  usuarioLogin.senha = dadosUsuario.senha;

  return usuarioLogin;
}

const DB_EXEC = Database.getConnection();

//Seleciona todos usuarios
export const getUsuario = async () => {
  let results = await DB_EXEC(
    "SELECT * " + 
    "FROM Usuario"
  );

  return results.rows._array;
};

//Procura registro de usuario ao realizar login
export const getUsuarioLogin = async (email, senha) => {
  let results = await DB_EXEC(
    "SELECT * " + 
    "FROM Usuario " +
    "WHERE email=? " +
    "AND senha=? ",
    [email, senha]
  );

  return montaDadosUsuario(results.rows._array[0]);
};

//Insere usuario
export const insertUsuario = async (params) => {
  let results = await DB_EXEC(
    "INSERT INTO Usuario " + 
    "(nome, cpf, email, senha) " + 
    "VALUES(?,?,?,?)",
    [params.nome, params.cpf, params.email, params.senha]
  );

  return results.rowsAffected;
};

//Atualiza email do usuario
export const updateUsuarioEmail = async (params) => {
  let results = await DB_EXEC(
    "UPDATE Usuario " + 
    "SET email=? " + 
    "WHERE id=?", 
    [params.email, params.id, ]);

  return results.rowsAffected;
}

//Remove registro do usuario
export const deleteUsuario = async (id) => {
  let results = await DB_EXEC(
    "DELETE * " + 
    "FROM Usuario " + 
    "WHERE id=?", 
    [id]);

  return results.rowsAffected;
}