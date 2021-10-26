const addOwnerQuery = `INSERT INTO owners (full_name, email) VALUES(?, ?);`;

const getOwnerAccountByEmailQuery = `SELECT * FROM owners WHERE email=?;`

export { addOwnerQuery, getOwnerAccountByEmailQuery };