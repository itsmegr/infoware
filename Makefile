start-mysql:
	docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=store  -d --name mysqldb -v store-vol:/var/lib/mysql mysql:latest

.PHONY: start-mysql