import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

//Seleciona dados FaleConosco
export const getFaleConosco = async () => {
  let results = await DB_EXEC(
    "SELECT * " + 
    "FROM FaleConosco"
  );

  return results.rows._array;
};

//Insere Formulario FaleConosco
export const insertFaleConosco = async (params) => {
  let results = await DB_EXEC(
    "INSERT INTO FaleConosco " + 
    "(nome, email, mensagem) " + 
    "VALUES(?,?,?)",
    [params.nome, params.email, params.mensagem]
  );

  return results.rowsAffected;
};
