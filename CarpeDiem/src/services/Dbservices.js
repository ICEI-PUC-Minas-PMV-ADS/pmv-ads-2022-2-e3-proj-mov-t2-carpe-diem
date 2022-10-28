import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: () => {

    const db = SQLite.openDatabase('carpediem.db');


    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists usuarios (id integer primary key not null, nome completo text not null, cpf int not null, email text not null, senha int not null, confirme sua senha int not null);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
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