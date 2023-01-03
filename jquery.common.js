/*

#######################################
# 放在 <head>至</head> 之間
#######################################

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="jquery.mouseimage.js"></script>


#######################################
# 特效頁籤
#######################################

<ul class="j_tab" mode="模式" speed="速度" default="預設顯示">
	<li>
    	<a href="#">感應點 1</a>
		<div class="j_tab_content">顯示內容 1</div>
    </li>
	<li>
    	<a href="#">感應點 2</a>
		<div class="j_tab_content">顯示內容 2</div>
    </li>
</ul>

[mode] slide:向下顯示 fade:淡入淡出 show:直接顯示 (預設使用直接顯示)
[speed] 直接輸入數字，數字越大則顯示越慢。
[default] 設定預設哪一個先顯示，由上到下算

※ 在 j_tab 裡面的頁籤都可以套用，不需要每一個都設定
※ 顯示內容區塊，必須使用 j_tab_content


#######################################
# 特效選單
#######################################

<ul class="j_menu" mode="模式" speed="速度">
	<li><a href="#">主選項 1</a>
		<ul>
			<li><a href="/msn/">子選項 1-1</a></li>
			<li><a href="/msn/">子選項 1-2</a></li>
		</ul>
	</li>
	<li><a href="#">主選項 2</a>
		<ul>
			<li><a href="/msn/">子選項 2-1</a></li>
			<li><a href="/msn/">子選項 2-2</a></li>
		</ul>
	</li>
</ul>

[mode] slide:向下顯示 fade:淡入淡出 show:直接顯示 (預設使用直接顯示)
[speed] 直接輸入數字，數字越大則顯示越慢。

※ 在 j_menu 裡面的子選單都可以套用，不需要每一個都設定 (只適用於雙層結構)


#######################################
# 滑鼠變換圖像
#######################################

<ul class="c_image">
	<li><a href="#"><img src="變換前" csrc="變換後" width="89" height="30" /><a></li>
	<li><a href="#"><img src="變換前" csrc="變換後" width="89" height="30" /><a></li>
<ul/>

※ 在 c_image 裡面的圖片都可以套用，不需要每一個都設定


#######################################
# Google 地圖 
#######################################

<div class="gmap" address="地址" lang="語系" box="對話框"></div>

[lang] zh-tw:繁體中文 zh-cn:簡體中文 ja:日文

[box] on:顯示對話框 off:不顯示對話框


#######################################
# Youtube 影片
#######################################

<div class="youtube" video="影片網址" auto="on" replay="on" width="寬" height="高"></div>

[auto] on:自動撥放 off:不自動撥放
[replay] on:重複撥放 off:不重複撥放


#######################################
# 彈跳視窗
#######################################

※ 按鈕也可以使用連結或某個DIV，只要符合規範就好，區塊內部的排列順序沒有差別，只要名稱正確就好。

<input type="button" class="j_alert_show" box="區塊名稱" />

<div class="j_alert" id="區塊名稱">
	<div class="j_alert_box">
        <div>測試標題</div>
        <div>測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容</div>
        <div class="j_alert_close">關閉視窗</div>
    </div>
</div>

*/

