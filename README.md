# 实现一个吃吃小龙虾也能刷dy的功能

1.启动服务 python3 server/ws-server.py
2.chrome新建书签
3. 网址的部分输入：注意url是可以访问的js文件
	javascript:var script = document.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src','http://localhost/brush/ws.js');document.getElementsByTagName('head')[0].appendChild(script);
4.打开dy的pc版，
5.点击书签建立websocket链接
6.打开摄像头识别 python3 client/mediapipe-ws.py 
7.向上梳食指，和向下梳食指来体验吧



技术原理很简单：
1.通过websocket 提供给推消息的能力
2.通过书签加载js，让dy的网页可以建立websocket客户端
3.用mediapipe的手势识别，做一个推指令的websocket客户端
4.摄像头--->mediapipe客户端--->websocket服务---->加载了websocket客户端js的dy的web--->开刷，边吃小龙虾边刷，开心不