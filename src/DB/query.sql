-- contains all queries used in the applicationz

-- addOwner 
INSERT INTO owners (full_name, email) VALUES("govcind", "kjsdc");

-- addProduct
INSERT INTO products (owner_id, product_name , description, price, quantity)
		VALUES(1, "govind", "kuch bhi", 3, 4);

-- getAllProducts
SELECT
	*
FROM
	products;

-- addCostumer
INSERT INTO customers (full_name, email, login_password)
		VALUES("govcind", "kjsdc", "hbcjbds");
-- getCustomer
SELECT
	*
FROM
	customers
WHERE
	customer_id = 2;

-- addOrder
INSERT INTO orders (product_id, customer_id, ordered_quantity, paid_subtotal, ordered_at, shipping_address)
		VALUES(2, 1, 2, 123, UTC_TIMESTAMP, "sdckjsbdc");

-- getOrdersByOwnerId
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
	owner_id = 1;

-- getOrdersByCustomerId
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
	customer_id = 1;