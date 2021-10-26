const addOrderQuery = `
INSERT INTO orders 
(
    product_id, customer_id, ordered_quantity, paid_subtotal, shipping_address
)
VALUES(?,?,?,?,?);
`;

const getOrdersByOwnerIdQuery = `
SELECT
	order_id,
	customer_id,
	product_id,
	product_name,
	price AS product_price,
	ordered_quantity,
	paid_subtotal,
	ordered_at,
	shipping_address
FROM
	orders
	NATURAL JOIN products
WHERE
	owner_id = ?;
`;

const getOrdersByCustomerIdQuery = `
SELECT
	order_id,
	product_id,
	product_name,
	price AS product_price,
	ordered_quantity,
	paid_subtotal,
	ordered_at,
	shipping_address
FROM
	orders
	NATURAL JOIN products
WHERE
	customer_id = ?;
`;

export { addOrderQuery, getOrdersByCustomerIdQuery, getOrdersByOwnerIdQuery };