$(function()
{
	
	$('a').each(function ()
	{
		var href = $(this).attr('href');
		
		if (href == '#')
		{
			$(this).removeAttr('href');
			$(this).addClass('hide_a');
		}
	});
	
	// #######################################
	// 特效頁籤
	// #######################################
	var j_tab_count = 0;
	
	$('.j_tab li .j_tab_content').hide();

	$('.j_tab li a').each(function ()
	{
		if ($(this).attr('href') == '#')
		{
			$(this).attr('href','javascript:void(0)');
		}
	});
	
	$('.j_tab li').each(function ()
	{
		var j_tab_default = parseInt($('.j_tab').attr('default'));
		var j_tab_mode = $(this).parent('ul').attr('mode');
		var j_tab_speed = parseInt($(this).parent('ul').attr('speed'));
		
		j_tab_count++;
		
		if (j_tab_default == j_tab_count)
		{
			switch (j_tab_mode)
			{
				case 'slide':
				$('.j_tab li .j_tab_content').slideUp(j_tab_speed);
				$(this).children('.j_tab_content').slideDown(j_tab_speed);
				break;
				
				case 'fade':
				$('.j_tab li .j_tab_content').fadeOut(j_tab_speed);
				$(this).children('.j_tab_content').fadeIn(j_tab_speed);
				break;
				
				case 'show':
				default:
				$('.j_tab li .j_tab_content').hide(j_tab_speed);
				$(this).children('.j_tab_content').show(j_tab_speed);
				break;
			}
		}
	});

	$('.j_tab li').click(function ()
	{
		var j_tab_mode = $(this).parent('ul').attr('mode');
		var j_tab_speed = parseInt($(this).parent('ul').attr('speed'));
		
		switch (j_tab_mode)
		{
			case 'slide':
			$('.j_tab li .j_tab_content').slideUp(j_tab_speed);
			$(this).children('.j_tab_content').slideDown(j_tab_speed);
			break;
			
			case 'fade':
			$('.j_tab li .j_tab_content').fadeOut(j_tab_speed);
			$(this).children('.j_tab_content').fadeIn(j_tab_speed);
			break;
			
			case 'show':
			default:
			$('.j_tab li .j_tab_content').hide(j_tab_speed);
			$(this).children('.j_tab_content').show(j_tab_speed);
			break;
		}
	});
	
	// #######################################
	// 特效選單
	// #######################################
	var j_menu_count = 0;
	
	
	$('.j_menu li ul').hide();
	
	$('.j_menu li').each(function ()
	{
		var j_menu_default = parseInt($('.j_menu').attr('default'));
		var j_menu_mode = $(this).parent('ul').attr('mode');
		var j_menu_speed = parseInt($(this).parent('ul').attr('speed'));
		
		j_menu_count++;
		
		if (j_menu_default == j_menu_count)
		{
			switch (j_menu_mode)
			{
				case 'slide':
				$(this).children('ul').slideDown(j_menu_speed);
				break;
				
				case 'fade':
				$(this).children('ul').fadeIn(j_menu_speed);
				break;
				
				case 'show':
				default:
				$(this).children('ul').show(j_menu_speed);
				break;
			}
		}
	});
	
	$('.j_menu li').hover(function ()
	{
		var j_menu_mode = $(this).parent('ul').attr('mode');
		var j_menu_speed = parseInt($(this).parent('ul').attr('speed'));
		
		switch (j_menu_mode)
		{
			case 'slide':
			$(this).children('ul').slideDown(j_menu_speed);
			break;
			
			case 'fade':
			$(this).children('ul').fadeIn(j_menu_speed);
			break;
			
			case 'show':
			default:
			$(this).children('ul').show(j_menu_speed);
			break;
		}
		
	},function ()
	{
		var j_menu_mode = $(this).parent('ul').attr('mode');
		var j_menu_speed = parseInt($(this).parent('ul').attr('speed'));
		
		switch (j_menu_mode)
		{
			case 'slide':
			$(this).children('ul').slideUp(j_menu_speed);
			break;
			
			case 'fade':
			$(this).children('ul').fadeOut(j_menu_speed);
			break;
			
			default:
			$(this).children('ul').hide(j_menu_speed);
			break;
		}
	});
	
	// #######################################
	// 滑鼠變換圖像
	// #######################################
	$('.c_image img').mouseover(function ()
	{
		var o_image = $(this).attr('src');
		var c_image = str_replace('../','',$(this).attr('csrc'));
		$(this).attr('src',c_image);
		$(this).attr('osrc',o_image);
	}).mouseout(function ()
	{
		var o_image = $(this).attr('osrc');
		$(this).attr('src',o_image);	
	});
	
	// #######################################
	// 顯示語音辨識
	// #######################################
	$('input:text').each(function ()
	{
		$(this).attr('x-webkit-speech','');
	});
	
	// #######################################
	// Google 地圖
	// #######################################
	$('.gmap').each(function ()
	{
		var iwloc = 'A'
		var address = $(this).attr('address');
		var box = $(this).attr('box');
		address = urlencode(address);
		var lang = $(this).attr('lang');
		
		if (box == 'off')
		{
			var iwloc = 'Z';
		}
		
		$(this).html('<iframe frameborder="0" width="100%" height="100%" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.tw/maps?hl='+ lang +'&amp;geocode=1&amp;iwloc='+ iwloc +'&amp;q='+ address +'&amp;aq=&amp;ie=UTF8&amp;t=m&amp;z=14&amp;output=embed"></iframe>');
	});
	
	// #######################################
	// Youtube 影片
	// #######################################
	$('.youtube').each(function ()
	{
		var video = $(this).attr('video');
		
		var width = $(this).attr('width');
		var height = $(this).attr('height');
		var autoplay = 0;
		var loop = 0;
		
		if ($(this).attr('auto') == 'on')
		{	
			autoplay = 1;
		}
		
		if ($(this).attr('replay') == 'on')
		{
			loop = 1;
		}
		
		var video_url = video.split('&');
		var tmp_url = video_url = video_url[0];
		var tmp_code = tmp_url.split('=');
		var video_code = tmp_code[1];
		$(this).html('<embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="http://www.youtube.com/v/'+ video_code +'?autoplay='+ autoplay +'&loop='+ loop +'" width="'+ width +'" height="'+ height +'" allowfullscreen="true" wmode="transparent"></embed>');
	});
	

	// #######################################
	// 彈跳對話框
	// #######################################
	$('.j_alert').hide();
	$('.j_alert').css('background','rgba(0,0,0,0.5)');

	$('.j_alert').css('position','fixed');
	$('.j_alert').css('z-index','9999');
	$('.j_alert').css('left','0');
	$('.j_alert').css('top','0');
	
	$('.j_alert_show').click(function ()
	{
		$(this).blur();
		
		var box = $(this).attr('box');
		
		var box_w = parseInt($('.j_alert_box').css('width'));
		var box_h = parseInt($('.j_alert_box').css('height'));
		
		box_left = ($(window).width() / 2) - (box_w / 2);
		box_top = ($(window).height() / 2) - (box_h / 2);
		
		//clear: both;
		$('.j_alert_box').css('clear','both');
		$('.j_alert_box').css('position','fixed');
		$('.j_alert_box').css('left',box_left + 'px');
		$('.j_alert_box').css('top',box_top + 'px');
		
		$('#' + box).show();
	});
	
	$('.j_alert_close').click(function ()
	{
		$('.j_alert').hide();
	});
	
	$('.j_alert').width($(window).width());
	$('.j_alert').height($(window).height());
	
	$(document).keydown(function(e)
	{
		if (e.keyCode == 27)
		{
			$('.j_alert').hide();
		}
	});
});



// #######################################
// 函式集
// #######################################
function str_replace(s_search, s_replace, str) 
{
	return str.replace(s_search, s_replace);
}


function urlencode(str)
{
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

;(function($)
{
	$.preload = function()
	{
		var tmp = [], i = arguments.length;
  		// reverse loop run faster
		for(; i-- ;) tmp.push( $( '<img />' ).attr( 'src', arguments[ i ]));
	};
})(jQuery);