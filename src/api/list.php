<?php
//配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'jj';
//链接数据库
	$conn = new mysqli($servername,$username,$password,$database);

//链接检测
	if($conn->connect_errno){
		die('连接失败'.$conn->connect_error);
	}
//查询数据库
	$conn->set_charset('utf8');

	$a = isset($_GET['a'])?$_GET['a']:'';

	// echo $a;

	if ($a) {
		$sql = "select * from underclothes";
	};

		$res = $conn->query($sql);

		$row = $res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>