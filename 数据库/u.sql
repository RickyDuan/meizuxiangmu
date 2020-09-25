#设置客户端链接服务器编码
SET NAMES UTF8;
#如果存在，丢掉数据库
DROP DATABASE IF EXISTS meizu;
#创建数据库，设置存储的编码
CREATE DATABASE meizu CHARSET=UTF8;
#进入数据库
USE meizu;
#创建保存用户信息的表
CREATE TABLE meizu_user(
	yid INT PRIMARY KEY AUTO_INCREMENT,
	yuser VARCHAR(12),
	ypwd VARCHAR(16),
	email VARCHAR(32),
	phone VARCHAR(16),
	gender INT#性别
);
#收货地址
CREATE TABLE meizu_address(
    fid INT PRIMARY KEY AUTO_INCREMENT,
	yid INT,
	province VARCHAR(8),#省
	city VARCHAR(28),#市
	county VARCHAR(28),#县
	town VARCHAR(45),#镇
	family VARCHAR(128),#详细地址
	numbering VARCHAR(128),#订单编号
	consignee VARCHAR(28),#收货人
	remarks VARCHAR(128),#备注
	adefault VARCHAR(128),#默认地址
	FOREIGN KEY(yid) REFERENCES meizu_user(yid)
);
#轮播图片
CREATE TABLE meizu_picture(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	sm VARCHAR(128),
	mi VARCHAR(128),
	lg VARCHAR(128),
	img VARCHAR(128),
	href VARCHAR(128)
);
#商品类型
CREATE TABLE meizu_cleixi(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	
	cype VARCHAR(32)#类型
	);
#商品详情
CREATE TABLE meizu_etails(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	lid INT,
	#小标题
	stitle VARCHAR(128),
	ltitle VARCHAR(128),#大标题
	#具体商品名
	suser VARCHAR(128),
	#价格
	price DECIMAL(10,2),
	tions VARCHAR(128),#手机型号名
	ntype VARCHAR(18),#网络类型
	mpcolor VARCHAR(32),#手机颜色
	memory VARCHAR(32),#内存
	choose VARCHAR(32),#套餐
	stime BIGINT,#上架时间
	kucun INT,#库存
	sales INT,#销售数量
	salesl BOOLEAN,#是否在售
	FOREIGN KEY(lid) REFERENCES meizu_cleixi(lid)
);

/* 订单表 */
CREATE TABLE meizu_order(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	yid INT,
	fid INT,
	order_time BIGINT,
	pay_time BIGINT,
	deliver_time BIGINT,
	recetived_time BIGINT,
	status INT,
	message VARCHAR(1024),
	FOREIGN KEY(yid) REFERENCES meizu_user(yid),
	FOREIGN KEY(fid) REFERENCES meizu_address(fid)
);
/* 用户订单详情表 */
CREATE TABLE meizu_detail(
	detail_id INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,
	sid INT,
	counts INT,
	FOREIGN KEY(order_id) REFERENCES meizu_order(order_id),
	FOREIGN KEY(sid) REFERENCES meizu_etails(sid)
);
/* 购物车 */
CREATE TABLE meizu_shopping(
	shopping_id INT PRIMARY KEY AUTO_INCREMENT,
	yid INT,
	FOREIGN KEY(yid) REFERENCES meizu_user(yid)
);
/* 商品详情图标 */
CREATE TABLE meizu_laptop_pic(
	pic_id INT PRIMARY KEY AUTO_INCREMENT,
	sid INT,
	sm VARCHAR(128),
	mi VARCHAR(128),
	lg VARCHAR(128),
	FOREIGN KEY(sid) REFERENCES meizu_etails(sid)
);
/* 首页商品栏目表 */
CREATE TABLE meizu_index_product(
	product_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(1024),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	seq TINYINT
);