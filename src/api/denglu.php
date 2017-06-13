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

	$username = isset($_GET['username'])?$_GET['username']:'';

	$psw = isset($_GET['psw'])?$_GET['psw']:'';

	// md5加密
	// $password = md5($password);

	//在数据库查找判断
	$sqlusername = "select username from login where username='$username'";
	$sqlpsw = "select psw from login where psw='$psw'";

	//查询结果
	$resusername = $conn->query($sqlusername);
	$respsw = $conn->query($sqlpsw);

	if($resusername->num_rows>0&&$respsw->num_rows>0){
		echo '1';
	}else{
		echo '0';
	}

	//查询结果

	// if($res->num_rows>0){
		
	// 	echo 'no';
	// }else{
	// 	$sql = "insert into login(username,psw) values('$username','$psw')";
	
	// // 获取查询结果
	// 	$res = $conn->query($sql);

	// 	if($res){
	// 		echo "$res";
	// 	}else{
	// 		echo "Error: " . $sql . "<br>" . $conn->error;
	// 	}

	// }

	$conn->close();
?>