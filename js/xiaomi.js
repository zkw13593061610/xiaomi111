window.onload=function(){
	//轮播图部分开始
	//
	//
	//
	let banner=document.querySelector(".banner");
	let wraper=document.querySelector(".banner .wraper");
	let a1=document.querySelectorAll(".wraper a");
	let t1=setInterval(move,2000);
	let now=0;
	let next=0;
	let width=parseInt(getComputedStyle(wraper,null).width);
	let btns=document.querySelector(".btns");
	let son=document.querySelectorAll(".btns .son");
	let prep=document.querySelector(".prep");
	let next1=document.querySelector(".next");
	let flag=true;
	banner.onmouseenter=function() {
		clearInterval(t1);
	};
	banner.onmouseleave=function() {
		t1=setInterval(move,2000);
	};
	prep.onclick=function(){
		if (flag==false){
			return;
		}
		flag=false;
		move1();
		clearInterval(t1);
	}
	next1.onclick=function(){
		if (flag==false){
			return;
		}
		flag=false;
		move();
		clearInterval(t1);
	}
	for (let i=0;i<a1.length;i++){
		son[i].onclick=function(){	
			next=i;
			son[next].classList.add("hot");
			son[now].classList.remove("hot");	
			if (i>now){
				a1[i].style.left=width+"px";
				animate(a1[i],{left:0});                  
				animate(a1[now],{left:-width});
			}
			else if (i<now){
				a1[i].style.left=-width+"px";
				animate(a1[i],{left:0});                  
				animate(a1[now],{left:width});
			}
			if (now==next){
				clearInterval(t);
				son[next].classList.add("hot");
			}
			now=next;
		}
	}
	function move(){
		next++;
		if (next==5){
			next=0;
		}
		a1[next].style.left=width+"px";
		son[now].classList.remove("hot");
		son[next].classList.add("hot");
		animate(a1[now],{left:-width});
		animate(a1[next],{left:0},callback);
		now=next;
	}
	function move1(){
		next--;
		if (next<0){
			next=a1.length-1;
		}
		a1[next].style.left=-width+"px";
		son[next].classList.add("hot");
		son[now].classList.remove("hot");
		animate(a1[now],{left:width});
		animate(a1[next],{left:0},callback);
		now=next;
	}
	function callback(){
		flag=true;
	}
	//轮播图部分结束
	//
	//
	//
	//内容部分开始
	//
	//
	//
	//
	let name1=document.getElementsByClassName("hwai1")[0];
	let name2=document.getElementsByClassName("hwai2")[0];
	neirong(name2);
	neirong(name1);
	let name3=document.getElementsByClassName("hwai3")[0];
	neirong(name3);
	let name4=document.getElementsByClassName("hwai4")[0];
	neirong(name4);
	function neirong(name){
		let hwraper=name.getElementsByClassName("hwraper")[0];
		let li=name.querySelectorAll(".hwraper li");
		let span=name.getElementsByTagName("span");
		console.log(span);
		let leftt=name.querySelector(".leftt");
		let rightt=name.querySelector(".rightt");
		let newWidth=parseInt(getComputedStyle(hwraper,null).width);
		let next4=0;
		let now4=0;
		leftt.onclick=function(){
			if (next4==0){
				return;
			}
			fu3();
		}
		function fu3(){
			next4--;
			if(next4<0){
				 next4=li.length-1;
			}
			li[next4].style.left=-newWidth+"px";
			span[next4].classList.add("hott");
			span[now4].classList.remove("hott");
			animate(li[now4],{left:newWidth});
			animate(li[next4],{left:0},);
			now4=next4;
		}
		rightt.onclick=function(){
			if(next4==span.length-1){
				return;
			}
			fu4();
		}
		function fu4(){
			next4++;
			if (next4==li.length){
				next=0;
			}
			li[next4].style.left=newWidth+"px";
			span[next4].classList.add("hott");
			span[now4].classList.remove("hott");
			animate(li[now4],{left:-newWidth});
			animate(li[next4],{left:0});
			now4=next4;
		}
		for(let i=0;i<li.length;i++){
			span[i].onclick=function(){
				next4=i;
				span[next4].classList.add("hott");
				span[now4].classList.remove("hott");
				if (next4<now4){
					li[next4].style.left=-newWidth+"px";
					animate(li[next4],{left:0});
					animate(li[now4],{left:newWidth});
				}
				if(next4>now4){
					li[next4].style.left=newWidth+"px";
					animate(li[next4],{left:0});
					animate(li[now4],{left:-newWidth});
				}
				now4=next4;
			}
		}
	}
	//内容结束
	//
	//
	//
	//
	//小米闪购开始
	//
	//
	//
	//
	//
	let btns1=document.querySelector(".title1 .btns");
	let con=document.querySelector(".shan .con");
	let right=con.getElementsByClassName("right")[0];
	let son1=right.getElementsByClassName("son")[0];
	let width2=parseInt(getComputedStyle(right,null).width);
	let btn2=btns1.getElementsByClassName("btn2")[0];
	let btn3=btns1.getElementsByClassName("btn3")[0];
	let times=0;
	function fn1(){
		times++;
		if (times==2){
			times=1;
		}
		son1.style.transform=`translateX(${-width2*times}px)`;
	}
	function fn2(){
		times--;
		if (times<0){
			times=0;
		}
		son1.style.transform=`translateX(${-width2*times}px)`;
	}
	btn2.onclick=function(){
		fn2();
	}
	btn3.onclick=function(){
		fn1();
	}


	////
	///
	///
	///
	///购物车开始
	let shop=document.getElementsByClassName("shop")[0];
	let a2=shop.getElementsByTagName("a")[0];
	let shopBox=shop.getElementsByClassName("shopBox")[0];
	shop.onmouseenter=function(){
		shopBox.style.height="98px";
		shopBox.style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
		a2.style.color="#ff6700";
		shopBox.style.zIndex="1";
	}
	shop.onmouseleave=function(){
		shopBox.style.height="0";
		a2.style.color="#cccccc";
		shopBox.style.zIndex="0";
	}
	shopBox.onmouseenter=function(){
		a2.style.color="#ff6700";
	}
	//
	//购物车结束
	//
	//侧导航开始
	//
	//
	let aside=document.getElementsByClassName("aside")[0];
	let li3=aside.getElementsByTagName("li");
	let liBox=aside.getElementsByClassName("liBox");
	console.log(aside);
	for(let i=0;i<li3.length;i++){
		li3[i].onmouseenter=function(){
			for (var j=0;j<li3.length;j++){
			liBox[j].style.display="none";
		}
			liBox[i].style.display="block";
			liBox[i].style.boxShadow="0 2px 10px rgba(0,0,0,0.15)"
		}
		li3[i].onmouseleave=function(){
			liBox[i].style.display="none";
		}
	}
	//
	//
	//侧导航结束
	//
	//
	//主页开始
	//
	function alex(name){
		let li1=name.getElementsByTagName("li");
		let jiadianBox=name.getElementsByClassName("jiadianBox");

		for(let i=0;i<li1.length;i++){
			li1[i].onmouseenter=function(){
				for(let j=0;j<li1.length;j++){
					jiadianBox[j].style.display="none";
				}
				jiadianBox[i].style.display="block";
			}
		}
	}
	let name=document.getElementsByClassName("jiadian")[0];
	alex(name);
	let dapei=document.getElementsByClassName("dapei")[0];
	alex(dapei);
	let peijian=document.getElementsByClassName("peijian")[0];
	alex(peijian);
	//
	//
	//主页结束
	//
	//
	//上导航开始
	//
	//
	let biggerbox=document.getElementsByClassName("biggerbox")[0];
	let a3=biggerbox.getElementsByClassName("daohang");
	let excess=biggerbox.getElementsByClassName("excess");
	let li2=biggerbox.getElementsByTagName("li");
	for (let i=0;i<li2.length;i++){
		li2[i].onmouseenter=function(){
			for(let j=0;j<li2.length;j++){
				excess[j].style.display="none";
			}
			excess[i].style.display="block";
			excess[i].style.height="229px";
			excess[i].style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
			excess[8].style.height="0";
			excess[9].style.height="0px";
		}
		li2[i].onmouseleave=function(){
			excess[i].style.height="0";
		}
	}
	///
	///
	///上导航借宿
	///
	///
	/*let wraper1=document.getElementsByClassName("wraper")[0];
	let a4=wraper1.getElementsByTagName("a");
	console.log(wraper,a2);
	let num=0;
	let t=setInterval(chongfu,3000);
	let prep1=document.getElementsByClassName("prep")[0];
	let next5=document.getElementsByClassName("next")[0];
	let banner1=document.getElementsByClassName("banner")[0];
	let btns5=banner.getElementsByClassName("btns")[0];
	let son2=btns.getElementsByClassName("son");
	function chongfu(){
		num++;
		if (num==5){
			num=0;
		}
		for (j=0;j<a2.length;j++){
				a4[j].style.zIndex=5;
				son2[j].className="son";
			}
		a4[num].style.zIndex=10;
		son2[num].className="son hot";
	}
	wraper1.onmouseenter=function(){
		clearInterval(t);
	}
	wraper1.onmouseleave=function(){
		t=setInterval(chongfu,3000);
	}
	next.onclick=function(){
		chongfu();
		clearInterval(t);
	}
	prep1.onclick=function(){
		chongfu1();
		clearInterval(t);
	}
	function chongfu1(){
		num--;
		if (num<=0){
			num=4;
		}
		for (j=0;j<a2.length;j++){
				a4[j].style.zIndex=5;
		}
		a4[num].style.zIndex=10;
	}
	for(let i=0;i<son.length;i++){
		son2[i].onclick=function(){
			num=i-1;
			chongfu();
			clearInterval(t);
		}
	}*/
	//
	//
	//
	//
	//
	//	为你推荐开始
	//	
	//	
	//	
	let button3=document.querySelector(".button1");
	let button4=document.querySelector(".button2");
	let con11=document.querySelector(".con11");
	let width1=parseInt(getComputedStyle(con,null).width);
	console.log(width1);
	let times1=0;
	button4.onclick=function(){
		times1++;
		if(times1>=3){
			times1=2;
		}
		con11.style.transform=`translateX(${-width1*times1}px)`;
	}
	button3.onclick=function(){
		times1--;
		if(times1<0){
			times1=0;
		}
		con11.style.transform=`translateX(${-width1*times1}px)`;
	}
	//
	//
	//
	//
	//为你推荐结束
}