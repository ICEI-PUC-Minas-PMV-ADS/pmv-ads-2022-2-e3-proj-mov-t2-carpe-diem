import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

//Seleciona todos usuarios
export const getUsuario = async () => {
  let results = await DB_EXEC(`select * from usuario`);
  
  // console.log(results.rows._array);
  return results.rows._array;
};

//Insere usuario
export const insertUsuario = async (param) => {
  let results = await DB_EXEC(`insert into usuario (id, nome, cpf, email, senha) values(?,?,?,?,?)`,
    [param.id, param.nome, param.cpf, param.email, param.senha]
  );

  // console.log(results.rowsAffected);
  return results.rowsAffected;
};