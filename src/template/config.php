<?php


// 01.14 14:50-17:20
// 01.14 18:50-19:10

$v = date("YmdHis");
$date=date('Y-m-d H:i:s');
$url = isset($_GET["url"]) ? $_GET["url"] : "index";
$hash = isset($_GET["hash"]) ? $_GET["hash"] : "index";
$cid = isset($_GET["cid"]) ? $_GET["cid"] : "17010289";
$sid = isset($_GET["sid"]) ? $_GET["sid"] : "120632";
$rawSid = isset($_GET["rawSid"]) ? $_GET["rawSid"] : "120632";
$shareUid = isset($_GET["shareUid"]) ? $_GET["shareUid"] : "";
$openMatch = isset($_GET["openMatch"]) ? $_GET["openMatch"] : false;
$openLive = strtotime($date)  > strtotime('2018-01-14 14:50:00') && strtotime($date) < strtotime('2018-01-14 17:20:00');
$openLive2 = strtotime($date)  > strtotime('2018-01-14 18:50:00') && strtotime($date) < strtotime('2018-01-14 21:10:00');
$openGta = strtotime($date)  > strtotime('2018-02-27 00:00:00') && strtotime($date) < strtotime('2018-02-28 00:00:00');
$openLives = $openLive || $openLive2  ? true : false;
// 01.14 15點-17點/19點-21點


function isMobile(){
    $mobile = array();
    static $mobilebrowser_list = "Mobile|iPhone|Android|WAP|NetFront|JAVA|OperasMini|UCWEB|WindowssCE|Symbian|Series|webOS|SonyEricsson|Sony|BlackBerry|Cellphone|dopod|Nokia|samsung|PalmSource|Xphone|Xda|Smartphone|PIEPlus|MEIZU|MIDP|CLDC";
    if (preg_match("/$mobilebrowser_list/i", $_SERVER["HTTP_USER_AGENT"], $mobile)) {
        return true;
    } else {
        if (preg_match("/(mozilla|chrome|safari|opera|m3gate|winwap|openwave)/i", $_SERVER["HTTP_USER_AGENT"])) {
            return false;
        } else {
            if (isset($_GET["mobile"])) {
                return true;
            } else {
                return false;
            }
        }
    }
};
if (isMobile()) {
    //https://rcshow.tv/appNew/h5/getVideo.php?sid=27646940&cid=16
    // header("location:http://rcshow.tv/appNew/event/2017/live");
    // exit;
};

include $_SERVER["DOCUMENT_ROOT"] . "/appNew/autoLogin.php";

$autoLogin = new autoLogin();
$loginRs = $autoLogin->loginSetup();
$msg = "";
if (!empty($loginRs["error"])) {
    $msg = $loginRs["message"];
}

$debug = isset($_GET["debug"]);
$debug = true;
$ismobile = isMobile();

$fbAppId = $debug ? "1586161158331556" : "1382678158693829";
$api = $debug ? "http://192.168.50.140/code/alive-website/www.alive.tv/index.php" : "/index.php";
$apis = $debug ? "http://192.168.50.18/www.alive.tv/index.php" : "/index.php";

$defaultUid = $debug ? "7054464" : "";
$defaultSuid = $debug ? "7054464" : "";
$defaultToken = $debug ? "MDIwMXSgXTRKZ+DpYR4kGBswC0qDq1gIXKqOt7T9dwdzeZW6/N1lqF3/T8Xo0WPArxde1+BJMxbXTudR" : "";
$vision = 1.20;
$QUERY = $_SERVER['QUERY_STRING'];

$type = isset($_GET["type"]) ? $_GET["type"] : 2;
$kind = isset($_GET["kind"]) ? $_GET["kind"] : "link";
$uid = isset($_GET["uid"]) ? $_GET["uid"] : "";
$token = isset($_GET["token"]) ? $_GET["token"] : "";
$nstat = isset($_GET["nstat"]) ? $_GET["nstat"] : "";
$suid = isset($_GET["singerUid"]) ? $_GET["singerUid"] : "";
$day = isset($_GET["day"]) ? $_GET["day"] : date("Ymd");

$liveConf = array(
    "cid" => $cid,
    "sid" => $sid,
    "rawSid" =>$rawSid
);

$times = array('lTime' => '2018.1.6號 19:00-21:00', 'nTime' => '2018.1.6號 19:00-21:00' );
$config = array(
    "type" => $type,
    "kind" => $kind,
    "uid" => $uid,
    "token" => $token,
    "nstat" => $nstat,
    "mobile" => $ismobile,
    "debug" => $debug,
    "version" => $vision,
    "suid" =>$suid,
    "day" => $day,
    "url" => $url,
    "hash" => $hash,
    "api" => $api,
    "apis" =>$apis,
    "live" =>$liveConf,
    "openMatch" =>$openMatch, //打開比賽
    "shareUid"=>$shareUid,
    "openLives"=>$openLives,
    'nowDate' =>$date,
    "openGta" =>$openGta
);

if(empty($flash)){
    $flash = '{}';
}else{
    $flash = json_encode($flash);
}
if(empty($_COOKIE['PHPSESSID'])){
    $_COOKIE['PHPSESSID'] = session_id();
}
$authC = sha1($_COOKIE['PHPSESSID'] . 'rcshow.tv');

// 分享標題：看比賽拿顯卡？電鼠？
// 文案：萬眾期待的RC歡樂吃雞賽將會在01.14日期直播！Chicken Dinner！上桌吧雞友們！獎金花落誰家？電子配件誰幸運獲取？RC滿足你的雞兒願望！
$url = isset($_GET["url"]) ? $_GET["url"] : "";
$ogTitle = "點花燈 鬧元宵 一紙字謎 共賞華燈初上";
$ogDesc = "RC直播是RC語音旗下于2013年推出的影音直播互動社群。RC直播擁有技術先進的視訊直播技術，支援數萬人同時線上視訊聊天，更有海量優質主播與你即時互動，線上K歌跳舞，視訊交友。透過先進的互聯網直播技術搭建的影音直播互動社群，方便有才藝的人在視訊中分享自己的表演，不斷地獲取越來越多的粉絲關注，同時主播可以透過虛擬禮物的方式，獲得粉絲的回報。";
$ogUrl =  "https://www.rcshow.tv/activity/cover_singer/30?from=share";
$ogImage = "https://www.rcshow.tv/activity/cover_singer/30/dist/img/header/facebook-share.jpg?v=d491d3a736";

?>

