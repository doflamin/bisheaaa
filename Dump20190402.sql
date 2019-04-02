-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: mydatabase
-- ------------------------------------------------------
-- Server version	5.7.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_info`
--

DROP TABLE IF EXISTS `add_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_info` (
  `add_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`add_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_info`
--

LOCK TABLES `add_info` WRITE;
/*!40000 ALTER TABLE `add_info` DISABLE KEYS */;
INSERT INTO `add_info` VALUES (1,15,'422'),(5,15,'1'),(6,15,'2'),(7,1,'1'),(8,1,'2');
/*!40000 ALTER TABLE `add_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `find_info`
--

DROP TABLE IF EXISTS `find_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `find_info` (
  `find_id` int(11) NOT NULL AUTO_INCREMENT,
  `bizType` int(11) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `view` int(11) DEFAULT NULL,
  `writer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`find_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `find_info`
--

LOCK TABLES `find_info` WRITE;
/*!40000 ALTER TABLE `find_info` DISABLE KEYS */;
INSERT INTO `find_info` VALUES (1,1,'最近好看的剧太多了，《琅琊榜》《芈月传》《太子妃升职记》最是受人追捧，前俩者正剧布景恢宏，后者鼓风机吹出新境界，愣是让个穷酸剧组坐上新神剧宝座，殊不知，这几部都是在一个地方拍摄哒！想撞星追星，不去这些地方你就白瞎了，明星扎堆的节奏啊！盘点东方好莱坞几大影视城，你都去过吗？','https://p1.meituan.net/gpa/c5f5a4ea35d8a6ab77815efb94fc0722100193.jpg%40720w_348h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20','太子妃吹出好莱坞效果！明星扎堆的影视城','https://m.dianping.com/toplist/detail?listId=2912469&t=1&source=2&utm_source=tpl_detail',121021,1),(2,1,'每款甜品，都承载着一个甜蜜的梦：好吃到没朋友的草莓拿破仑；忍不住都想去偷吃的浓厚乳酪；全手工打造的小清新蛋糕......每种甜品都有属于自己主打而独特的味道，让人念想不已。小编收集了夏天里少女心满满的甜品店，如果你还没有去过，依然敢自称嗷嗷待撩的少女吗？','https://p1.meituan.net/gpa/3a32ae7db4cb5ae69f7920011f12eed657811.jpg%40720w_348h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20','我们都是甜品控，少女心爆棚的夏日甜品','https://m.dianping.com/toplist/detail?listId=2938777&t=1&source=2&utm_source=tpl_detail',52675,2),(3,1,'有一种人才，叫做食堂大厨，有一种传说中的菜系，叫做高校食堂菜。这些菜式搭配奇葩、颜色奇葩、味道更奇葩，主要烹饪方法有瞎特么炒、 乱特么炖，今天，小编特此盘点，这些年，大学食堂的奇葩菜。','https://p0.meituan.net/fifa/19f09afbef6c4a1d56f20727e18a178693641.jpg%40720w_348h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20','真正的黑暗料理！大学食堂里有奇葩菜','https://m.dianping.com/toplist/detail?listId=2884414&t=1&source=2&utm_source=tpl_detail',410633,15);
/*!40000 ALTER TABLE `find_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foods_info`
--

DROP TABLE IF EXISTS `foods_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foods_info` (
  `foods_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `sellCount` varchar(45) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`foods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods_info`
--

LOCK TABLES `foods_info` WRITE;
/*!40000 ALTER TABLE `foods_info` DISABLE KEYS */;
INSERT INTO `foods_info` VALUES (1,'皮蛋瘦肉粥','咸粥','一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足','229','100','10'),(2,'扁豆焖面','','','20','85','8'),(3,'葱花饼','','','80','95','8'),(4,'牛肉馅饼','','','20','10','10'),(5,'招牌猪肉白菜锅贴/10个','','招牌猪肉白菜锅贴/10个','45','76','45'),(6,'南瓜粥','甜粥','','87','67','12'),(7,'红豆薏米美肤粥','','','87','67','12'),(8,'八宝酱菜','','','87','67','12'),(9,'红枣山药糙米粥','','','87','67','12'),(10,'糊塌子','','','87','67','12'),(11,'红枣山药粥套餐','红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注','','67','99','20'),(12,'VC无限橙果汁','','','67','99','20'),(13,'娃娃菜炖豆腐','','','67','99','20'),(14,'手撕包菜','','','67','99','20'),(15,'香酥黄金鱼/3条','','','67','99','20'),(16,'拍黄瓜','','','67','99','20'),(17,'红豆薏米粥套餐','红豆薏米粥,三鲜干蒸烧卖,拍黄瓜','','67','99','20'),(18,'皮蛋瘦肉粥套餐','红豆薏米粥,三鲜干蒸烧卖,拍黄瓜','','67','99','20'),(19,'蜜瓜圣女萝莉杯','','','67','99','20'),(20,'加多宝','','','67','99','20');
/*!40000 ALTER TABLE `foods_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goods_info`
--

DROP TABLE IF EXISTS `goods_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goods_info` (
  `goods_id` varchar(45) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `foods_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods_info`
--

LOCK TABLES `goods_info` WRITE;
/*!40000 ALTER TABLE `goods_info` DISABLE KEYS */;
INSERT INTO `goods_info` VALUES ('1','热销','2,1'),('2','折扣','1'),('3','买赠','2'),('4','精选热菜','1'),('5','爽口凉菜','2'),('6','精选套餐','3'),('7','果拼果汁','4'),('8','小吃主食','1');
/*!40000 ALTER TABLE `goods_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller_info`
--

DROP TABLE IF EXISTS `seller_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seller_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `wm_poi_score` int(11) DEFAULT NULL,
  `month_sale_num` int(11) DEFAULT NULL,
  `avg_delivery_time` int(11) DEFAULT NULL,
  `min_price_tip` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `shipping_fee_tip` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `average_price_tip` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `pic_url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `icon_url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `distance` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `types` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `bulletin` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `infos` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller_info`
--

LOCK TABLES `seller_info` WRITE;
/*!40000 ALTER TABLE `seller_info` DISABLE KEYS */;
INSERT INTO `seller_info` VALUES (1,'如意馄饨(东湖国际店)',5,282,30,'起送 ¥20','配送 ¥4','人均 ¥17','由美团专送提供高品质送餐服务','../../../../static/uploads/829ddf0c82683c1311c29444646818be46396.jpg','../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png','2.0km','1,2','粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。','\"该商家支持发票,请下单写好发票抬头\",\"品类:其他菜系,包子粥店\",','蜂鸟专送',4),(2,'阿普阿朴冒菜铺（汉街店）',5,563,25,'起送 ¥20','配送 ¥4','人均 ¥17','由美团专送提供高品质送餐服务','../../../../static/uploads/4c9e0d4356522fa1e50effd10d4f663f49152.jpg','../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png','2.0km','2,3,8',NULL,NULL,'蜂鸟专送',4),(3,'郑文琪龙虾盖浇饭',3,235,15,'起送 ¥20','配送 ¥4','人均 ¥17','由美团专送提供高品质送餐服务','../../../../static/uploads/db64ed3e8df306ddab29c7bc208941b0182857.jpg','../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png','2.0km','3,4',NULL,NULL,'蜂鸟专送',5),(4,'四美包子（汉街店）',3,102,30,'起送 ¥20','配送 ¥4','人均 ¥17','由美团专送提供高品质送餐服务','../../../../static/uploads/30a0d2bc6de0879ebbc25f88f795656d11650.jpg','../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png','2.0km','4,5',NULL,NULL,'蜂鸟专送',3),(5,'徐良的厨房',4,45,34,'起送 ¥20','配送 ¥4','人均 ¥17','由美团专送提供高品质送餐服务','../../../../static/uploads/45203c7dc878586d1b1379d1f428e4e852938.jpg','../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png','2.0km','5,6',NULL,NULL,'蜂鸟专送',2),(6,'加州鸡扒饭（中南店）',3,35,35,'起送 ¥20','配送 ¥4','人均 ¥17','由美团专送提供高品质送餐服务','../../../../static/uploads/dad6ca05b2c84f784c87e8aa20d4afa630652.jpg','../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png','2.0km','6,7',NULL,NULL,'蜂鸟专送',1);
/*!40000 ALTER TABLE `seller_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supports_info`
--

DROP TABLE IF EXISTS `supports_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supports_info` (
  `type` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supports_info`
--

LOCK TABLES `supports_info` WRITE;
/*!40000 ALTER TABLE `supports_info` DISABLE KEYS */;
INSERT INTO `supports_info` VALUES (0,'在线支付满28减5'),(1,'VC无限橙果汁全场8折'),(2,'单人精彩套餐'),(3,'该商家支持发票,请下单写好发票抬头'),(4,'已加入“外卖保”计划,食品安全保障');
/*!40000 ALTER TABLE `supports_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_info` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `pwd` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'zhangsan','zhangsan','zhangsan@163.com'),(2,'lisi','lisi','lisi@163.com'),(3,'wangwu','wangwu','wangwu@163.com'),(4,'zhaoliu','zhaoliu','zhaoliu@163.com'),(15,'litieming','123','litieming@163.com'),(16,'li','123','li'),(17,'lisi2','lisi','lisi');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydatabase'
--

--
-- Dumping routines for database 'mydatabase'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-02 18:01:33
