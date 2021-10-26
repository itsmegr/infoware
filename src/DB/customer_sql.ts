const addCostumerQuery = `
INSERT INTO customers (full_name, email, login_password)
		VALUES(?, ?, ?);
`;

const getCustomerByIdQuery = `
SELECT
	*
FROM
	customers
WHERE
	customer_id = ?;
`;

const getCustomerByEmailQuery = `
SELECT
	*
FROM
	customers
WHERE
	email = ?;
`;
export { addCostumerQuery,getCustomerByIdQuery, getCustomerByEmailQuery };
