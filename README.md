# 初始設定

> 下列語法放在 `<head>` 至 `</head>` 之間

```javascript
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/RainBlueTW/jquery.common/master/jquery.common.js"></script>
```

> 引入 jQuery 及本元件


# 特效頁籤

```html
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
```

* `[mode]` slide:向下顯示 fade:淡入淡出 show:直接顯示 (預設使用直接顯示)
* `[speed]` 直接輸入數字，數字越大則顯示越慢。
* `[default]` 設定預設哪一個先顯示，由上到下算

> 在 j_tab 裡面的頁籤都可以套用，不需要每一個都設定
> 
> 顯示內容區塊，必須使用 j_tab_content


# 特效選單

```html
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
```

* `[mode]` slide:向下顯示 fade:淡入淡出 show:直接顯示 (預設使用直接顯示)
* `[speed]` 直接輸入數字，數字越大則顯示越慢。

> 在 j_menu 裡面的子選單都可以套用，不需要每一個都設定 (只適用於雙層結構)


# 滑鼠變換圖像

```html
<ul class="c_image">
	<li><a href="#"><img src="變換前" csrc="變換後" width="89" height="30" /><a></li>
	<li><a href="#"><img src="變換前" csrc="變換後" width="89" height="30" /><a></li>
<ul/>
```

> 在 c_image 裡面的圖片都可以套用，不需要每一個都設定



# Google 地圖 

```
<div class="gmap" address="地址" lang="語系" box="對話框"></div>
```


* `[lang]` zh-tw:繁體中文 zh-cn:簡體中文 ja:日文
* `[box]` on:顯示對話框 off:不顯示對話框


# Youtube 影片

```
<div class="youtube" video="影片網址" auto="on" replay="on" width="寬" height="高"></div>
```

* `[auto]` on:自動撥放 off:不自動撥放
* `[replay]` on:重複撥放 off:不重複撥放


# 彈跳視窗

> 按鈕也可以使用連結或某個DIV，只要符合規範就好，區塊內部的排列順序沒有差別，只要名稱正確就好。

```html
<input type="button" class="j_alert_show" box="區塊名稱" />

<div class="j_alert" id="區塊名稱">
	<div class="j_alert_box">
        <div>測試標題</div>
        <div>測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容</div>
        <div class="j_alert_close">關閉視窗</div>
    </div>
</div>
```