import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

//Seleciona todos usuarios
export const getUsuario = async () => {
  let results = await DB_EXEC(
    "SELECT * " + 
    "FROM Usuario"
  );
  
  return results.rows._array;
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