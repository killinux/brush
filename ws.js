//测试是否加载
function test1(){
	console.log("this is ws.js，you load ws.js success!!");
}
var flag = true;
/*function limitscroll(){
	 if (!flag) return
     flag = false;
      setTimeout( () => {
        flag = true;
      }, 1000)
}*/
//滑动功能
function dy_scroll(received_msg){
	console.log("received_msg:"+received_msg);
	//一定时间内只执行一次
	if (!flag) return
	flag = false;
	
	//点击抖音下滑上滑按钮
	try{
		var dy_element = document.getElementsByClassName("xgplayer-playswitch-next")[0];
		if(dy_element != undefined){
			if(received_msg=='DOWN'){
			  	console.log("will scroll up dy----");
			  	document.getElementsByClassName("xgplayer-playswitch-prev")[0].click();
		    }else if(received_msg=='UP'){
		    	console.log("will scroll down dy----");
			  	document.getElementsByClassName("xgplayer-playswitch-next")[0].click();	
			 }else if(received_msg=='LEFT'){
		    	console.log("will scroll down dy-点赞---");
			  	//点赞按钮,去网页上找吧，这个后续可能会变
			  	document.getElementsByClassName("HNBvVrcV")[0].click();
			}
		}else{
			console.log("this is not dy------>");
		}
		
		//一定时间内只执行一次
		setTimeout( () => {
			flag = true;
		}, 1000)
	}catch(e){
		console.log(e);
	}
}
//创建websocket client
var ws = new WebSocket("ws://localhost:8765"); 
function createWebSocket(){
    if ("WebSocket" in window){
       console.log("您的浏览器支持 WebSocket!");
        
       ws.onopen = function()
       {
          ws.send("发送数据 from h5----->");
          console.log("数据发送中...");
       }; 
       ws.onmessage = function (evt) 
       { 
          var received_msg = evt.data;
          console.log("数据已接收..."+received_msg);
          dy_scroll(received_msg);
          
       };  
       ws.onclose = function()
       { 
          // 关闭 websocket
          console.log("连接已关闭..."); 
       };
    }else{
       // 浏览器不支持 WebSocket
       console.log("您的浏览器不支持 WebSocket!");
    }
 }

createWebSocket();
//发送测试消息
function sendWsMessage(ws_msg){
	ws.send(ws_msg);
}
