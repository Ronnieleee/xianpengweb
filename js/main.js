//首页全局变量
var clt_b = 0;
var clt_d = 0;
var bncount;
var banbool = true;
var pagebool = true;
//案例全局变量
var clt_ab = 0;
var clt_al = 0;
var abbool = true;
var albool = true;
var alcount;
//适配全局变量
var scrw;
var scrh;
var Dvalue;
var scaleW;
var scaleH;


$(function(){
	Allfit();
	window.onresize = function(){
		Allfit();
	}
	init();
	changeanlipg();
	//按时间切换
	var timeqh = setInterval(function() {
		if(banbool == true){
			banbool = false;
			clt_b++;
			init();
		}	
	},3000)
	//鼠标切换
	$(".idx-sver-lst li").mouseover(function(){
		if(banbool == true){
			clt_b = $(this).index();
			banbool = false;
			clearInterval(timeqh);
			init();
		}
	})
	$(".idx-sver-lst li").mouseout(function(){
		clearInterval(timeqh);
		timeqh = setInterval(function() {
			if(banbool == true){
				clt_b++;
				banbool = false;
				init();
			}
		},3000)
	})
	//左点击切换
	$("#left").click(function(){
		if(banbool == true){
			clt_b--;
			banbool = false;
			init();
		}
	})
	//右点击切换
	$("#right").click(function(){
		if(banbool == true){
			clt_b++;
			banbool = false;
			init();
		}
	})
	//页面下切换
	$(".btn-down-b").click(function(){
		var id = $(this).attr("id");
		console.log(id,"this");
		if(pagebool == true){
			if(id == "btn-down-b"){
				if(clt_d < 5){
					clt_d++;
					pagebool = false
					pagechange();
				}
			}else{
				if(clt_d < 4){
					clt_d++;
					pagebool = false
					pagechange();
				}
			}
		}
	})
	//滚轮切换
	$("body").mousewheel(function(event, delta, deltaX, deltaY){
		console.log(this);
		if(pagebool == true){
			if(delta == -1){
				if(clt_d < 4){
					clt_d++;
					pagebool = false;
					pagechange();
				}
			}else if(delta == 1){
				if(clt_d > 0){
					clt_d--;
					pagebool = false;
					pagechange();
				}
			}
		}
	})
	//地图禁用
	$(".contact_map").mouseover(function(){
		$("body").unbind("mousewheel");
	})
	//地图禁用
	$(".contact_map").mouseout(function(){
		$("body").bind("mousewheel",function(event, delta, deltaX, deltaY){
			console.log(this);
			if(pagebool == true){
				if(delta == -1){
					if(clt_d < 4){
						clt_d++;
						pagebool = false;
						pagechange();
					}
				}else if(delta == 1){
					if(clt_d > 0){
						clt_d--;
						pagebool = false;
						pagechange();
					}
				}
			}
		});
	})
	//页面上切换
	$(".btn-down-u").click(function(){
		if(pagebool == true){
			if(clt_d > 0){
				clt_d--;
				pagebool = false;
				pagechange();
			}
		}
	})
	//新闻详情
	$(".page_news_elm").click(function(){
		var idx = $(this).index();
		console.log(idx);
		getnewsdetail(idx);
	})
	//点击返回
	$(".btn-back").click(function(){
		backnewslist();
	})
	//案例换图右点击
	$(".arrow_right").click(function(){
		var aparent = $(this).parent();
		var bparent = aparent.parent();
		var cparent = bparent.parent();
		var dparent = cparent.parent();
		var achild = dparent.children(".page_anli_bodylist_show");
		var bchild = achild.children(".page_anli_wrap");
		var cchild = bchild.children(".page_anli_slide");
		var dchild = cchild.children("ul");
		console.log(dchild);
		if(abbool == true){
			if(clt_ab == 4){
				clt_ab = 0;
			}else if(clt_ab < 4){
				clt_ab++;
			}
			abbool = false;
			changeanlibg(dchild);
		}
	})
	//案例换图左点击
	$(".arrow_left").click(function(){
		var aparent = $(this).parent();
		var bparent = aparent.parent();
		var cparent = bparent.parent();
		var dparent = cparent.parent();
		var achild = dparent.children(".page_anli_bodylist_show");
		var bchild = achild.children(".page_anli_wrap");
		var cchild = bchild.children(".page_anli_slide");
		var dchild = cchild.children("ul");
		console.log(dchild);
		if(abbool == true){
			if(clt_ab == 0){
				clt_ab = 4;
			}else if(clt_ab > 0){
				clt_ab--;
			}
			abbool = false;
			changeanlibg(dchild);
		}
	})
	var timeanli = setInterval(function() {
		var cchild = $(".page_anli_slide");
		var dchild = cchild.children("ul");
		if(abbool == true){
			if(clt_ab == 4){
				clt_ab = 0;
			}else if(clt_ab < 4){
				clt_ab++;
			}
			abbool = false;
			changeanlibg(dchild);
		}
	},1000)
	$(".page_anli_wrap").mouseover(function(){
		clearInterval(timeanli);
	})
	$(".page_anli_wrap").mouseout(function(){
		clearInterval(timeanli);
		timeanli = setInterval(function() {
			var cchild = $(".page_anli_slide");
			var dchild = cchild.children("ul");
			console.log(dchild);
			if(abbool == true){
				if(clt_ab == 4){
					clt_ab = 0;
				}else if(clt_ab < 4){
					clt_ab++;
				}
				abbool = false;
				changeanlibg(dchild,1);
			}
		},2000)
	})
	//案例切换左点击
	$(".page_anli_btnleft").click(function(){
		var cchild = $(".page_anli_slide");
		var dchild = cchild.children("ul");
		if(albool == true){
			clt_al--;
			clt_ab = 0;
			albool = false;
			abbool = false;
			changeanlibg(dchild);
			changeanlipg();
		}
	})
	//案例切换右点击
	$(".page_anli_btnright").click(function(){
		var cchild = $(".page_anli_slide");
		var dchild = cchild.children("ul");
		if(albool == true){
			clt_al++;
			clt_ab = 0;
			albool = false;
			abbool = false;
			changeanlibg(dchild);
			changeanlipg();
		}
	})
})
//切换banner公共函数
function init(){
	if(clt_b == bncount){
		clt_b = 0;
	}else if(clt_b < 0){
		clt_b = bncount - 1;
	}
	$(".body-bg").animate({
		'left':-scrw*clt_b +'px'
	},function(){
		banbool = true;
	})
	$(".idx-sver-lst li img").css("background-image","url(img/qh_01.png)");
	$(".idx-sver-lst li:eq("+clt_b+") img").css("background-image","url(img/qh_02.png)");
}
//切换页面函数
function pagechange(){
	//console.log(clt_d)
	if(clt_d == 4){
		var imgh = $(".foot_img").height();
		$(".elm-win").animate({
			'top':-scrh*3-imgh + 'px'
		},function(){
			console.log("banner")
			pagebool = true;
		})
		$("#btn-down-b").css("background-image","url(img/btn_down_03.png)");
		
	}else if(clt_d == 5){
		
		$(".elm-win").animate({
			'top':0 + 'px'
		},function(){
			console.log("banner")
			pagebool = true;
		})
		$("#btn-down-b").css("background-image","url(img/btn_down_02.png)");
		clt_d = 0;
	}
	else{
		$(".elm-win").animate({
			'top':-scrh*clt_d + 'px'
		},function(){
			console.log("banner")
			pagebool = true;
		})
		$("#btn-down-b").css("background-image","url(img/btn_down_02.png)");
	}
	
}
//点击新闻显示详情
function getnewsdetail(idx){
	$(".news_list").css("display","none");
	$("html,body").animate({scrollTop:0});
	$(".news_detail").css("display","block");
	$(".page_news_detail:eq("+idx+")").css("display","block");
}
//返回新闻列表
function backnewslist(){
	$(".news_list").css("display","block");
	$(".news_detail").css("display","none");
	$(".page_news_detail").css("display","none");
}
//切换示例图片函数
function changeanlibg(elm){
	var page_anli_slide_0 = {left: 150,zindex:1000,top: 0,opacity: 1,width:500,height:300} ;
	var page_anli_slide_1 = {left: 300,zindex:999,top: 30,opacity: 0.6,width:400,height:240} ;
	var page_anli_slide_2 = {left: 450,zindex:997,top: 60,opacity: 0.3,width:300,height:180} ;
	var page_anli_slide_3 = {left: 50,zindex:996,top: 60,opacity: 0.3,width:300,height:180} ;
	var page_anli_slide_4 = {left: 100,zindex:998,top: 30,opacity: 0.6,width:400,height:240} ;
	var slide = new Array();
	slide.push(page_anli_slide_0,page_anli_slide_1,page_anli_slide_2,page_anli_slide_3,page_anli_slide_4);
	var idx = elm.children().length;

	for( var i = 0; i < idx; i++){
		var slidx = i+clt_ab;
		if(slidx > 4){slidx = slidx %5};
		var lilist = elm.children()[i];
		var img = $(lilist).children();
		$(lilist).css("z-index",slide[slidx].zindex);
		$(img).animate({
			'width':slide[slidx].width + 'px',
			'height':slide[slidx].height + 'px',
		})
		$(lilist).animate({
			'left':slide[slidx].left + 'px',
			'z-index':slide[slidx].zindex,
			'opacity':slide[slidx].opacity,
			'top':slide[slidx].top + 'px',
		},function(){
			abbool = true;
		})
	}
}
//切换案例
function changeanlipg(){
	var left = $(".page_anli_bodylist").attr("left");

	if(clt_al == alcount){
		clt_al = 0;
	}else if(clt_al < 0){
		clt_al = alcount - 1;
	}
	for(var i = 0; i < alcount;i++){
		$($(".page_anli_bodylist")[i]).animate({
			'left':1600*(i-clt_al) +'px'
		},function(){
			albool = true;
		})
	}
}
//适配方案
function Allfit(){
	bncount = $(".body-bg").children().length;
	alcount = $(".page_anli_bodybox").children().length;

	for(var i = 0;i < alcount; i++){
		$($(".page_anli_bodylist")[i]).css("left",i*1600+"px");
	}
	//banner适配
	scrw = $(window).width();

	scrh = $(window).height();
	Dvalue = 1920 - scrw;
	scaleW = scrw/1920;
	scaleH = scrh/960;
	
	var hight = 625*scaleW;
	$(".other-banner").css("height",hight+"px");
	$(".other-banner").css("background-size",scrw+"px "+hight+"px");
	//内页适配
	if(scrw < 1215){
//			$(".page-style1-bg").css("width",scrw + "px");
		$(".page_con_news").css("width",scrw + "px");
	}
	//新闻适配
	if(scrw < 1200){
		var newelmW = scrw - 60;
		var newDv = 1140 - newelmW;
		$(".page_news_elm").css("width",newelmW + "px");
		$(".page_news_arti").css("width",813-newDv + "px");
		$(".page_news_arti_title").css("width",813-newDv + "px");
		$(".page_news_arti_main").css("width",813-newDv + "px");
	}
	$(".btn-back").css("margin-left",300-Dvalue/2+"px");
	var btnBackml = $(".btn-back").outerWidth(true) - 89;

	if(btnBackml < 0){
		$(".btn-back").css("margin-left",0+"px");
	}
	//导航适配
	$(".nav").css("margin-right",300*scaleW*scaleW+"px")
	$(".nav li").css("padding-left",60*scaleW+"px");
	//案例适配
	
	if(Dvalue < 267){
		$(".page_anli_bodylist").css("width",1600 - Dvalue + "px");
		$(".page_anli_bodylist_des").css("width",525 - Dvalue + "px");
		$(".page_anli_bodylist_des_cont").css("width",525 - Dvalue + "px");
		$(".page_anli_bodybox").css("width",1600 - Dvalue + "px");
		$(".page_anli_wrap").css("width",985+ "px");
		
		$(".page_anli_bodylist_des").css("float","left");
		$(".page_anli_bodylist_des").css("margin",215+"px "+45+"px");
		$(".page_anli_bodylist_show").css("float","left");
		$(".page_anli_bodylist_show").css("width",985+"px");
		$(".page_anli_slide").css("margin-top",150+"px");
		
	}else if(Dvalue >= 267){
		$(".page_anli_bodylist").css("width",1600 - Dvalue + "px");
		$(".page_anli_bodylist_des").css("width",1600 - Dvalue + "px");
		$(".page_anli_bodylist_des_cont").css("width",1600 - Dvalue + "px");
		$(".page_anli_bodybox").css("width",1600 - Dvalue + "px");
		$(".page_anli_wrap").css("width",1600 - Dvalue+ "px");
		
		$(".page_anli_bodylist_des").css("float","none");
		$(".page_anli_bodylist_des").css("margin","auto");
		$(".page_anli_bodylist_show").css("float","none");
		$(".page_anli_bodylist_show").css("width",880+"px")
		$(".page_anli_slide").css("margin-top",0+"px");
	}
	var btnmagValue =(scrw - (1600 - Dvalue) - 80)/4;
	$(".page_anli_btnleft").css("margin",300+"px "+ btnmagValue +"px");
	$(".page_anli_btnright").css("margin",300+"px "+ btnmagValue +"px");
	//首页适配
	$(".idx-sver-lst").css("margin",0+"px "+(scrw-300)/2 +"px");
	$(".body-bg").css("width",bncount*scrw+"px");
	$(".body-bg").css("height",scrh+"px");
	$(".body-bg-banner").css("width",scrw+"px");
	$(".body-bg-banner").css("height",scrh+"px");
	$(".body-bg-banner").css("background-size",scrw+"px "+ scrh+"px");
	$(".elm-win").css("width",scrw + "px");
	$(".elm-win").css("height",scrh + "px");
	$(".idx-sver").css("top",scrh - 108 +"px");
	$(".idx-slider").css("top",-scrh/2 +"px");
	$(".box").css("width",scrw +"px");
	$(".box").css("height",scrh +"px");
	$("#left").css("margin-left",scaleW*150 + "px");
	$("#right").css("margin-right",scaleW*150 + "px");
	$(".btn-down").css("width",scrw + "px");
	$(".header").css("width",scrw +"px");
}
