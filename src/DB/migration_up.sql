-- contains code for migrating the db
-- for this small application i did manually, this process can alsoo be automated

CREATE TABLE `owners` (
  `owner_id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
);

CREATE TABLE `customers` (
  `customer_id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `login_password` varchar(255) NOT NULL
);

CREATE TABLE `products` (
  `product_id` int PRIMARY KEY AUTO_INCREMENT,
  `owner_id` int NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL,
  `created_at` datetime DEFAULT (UTC_TIMESTAMP)
);

CREATE TABLE `orders` (
  `order_id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `ordered_quantity` int NOT NULL,
  `paid_subtotal` int NOT NULL,
  `ordered_at` datetime DEFAULT (UTC_TIMESTAMP),
  `shipping_address` varchar(255) NOT NULL
);

ALTER TABLE `products` ADD FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

CREATE INDEX `customers_index_0` ON `customers` (`email`);

CREATE INDEX `orders_index_1` ON `orders` (`customer_id`);
