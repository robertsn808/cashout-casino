window.mobilecheck=function(){var check=false;(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent||navigator.vendor||window.opera);return check||navigator.userAgent.match(/iPad/i)!=null||navigator.userAgent.match(/android/i)!= null;}
let login=window.mobilecheck()?'/m/#/login':'/#/game';
let game=window.mobilecheck()?'/m/#/game':'/#/game';

console.log=function(){}
var msg=[
  ['网络异常，本次操作不扣分，请重新登录',[1]], // 0返回大厅 红
  ['您的账号已在另一设备登录，请重新登录',[5]], // 0返回大厅 2返回登录
  ['服务器繁忙，本次操作不扣分，请重试',[0,2]], // 0返回大厅
  ['由于您不处于活动状态，此游戏将在30秒之后自动关闭，点击OK继续游戏',[3]], // 3返回关闭遮挡 超时返回平台
  ['您本次登录已过期，请重新登录',[5]], // 2返回登录
  ['服务器出错，本次操作已记录，请致电客服解决问题',[0]],// 0返回大厅
  ['您的游戏余额不足',[4]], // 4返回游戏
  ['参数错误，本次操作不扣分，请刷新后继续游戏',[4]], // 4返回游戏
  ['非法操作，连接已断开',[4]], // 4返回游戏
  ['服务器已断开，请重新连接',[0,2]] // 4返回游戏
];

function horizontalScreen(className){
  var conW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  conH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  if(conW>conH){$(className).css({"width":conW+"px","height":conH+"px","transform":"","transform-origin":"","-webkit-transform-origin":""})}else{$(className).css({"transform":"rotate(90deg) translate("+((conH-conW)/2)+"px,"+((conH-conW)/2)+"px)","width":conH+"px","height":conW+"px","transform-origin":"center center","-webkit-transform-origin":"center center"})}
}
var style = document.createElement('style');
style.innerHTML = `
.ibtn{cursor:pointer;margin:10px;}
.btn{margin:0 10px 0 10px;background-color:Transparent;border-style:none;outline:none;height:42px;width:142px;background-repeat: no-repeat;color:#fff;font-size:16px;}
.btn0{position:absolute;bottom:20px;left:0;right:0;margin:auto;}
.btn1{background-image:url('${window["CDNADDRESS"]}/images/recon01.png')}
.btn1a{background-image:url('${window["CDNADDRESS"]}/images/recon01a.png')}
.btn2{background-image:url('${window["CDNADDRESS"]}/images/recon02.png')}
.btn2a{background-image:url('${window["CDNADDRESS"]}/images/recon02a.png')}
.wrap{display:table;_position:relative;overflow:hidden;height:140px;}
.subwrap{vertical-align:middle;display:table-cell;_position:absolute;_top:50%;}
.content{_position:relative;_top:-50%;width:360px;}
`;
document.head.appendChild(style);

