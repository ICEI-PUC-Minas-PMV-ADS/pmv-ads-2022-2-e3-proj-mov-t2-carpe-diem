import Database from './Dbservices'

const DB_EXEC = Database.getConnection();

export const getUsuarios = async () => {
    let results = await DB_EXEC(`select * from usuarios`);
    //console.log(results);
    return results.rows._array;
  }
  
  export const insertUsuario = async (param) => {
    let results = await DB_EXEC(`insert into usuarios(nome completo, cpf, email, senha, confirme sua senha)
    values(?,?,?,?,?)`, [param.nome-completo, param.cpf,param.email,param.senha,param.confirme-sua-senha]);
    //console.log(results);
    return results.rowsAffected;
  }
  
  export const updateUsuario = async (param) => {
    let results = await DB_EXEC(`update gastos set email=?, senha=?, confirme sua senha=?
    where id=?`, [param.email,param.senha,param.confirme-sua-senha, param.id]);
    //console.log(results);
    return results.rowsAffected;
  }
  
  export const deleteUsuario = async (id) => {
    let results = await DB_EXEC(`delete from gastos where id=?`, [id]);
    //console.log(results);
    return results.rowsAffected;
  }