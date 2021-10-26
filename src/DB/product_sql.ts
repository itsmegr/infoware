const addProductQuery = `
INSERT 
INTO products (
    owner_id, 
    product_name, 
    description, 
    price, 
    quantity
)
VALUES(?, ?, ?, ?, ?);`

const getAllProductsQuery = `
SELECT
	*
FROM
	products;
`;

const getProductByIdQuery = `
SELECT * 
FROM products
WHERE product_id = ?;
`;

export { addProductQuery, getAllProductsQuery, getProductByIdQuery };