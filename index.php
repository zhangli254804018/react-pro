<?php include "config.php"; ?>
<!DOCTYPE html>
<!-- <html manifest="src/apache/manifest.appcache"> -->
<head>
    <title><?php echo $ogTitle; ?></title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no,email=no">
    <meta name="screen-orientation" content="portrait">
    <meta name="x5-orientation" content="portrait">
    <meta name="keywords" content="RC語音,RaidCall,RC,RC直播,RC秀場,主播,遊戲實況,網路電視,直播節目,線上K歌,視訊直播,視訊聊天,視訊交友,直播平台">
    <meta name="description" content="RC直播是RC語音旗下于2013年推出的影音直播互動社群。RC直播擁有技術先進的視訊直播技術，支援數萬人同時線上視訊聊天，更有海量優質主播與你即時互動，線上K歌跳舞，視訊交友。透過先進的互聯網直播技術搭建的影音直播互動社群，方便有才藝的人在視訊中分享自己的表演，不斷地獲取越來越多的粉絲關注，同時主播可以透過虛擬禮物的方式，獲得粉絲的回報。">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta property="fb:app_id" content="1382678158693829"/>
    <meta property="og:site_name" content="RC娛樂—讓夢起飛，音為有你" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo $ogUrl; ?>">
    <meta property="og:image" content="<?php echo $ogImage; ?>" />
    <meta property="og:title" content="<?php echo $ogTitle; ?>" />
    <meta property="og:description" content="<?php echo $ogDesc; ?>" />
    <link rel="stylesheet" href="/style/newHome/nav_ft.css?__pack">
    <link rel="stylesheet" href="/style/public/base.css?__pack">
	<script>
        //rem字体大小
        (function(doc, win) {
            "use strict";
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function() {
                    var clientWidth = docEl.clientWidth > 720 ? 720 : docEl.clientWidth;
                    var htmlFontSize = 20;
                    var designWidth = 360;
                    if (!clientWidth) return;
                    docEl.style.fontSize = htmlFontSize * (clientWidth / designWidth) + 'px';
                    var reality = Number(docEl.style.fontSize.substr(0, docEl.style.fontSize.length - 2));
                    var theory = htmlFontSize * (clientWidth / designWidth);
                    if (reality != theory) {
                        docEl.style.fontSize = htmlFontSize * theory / reality * (clientWidth / designWidth) + 'px';
                    }
                    // console.log(window.navigator);
                    console.log("字体大小：" + docEl.style.fontSize);
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    </script>
    <script>
        window.conf = {};
        window.rcAsyncInit = function() {
            RC.init({
                appId: 100000,
                reload: false,
                redirect: ''
            });
            RC.Event.subscribe('login', function(ret){

                if (ret && ret.uid) {
                    conf.userInfo = ret;
                    $('#j-nav-login').hide();
                    $('#j-nav-profile').find('.t-nav-nick').text(ret.nick).end().show();
                }

            });

            RC.Event.subscribe('logout', function(ret){
                $('#j-nav-profile').hide();
                $('#j-nav-login').show();
            });

            RC.getLoginStatus(function(){
            if (!RC.isLogin) {
                // return RC.open()
            };
            });
        };
        (function(d) {
            var js, id = 'raidcall-jssdk', ref = d.getElementsByTagName('head')[0], date = new Date();
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = '/login/all.js?v=' + date.getFullYear() + date.getMonth() + date.getDate();
            ref.appendChild(js);
        })(document);
</script>
<link href="dist/index.d37efae60a445167cca3.css" rel="stylesheet"></head>
    <div id="myApp" class="f7-root"> </div>
<script type="text/javascript" src="dist/vendor.min.js?v=2541ac5e696070e9381b"></script><script type="text/javascript" src="dist/index.min.js?v=d37efae60a445167cca3"></script></body>
</html>