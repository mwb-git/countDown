/*
 * author:mengwenbin
 * time:2017/8/4
 * sideShow 1.0.0
 */
function countDown(obj,callback){
	this.obj={
		endTime:obj.endTime,
		timeBox:obj.timeBox,
		callbackFlag:false,
		callback:callback,
		serTtl:null,
		dayShowBtn:obj.dayShowBtn,
		secandsBtn:obj.secandsBtn
	}
	var that = this;
	this.obj.serTtl=setInterval(function(){
		if(that.obj.secandsBtn){
			that.Sixty();
		}else{
			that.TimeChange();
		}
	},1000)
}
		
countDown.prototype.TimeChange=function(){
	var strTime=this.obj.endTime;
		if(strTime.length<12){
			var aTime = strTime.split(":");
			var oEndDate = new Date();
			oEndDate.setHours(Number(aTime[0]));
			oEndDate.setMinutes(Number(aTime[1]));
			oEndDate.setSeconds(Number(aTime[2]));
		}else{
			var aDate = strTime.slice(0,strTime.indexOf(" ")).split("-");
			var aTime = strTime.slice(strTime.indexOf(" ")).split(":");
			var oEndDate = new Date();
			oEndDate.setFullYear(Number(aDate[0]));
			oEndDate.setMonth(Number(aDate[1])-1);
			oEndDate.setDate(Number(aDate[2]));
			oEndDate.setHours(Number(aTime[0]));
			oEndDate.setMinutes(Number(aTime[1]));
			oEndDate.setSeconds(Number(aTime[2]));
		}

	var oStartDate = new Date();
	iTime = oEndDate.getTime() - oStartDate.getTime();
	var iDate,
		iHours,
		iSeconds, 
		iMinutes;
		if(iTime>0){
		    this.obj.callbackFlag = true;
		    iDate = Math.floor(iTime/(3600*1000*24));
			iHours = Math.floor(iTime/(3600*1000)%24);
			iMinutes = Math.floor(iTime/(60*1000)%60);
			iSeconds = Math.ceil((iTime/1000)%60);
			if(this.obj.dayShowBtn){
				var innerStr = iDate+"天"+" ";
			}else{
				var innerStr = "";
			}
				
			if(iHours<10){
				innerStr = innerStr+"0"+iHours+"：";
			}else{
				innerStr = innerStr+" "+iHours+"：";
			}
			if(iMinutes<10){
				innerStr = innerStr+"0"+iMinutes+"：";
			}else{
				innerStr = innerStr+" "+iMinutes+"：";
			}
			if(iSeconds<10){
				innerStr = innerStr+"0"+iSeconds;
			}else{
				innerStr = innerStr+" "+iSeconds;
			}
			document.getElementById(this.obj.timeBox).innerHTML	= innerStr;
		}else{
		    if(this.obj.callbackFlag){
		     	clearInterval(this.obj.serTtl);
		     	this.obj.callback();
		     }else{
		     	console.error("所传参数有误！");
		     	clearInterval(this.obj.serTtl);
		     	this.obj.callback();
		     	}
		    } 
	}
			
countDown.prototype.Sixty=function(){
	this.obj.endTime--;
	document.getElementById(this.obj.timeBox).innerHTML	= this.obj.endTime;
	if(this.obj.endTime==0){
		clearInterval(this.obj.serTtl);
		this.obj.callback();
	}
	
}
