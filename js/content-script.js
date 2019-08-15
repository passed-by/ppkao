(function() {
 'use strict';
//清除限制题目访问数量的cookie
 var Days = 30;
 var exp = new Date();
 exp.setTime(exp.getTime() + Days*24*60*60*1000);
 document.cookie="PPKAO=PPKAOSTID=&PPKAOCEID=&PPKAOSJID=&UserName=&EDays=; domain=ppkao.com;expires="+exp.toGMTString()+";path=/";
//获取当前页面URL
 var iSite = window.location.href;
 var reg = /[1-9][0-9]*/g; 
 var numList = iSite.match(reg);   
 var isKaoti =new RegExp("kaoti").test(iSite);
 var isTiku =new RegExp("tiku").test(iSite);
 var isShiti =new RegExp("shiti").test(iSite);
 var isDaan =new RegExp("daan").test(iSite);
 var sUrl="";
 if (isKaoti===true){sUrl='https://newapi.ppkao.com/mnkc/kaoti/?id='+ numList;window.location.href =sUrl;}
    else{
        if(isTiku===true){sUrl='https://newapi.ppkao.com/mnkc/tiku/?id='+ numList;window.location.href =sUrl;}
        else{
            if(isShiti===true){sUrl='https://newapi.ppkao.com/mnkc/shiti/?id='+ numList;window.location.href =sUrl;}
           
        }
     }

   })();