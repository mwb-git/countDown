# countDown
	<body>
		<p id="htm"></p>
	</body>
	
  <script>
  new countDown({
	
			endTime:"10",
	
			timeBox:"htm",
	
			dayShowBtn:false,
	
			secandsBtn:true
		},function(){
		
			alert("下班了！！！！！");
		});
    </script>
    
   创建比较简单，只要传入几个参数就可以了！
   
   endTime参数可以传入三种形式：
   
   第一种：“2017-8-20 18:00:00”，传入这种形式的参数表示倒计时到多少天后结束！
   
   第二种：“18:00:00”，传入这种形式的参数表示倒计时是在每天的18点钟结束！
   
   （注意：以上两种情况secandsBtn必须为true）
   
   第三种：“60”，传入这种形式的参数表示倒计时为60s！（注意：此种情况secandsBtn必须为true）
   
   timebox参数：
   
   表示展示倒计时的元素。
   
   注意：只接受id值
   
   dayShowBtn参数：
   是否展示天数，true为显示，false为不显示
   
   secandsBtn参数：
   秒数倒计时开关，true表示当前倒计时是秒数倒计时，false表示当前为时间倒计时！
   
   回调函数：
   表示倒计时结束时应该干什么！
