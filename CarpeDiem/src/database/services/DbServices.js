import * as SQLite from "expo-sqlite";

const Database = {
  // Inicia conexao com a  base
  getConnection: () => {
    // Instancia um .bd caso não estabeleca conexao
    // const dataBase = SQLite.openDatabase("carpe_diem.db");
    const dataBase = SQLite.openDatabase("carpe_diem2.db");

    // Cria a table Usuario e Fale Conosco
    dataBase.transaction((transaction) => {
      transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS Usuario " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "nome VARCHAR(70) NOT NULL, " +
        "cpf VARCHAR(11) NOT NULL, " +
        "email VARCHAR(30) NOT NULL, " +
        "senha VARCHAR(20) NOT NULL)",
        [],

        (sqlTransaction, sqlResultSet) => {
          console.log(
            "\nBase carregada/criada com sucesso!" +
            "\nQuantidade de linhas afetadas: " + sqlResultSet.rowsAffected
          );
        },
        (error) => {
          console.log("Erro ao criar tabela" + error.message);
        }
      );

      transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS FaleConosco " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "nome VARCHAR(70) NOT NULL, " +
        "email VARCHAR(11) NOT NULL, " +
        "mensagem VARCHAR(255) NOT NULL)",
        [],

        (sqlTransaction, sqlResultSet) => {
          console.log(
            "\nBase carregada/criada com sucesso!" +
            "\nQuantidade de linhas afetadas: " + sqlResultSet.rowsAffected
          );
        },
        (error) => {
          console.log("Erro ao criar tabela" + error.message);
        }
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
