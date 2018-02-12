(function() {
    var  setFontSize = window.setFontSize = function (_width) {
        var  docEl = document.documentElement || document.body; 
        // 获取当前窗口的宽度
        var  width = _width || docEl.clientWidth; // docEl.getBoundingClientRect().width;

        // 大于 1080px 按 1080
        if (width > 1080) { 
            width = 1080;
        }

        var  rem = width / 10;
        console.log(rem);

        docEl.style.fontSize = rem + 'px';

        // 部分机型上的误差、兼容性处理
        var  actualSize = window.getComputedStyle && parseFloat(window.getComputedStyle(docEl)["font-size"]);
        if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
            var remScaled = rem * rem / actualSize;
            docEl.style.fontSize = remScaled + 'px';
        }
    }

    var timer;
    //函数节流
    function dbcRefresh() {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 100);
    }

    //窗口更新动态改变 font-size
    window.addEventListener('resize', dbcRefresh, false);
    //页面显示时计算一次
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) { 
            dbcRefresh() 
        }
    }, false);
    setFontSize();
})(window)

// function adjustWarp(warpId = '#warp') {
//     // if (windowdow.isMobile) return;
//     const $window = $(windowdow);
//     const height = $window.height();
//     let width = $window.width();

//     // 考虑导航栏情况
//     if (width / height < 360 / 600) {
//         return;
//     }

//     width = Math.ceil(height * 360 / 640);

//     $(warpId).css({
//         height,
//         width,
//         postion: 'relative',
//         top: 0,
//         left: 'auto',
//         margin: '0 auto'
//     });

//     // 重新计算 rem
//     windowdow.setFontSize(width);
// }

