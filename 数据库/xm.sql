SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;
/* 用户列表 */
CREATE TABLE xm_user(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16) NOT NULL UNIQUE,
	gender BOOLEAN
);
/* 地址 */
CREATE TABLE xm_receiver_address(
	address_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	receiving_address VARCHAR(128),
	province VARCHAR(16),
	city VARCHAR(16),
	county VARCHAR(16),
	postcode CHAR(6),
	phone VARCHAR(16),
	consignee VARCHAR(16),
	tag VARCHAR(16),
	is_default TINYINT,
	FOREIGN KEY(user_id) REFERENCES xm_user(user_id)
);
/* 商品类型 */
CREATE TABLE xm_type(
	type_id INT PRIMARY KEY AUTO_INCREMENT,
	type_name VARCHAR(32)
);
/* 商品笔记本表 */
CREATE TABLE xm_laptop(
	product_id INT PRIMARY KEY AUTO_INCREMENT,
	type_id INT,
	title VARCHAR(128) UNIQUE NOT NULL,
	subtitle VARCHAR(128),
	price DECIMAL(10,2) DEFAULT 0,
	spec VARCHAR(32),
	pname VARCHAR(32),
	details VARCHAR(1024),
	sold INT,
	stock INT,
	is_onsale BOOLEAN,
	shelf_time BIGINT,
	FOREIGN KEY(type_id) REFERENCES xm_type(type_id)
);
/* 订单表 */
CREATE TABLE xm_order_form(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	address_id INT,
	order_time BIGINT,
	pay_time BIGINT,
	deliver_time BIGINT,
	recetived_time BIGINT,
	status INT,
	message VARCHAR(1024),
	FOREIGN KEY(user_id) REFERENCES xm_user(user_id),
	FOREIGN KEY(address_id) REFERENCES xm_receiver_address(address_id)
);
/* 用户订单详情表 */
CREATE TABLE xm_order_detail(
	detail_id INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,
	product_id INT,
	counts INT,
	FOREIGN KEY(order_id) REFERENCES xm_order_form(order_id),
	FOREIGN KEY(product_id) REFERENCES xm_laptop(product_id)
);
/* 购物车 */
CREATE TABLE xm_shopping(
	shopping_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES xm_user(user_id)
);
/* 商品详情图标 */
CREATE TABLE xm_laptop_pic(
	pic_id INT PRIMARY KEY AUTO_INCREMENT,
	product_id INT,
	sm VARCHAR(128),
	mi VARCHAR(128),
	lg VARCHAR(128),
	FOREIGN KEY(product_id) REFERENCES xm_laptop(product_id)
);
/* 轮播图保存 */
CREATE TABLE xm_rotation_chart(
	chart_id INT PRIMARY KEY AUTO_INCREMENT,
	sm VARCHAR(128),
	mi VARCHAR(128),
	lg VARCHAR(128),
	img VARCHAR(128),
	href VARCHAR(128)
);
/* 首页商品栏目表 */
CREATE TABLE xm_index_product(
	product_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(1024),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	seq TINYINT
);