let time=0;
window.skdm = {
  Home:function() {//返回Web平台或返回App游戏大厅
    history.go(-1)
  },
  Back:function() {
  	this.Msg(3)
    //alert('在游戏内长时间没有操作');
  },
  Recharge:function() {
  	this.Msg(6)
    //alert('提示余额不足');
  },
  PayFame:function() {
    alert('充值界面');
  },
  Volume:function() {
    alert('音量控制');
  },
  Login:function() {
    this.Msg(1);
  },
  Logout:function() {
  	$.post('/api/Game/Logout',{'token':$.cookie('User-Token'),'type':1},function(result){
    	top.location.href=login;
	  });
  },
  Loading:function(i) {//资源加载等待 i: 1至100
    //alert(i)
    $("#percent").css({width:350*i/100})
    if(100==i){
      setTimeout(function(){$("#loader").remove()},1000)
    }
  },
  Reconnection:function(callback) {
    $("body").append('<div class="turn" style="z-index:9997; position: absolute; width:100%; height:100%; background:#000;opacity:0.4;"></div>');
    $("body").append('<div class="turn" style="z-index:9998; position: absolute; width:100%; height:100%; ">'+
    '<div id="recon" style="position:absolute;left:50%;top:50%;width:400px;height:250px;text-align:center;margin-left:-200px;margin-top:-125px;color:#fff;border-style:solid;border-color:red;border-radius:15px;background:#09161f">'+
    '<p style="color:#fbf85f; font-size:26px">提示</p>'+
    '<p style="font-size:24px; margin:40px">网络连接断开，请重接游戏</p>'+
    '<button class="btn btn1">取消</button><button class="btn btn2">重连</button>'+
    '</div>'+
    '</div>');
    $("#recon button").eq(0).mouseover(function(){$(this).addClass("btn1a").removeClass("btn1")}).mouseout(function(){$(this).addClass("btn1").removeClass("btn1a")}).click(function(){history.go(-1)});
    $("#recon button").eq(1).mouseover(function(){$(this).addClass("btn2a").removeClass("btn2")}).mouseout(function(){$(this).addClass("btn2").removeClass("btn2a")}).click(function(){$(".turn").remove();callback(true)});
    horizontalScreen(".turn");
  },
  Msg:function(code,callback) {//通知平台弹窗显示信息
  	//alert(code)
  	if ( code >= 10 ) {
	    switch (code) {
	      case 10://重新连接
	      	top.location.href=top.location.href
	        break;
	      case 11://返回大厅
	      	top.location.href=game
	        break;
	      case 12://返回登录页面
			  	$.post('/api/Game/Logout',{'token':$.cookie('User-Token'),'type':1},function(result){
			    	top.location.href=login;
				  });
	        break;
	      case 13://返回选桌页面
	        break;
	    }
	  	return
  	}
    if(time>0)return
    time=1
    var bnt='';
    for(var t in msg[code][1]) {
      switch (msg[code][1][t]) {
        case 0:
          bnt+='<button class="btn btn2">返回</button>';
          break;
        case 1:
          bnt+='<button class="btn btn2">返回</button>';
          break;
        case 2:
          bnt+='<button class="btn btn1">重连</button>';
          break;
        case 3:
          bnt+='<button class="btn btn0 btn1">OK</button>';
          break;
        case 4:
          bnt+='<button class="btn btn1">返回</button>';
          break;
        case 5:
          bnt+='<button class="btn btn2">返回</button>';
          break;
      }
    }
    
    $("body").append('<div class="turn" style="z-index:9997;position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.2"></div>');
    $("body").append('<div class="turn" style="z-index:9998;position:absolute;top:0;left:0;width:100%;height:100%">'+
    '<div id="recon" style="position:absolute;left:50%;top:50%;width:400px;height:200px;text-align:center;margin-left:-200px;margin-top:-100px;color:#fff;border-style:solid;border-color:red;border-radius:15px;background:#09161f">'+
    '<div class="wrap">'+
    '<div class="subwrap">'+
    '<div class="content" style="font-size:20px;margin:20px;line-height:180%;text-align:center;">'+msg[code][0]+'</div>'+
    '</div>'+
    '</div>'+
    '<div style="position:absolute;bottom:20px;width:100%;text-align:center;">'+bnt+'</div>'+
    '</div>'+
    '</div>');
    for(var t in msg[code][1]) {
      switch (msg[code][1][t]) {
        case 0:
          $("#recon button").eq(0).mouseover(function(){$(this).addClass("btn2a").removeClass("btn2")}).mouseout(function(){$(this).addClass("btn2").removeClass("btn2a")}).click(function(){top.location.href=game});
          break;
        case 1:
          $("#recon button").eq(0).mouseover(function(){$(this).addClass("btn1a").removeClass("btn1")}).mouseout(function(){$(this).addClass("btn1").removeClass("btn1a")}).click(function(){top.location.href=game});
          break;
        case 2:
          $("#recon button").eq(1).mouseover(function(){$(this).addClass("btn1a").removeClass("btn1")}).mouseout(function(){$(this).addClass("btn1").removeClass("btn1a")}).click(function(){$(".turn").remove();top.location.href=top.location.href});//callback(true)
          break;
        case 3:
          time=30
          let set = setInterval(function() {
            time--;
            $("#recon button").eq(0).html('OK ('+time+')');
            if(time === 0) {
              clearInterval(set);
              history.go(-1)
            }
          }, 1000);
          $("#recon button").eq(0).mouseover(function(){$(this).addClass("btn1a").removeClass("btn1")}).mouseout(function(){$(this).addClass("btn1").removeClass("btn1a")}).click(function(){clearInterval(set);time=0;$(".turn").remove();});
          break;
        case 4:
          $("#recon button").eq(0).mouseover(function(){$(this).addClass("btn1a").removeClass("btn1")}).mouseout(function(){$(this).addClass("btn1").removeClass("btn1a")}).click(function(){$(".turn").remove();});
          break;
        case 5:
          $("#recon button").eq(0).mouseover(function(){$(this).addClass("btn2a").removeClass("btn2")}).mouseout(function(){$(this).addClass("btn2").removeClass("btn2a")}).click(function(){
$.post('/api/Game/Logout',{'token':$.cookie('User-Token')});
top.location.href=login});
          break;
      }
    }
    horizontalScreen(".turn");
  }
};

$("body").append(`<div id="loader" class="turn" style="z-index:9999; position: absolute; top:0;left:0;width:100%; height:100%; background:#141833">
  <div style="position:absolute;right:10px;top:10px;width:100px;height:41px;"><img src="${window["CDNADDRESS"]}/images/r.png" class=ibtn onclick="location.reload();"><img src="${window["CDNADDRESS"]}/images/b.png" class=ibtn onclick="history.go(-1);"></div>
  <div style="position:absolute;left:50%;top:50%;width:350px;height:154px;text-align:center;margin-left:-175px;margin-top:-150px;">
  <img src="/logo.png" style="padding:20px 0 20px 0;">
  <div style="background:url(${window["CDNADDRESS"]}/images/loadbg.png);width:350px;height:12px;">
  <div id="percent" style="background:url(${window["CDNADDRESS"]}/images/loadbar.png);width:0px;height:12px;"></div>
  </div>
  </div>`);

horizontalScreen(".turn");
$(window).resize(function() {
	horizontalScreen(".turn");
});
