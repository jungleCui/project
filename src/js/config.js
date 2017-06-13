require.config({
   	// baseUrl : "js",//

   	// 配置别名
   	// 使用短文件名
    paths : {
    	// 这里的路径也是基于baseURl
		  "jquery": "../lib/jquery-3.2.1",
      "gdszoom":"../lib/jquery-gdszoom/jquery.gdszoom",
      "common":"../lib/common"
		
    },

    shim:{
    'gdszoom':['jquery']
  }
});