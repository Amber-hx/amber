window.onload=function(){
	var oB=document.getElementById('button');
	var oN=document.getElementById('nav');
	var oBig=document.getElementById('bb');
	var oPs=document.getElementById('ps');
	var oPh=document.getElementById('ph');

	oB.onclick=function(){
		if(oN.style.display=='block'){
			oN.style.display='none';
			oBig.className='';
			oPs.className='show';
			oPh.className='hide';
		}else{
			oN.style.display='block';
			oBig.className='marl';
			oPs.className='hide';
			oPh.className='show';	
		}
	};


/*-------------------- items-------------------------*/


function getStyle(obj,name){
		return(obj.currentStyle||getComputedStyle(obj,false))[name];
	}
		var oImg1=document.getElementById('img1');
		var oT1=document.getElementById('top1');
		var oD1=document.getElementById('down1');
		var oBox1=document.getElementById('div1');

		var oImg2=document.getElementById('img2');
		var oT2=document.getElementById('top2');
		var oD2=document.getElementById('down2');
		var oBox2=document.getElementById('div2');

		var oImg3=document.getElementById('img3');
		var oT3=document.getElementById('top3');
		var oD3=document.getElementById('down3');
		var oBox3=document.getElementById('div3');
		
		var timer=null;
		var n=0;
		
		var imgH1=parseInt(getStyle(oImg1,'height'));
		var boxH1=parseInt(getStyle(oBox1,'height'));

		var imgH2=parseInt(getStyle(oImg2,'height'));
		var boxH2=parseInt(getStyle(oBox2,'height'));

		var imgH3=parseInt(getStyle(oImg3,'height'));
		var boxH3=parseInt(getStyle(oBox3,'height'));
		
		oT1.onmouseover=function(){
			timer=setInterval(function(){
				n-=10;
			
				if(n<=boxH1-imgH1+200){
					n=boxH1-imgH1+200;
				}
			
				oImg1.style.top=n+'px';		
			},50)
		};

		oT2.onmouseover=function(){
			timer=setInterval(function(){
				n-=10;
			
				if(n<=boxH2-imgH2+200){
					n=boxH2-imgH2+200;
				}
			
				oImg2.style.top=n+'px';		
			},50)
		};

		oT3.onmouseover=function(){
			timer=setInterval(function(){
				n-=10;
			
				if(n<=boxH3-imgH3+200){
					n=boxH3-imgH3+200;
				}
			
				oImg3.style.top=n+'px';		
			},50)
		};
		
		oD1.onmouseover=function(){
			timer=setInterval(function(){
				n+=10;
				if(n>=0){
					n=0;
				}
				oImg1.style.top=n+'px';		
			},50)
		};

		oD2.onmouseover=function(){
			timer=setInterval(function(){
				n+=10;
				if(n>=0){
					n=0;
				}
				oImg2.style.top=n+'px';		
			},50)
		};

		oD3.onmouseover=function(){
			timer=setInterval(function(){
				n+=10;
				if(n>=0){
					n=0;
				}
				oImg3.style.top=n+'px';		
			},50)
		};
		oT1.onmouseout=oD1.onmouseout=function(){
			clearInterval(timer);	
		};

		oT2.onmouseout=oD2.onmouseout=function(){
			clearInterval(timer);	
		};

		oT3.onmouseout=oD3.onmouseout=function(){
			clearInterval(timer);	
		};

};


	

