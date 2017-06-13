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
	$id = isset($_GET['id'])?$_GET['id']:'';
	$color = isset($_GET['color'])?$_GET['color']:'';
	$size = isset($_GET['size'])?$_GET['size']:'';
	$qty = isset($_GET['qty'])?$_GET['qty']:'';

	$conn->set_charset('utf8');


	//查找数据库中的数据
	$sqlid = "select * from mycar where id='$id'";
	$sqlcolor = "select * from mycar where color='$color'";
	$sqlsize = "select * from mycar where size='$size'";
	$sqlqty = "select * from mycar where qty='$qty'";
	// $sql = "select id=".$id." from underclothes";

	//查找到数据库的结果
	$resid = $conn->query($sqlid);
	$rescolor = $conn->query($sqlcolor);
	$ressize = $conn->query($sqlsize);
	$resqty = $conn->query($sqlqty);

	//判断数据库中是否有
	if($resid->num_rows>0&&$rescolor->num_rows>0&&$ressize->num_rows>0){
		"updata qty set name='$name',age=$age where id=$id"
	}

	// $row = $res->fetch_all(MYSQLI_ASSOC);
	// echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>