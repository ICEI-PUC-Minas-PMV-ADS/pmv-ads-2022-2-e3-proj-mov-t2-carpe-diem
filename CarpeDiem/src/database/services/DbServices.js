import * as SQLite from "expo-sqlite";

const Database = {
  // Inicia conexao com a  base
  getConnection: () => {
    // Instancia um .bd caso não estabeleca conexao
    // const dataBase = SQLite.openDatabase("carpe_diem.db");
    const dataBase = SQLite.openDatabase("carpe_diem2.db");

    // Cria a table Usuario
    dataBase.transaction((transaction) => {
      transaction.executeSql(
        `create table if not exists usuario (id integer primary key, nome text not null, cpf text not null, email text not null, senha text not null)`
      );
    });

    // EXECUTOR DE QUERY GENERICO
    // Recebe a query e params e passa para uma nova thread
    // Thread executa transacao contendo o comando SQL
    // Faz error handling e retorna consulta com sucesso
    const ExecuteQuery = (query, params = []) =>
      new Promise((resolve, reject) => {
        dataBase.transaction((transaction) => {
          transaction.executeSql(
            query,
            params,
            (transaction, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });
    return ExecuteQuery;
  },
};

export default Database;
