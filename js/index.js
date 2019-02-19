var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
$(function () {
    $('nav ul li').click(function () {
        if ($(this).attr('class') == 'cur') {
            $(this).find('p').css('display', 'none');
            $(this).removeClass('cur');
        } else {
            $(this).addClass('cur').siblings().removeClass("cur");
            $(this).find('p').css('display', 'block');
            //点击nav里面的li，nav可以向上scrollTop滚动的高度，方便用户的体验
            $('nav').scrollTop(($(this).height() - $(this).find('p').height()) * $(this).index());
            $(this).siblings().find('p').css('display', 'none');
        }
    });
    $('.nav').click(function () {
        if ($('.mask_layer').css('display') == 'none') {
            $('.mask_layer').show();
            $('body').css({
                'overflow': 'hidden',
                'height': '100%'
            });
        } else {
            $('.mask_layer').hide();
            $('body').css({
                'overflow': 'auto',
                'height': 'auto'
            });
        }
        if ($('nav').css('display') == 'none') {
            $('nav').show();
            $('.mask_layer').show();
            $('body').css({
                'overflow': 'hidden',
                'height': '100%'
            });
        } else {
            $('nav').hide();
            $('.mask_layer').hide();
            $('body').css({
                'overflow': 'auto',
                'height': 'auto'
            });
        }
    });


    //点击其他地方导航弹窗隐藏

    $('.mask_layer,.footer').click(function () {
        $('nav').hide();
        $('.mask_layer').hide();
        $('.mask_layer').hide();
        $('body').css({
            'overflow': 'auto',
            'height': 'auto'
        });
    });


    //点击微信按钮出现弹窗
    $('.wechat').click(function () {
        $('.code-wraper').addClass('show');
    });
    $('.code-wraper').click(function () {
        $(this).removeClass('show');
    });

    /*常见问题*/
    $(".commonproblem li h3").on("click", function () {
        if ($(this).next().is(":hidden")) {
            $(".problemcontents").slideUp(300);
            $(".commonproblem li").removeClass("cur");
            $(this).parents("li").addClass("cur");
            $(this).next().slideDown(300);
        } else {
            $(this).parents("li").removeClass("cur");
            $(this).next().slideUp(300);
        }
    });
    //下面的版本号更改地方
    //    $('.content.notop').append($('.copyright'));
    //最新资讯图片上下居中
    $('.news_information .news_inforLeft').css('height', $('.news_information ul a li').css("height"));
    $('.news_information .news_inforLeft img').css('height', $('.news_information ul a li').css("height"));
});
