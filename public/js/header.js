// 登录注册
var cms = {
    login: "http://passport.testiotek.com/",
    domain: "http://www.testiotek.com/",
    port: "http://www.testiotek.com/",
    quest: "http://community.testiotek.com/",
    middle: "testiotek",
    statics: "http://iotekcdn.b0.upaiyun.com/static/",
    imgurl: "http://iotekcdn.b0.upaiyun.com/static/portal/images/",
    out: "http://www.testiotek.com/sem/html/11.11.html"
};

$(function() {
    // 更新被选中的栏目的背景
    $('.index_bnr li').each(function () {
        var href = $(this).find('a').attr('href');
        if(href && (href.lastIndexOf(window.location.pathname) != -1) && (window.location.pathname != '/')) {
            $(this).css('background-color', '#3f3f3f');
        }
    });
    //首页
    $("#sculpture").mouseenter(function(event){
        event.stopPropagation();
        $(".member_div").show();
    })
    $(".sculpture").mouseleave(function(event){
        event.stopPropagation();
        $(".member_div").hide();

    })
    $(".member_div_cont").hover(function(){
        $(".member_div_cont").css("color","#d72132")
    }, function () {
        $(".member_div_cont").css("color","#000")
    })
    //搜索
    $("#search_img").hover(function(){
        $("#search_img").addClass("search_red");
    },function(){
        $("#search_img").removeClass("search_red");
    })
    $("#search_img").click(function(){
        var si=$(this).attr("si");
        var val=$(".search_input").val();
        if(si==1){
            $(".search_input").show();
            $(".search_input").removeClass("animated fadeOut");
            $(".search_input").addClass("animated fadeInRight");
            $("#search_img").attr("si","2");
        }else if(val==""){
            $(".search_input").removeClass("animated fadeInRight");
            $(".search_input").addClass("animated fadeOut");
            $(".search_input").hide();
            $("#search_img").attr("si","1");
        }
    })

    $(window).click(function() {
        $(".search_input").removeClass("animated fadeInRight");
        $(".search_input").addClass("animated fadeOut");

        $("#search_img").attr("si","1");
    });

    $('.index_menber').click(function(event){
        event.stopPropagation();
    });
    //头像
    $("#sculpture").hover(function(){
        $(".img").addClass("sculpture_cur");
    },function(){
        $(".img").removeClass("sculpture_cur");
    })
    //个人设置
    $(".set_img").click(function(){
        // alert(1);
        $(".set_img").addClass("set_img_cur");
    })


    // 回车搜索
    function enter_search(){
        var s_t=$('#search-h-t').val();
        if(s_t.length>0){
            window.location.href=cms.port+"courseCenter/index?courseAndGoodsName="+encodeURIComponent(s_t);
        }
    }

    $('#search-h-t').keydown(function(event){
        if(event.keyCode ==13){
            enter_search();
        }
    });

    $('#search_img').on('click', function(event) {
        var si=$(this).attr("si");
        var val=$(".search_input").val();
        if(si==2 && val!=""){
            event.preventDefault();
            enter_search();
        }
    });


    $.ajax({
        type : "get",
        async : false,
        url : cms.port+"cms/loginGetUserData_V2?" + new Date().getTime(),
        cache : false,
        dataType : "jsonp",
        jsonp: "callback",
        jsonpCallback:"callback",
        success : function(data){
            update_user(data);
        },
        error:function(){
        }
    });
    //是否登录
    //是否登录

    $('.login-three').on('click',function(){
        window.location.href="https://graph.qq.com/oauth/show?which=ConfirmPage&display=pc&response_type=code&client_id=101275008&redirect_uri=http://passport.testiotek.com/callback/qq";
    });
    $('.login-four').on('click',function(){
        window.location.href="https://open.weixin.qq.com/connect/qrconnect?appid=wx4c76d80d97924f84&redirect_uri=http%3a%2f%2fpassport.testiotek.com%2fcallback%2fwechat&response_type=code&scope=snsapi_login#wechat_redirect";
    });
    
    function update_user(data){

        if(data.resultCode){

            var html='<a style="display:block" href="'+cms.port+'personal/myCourse"><img class="img" id="sculpture" src="'+data.user.iconUrl+'" height="37" width="37"></a>'+
                '<div class="member_div">'+
                '<div class="member_div_top clearfix">'+
                '<img class="member_div_top_img" src="'+data.user.iconUrl+'" height="55" width="55">';
            if(data.user.nickName){
                html+='<span class="text_name">'+data.user.nickName+'</span>';
            }else{
                html+='<span class="text_name">'+data.user.username+'</span>';
            }
            html+='<a style="display:block" href="'+cms.port+'personal/info"  class="index_icon set_img" ></a>'+
                '</div>'+
                '<div class="member_div_cont clearfix">';
            if(data.userGoodsRel!=null){
                var detail_url = "";
                if(data.userGoodsRel.course.version==""||data.userGoodsRel.course.version==null){
                    detail_url = "learnhome/courseoutline";
                }else{
                    detail_url="course/courseDetail";
                }
                html+='<p id="'+data.userGoodsRel.course.id+'" ver="'+data.userGoodsRel.course.version+'" class="member_div_cont_tit ke-li"><a class="course_detail_a" target="_blank" href='+cms.domain+detail_url+'?goodsId='+data.userGoodsRel.goods.id+'>'+data.userGoodsRel.course.courseName+'</a></p>';
                html+='<div class="course_info ke-li" id="'+data.userGoodsRel.course.id+'" ver="'+data.userGoodsRel.course.version+'"><div class="fl"><a class="course_detail_a" target="_blank" href='+cms.domain+detail_url+'?goodsId='+data.userGoodsRel.goods.id+'>'+data.userGoodsRel.syllabus.sortNumber+'-'+data.syllabus.sortNumber+'&nbsp;'+data.syllabus.itemName+'</a>';
                if(data.userGoodsRel.course.version==""||data.userGoodsRel.course.version==null){
                    html+= '</div><a target="_blank" href='+cms.domain+'play/authInfo?goodsId='+data.userGoodsRel.goods.id+'&courseId='+data.userGoodsRel.course.id+'&syllabusId='+data.syllabus.id+'&coursewareId='+data.userGoodsRel.courseWare.id+'&index='+data.courseMap.index+'&itemindex='+data.courseMap.itemIndex+' class="continue fr">继续</a></div>';
                }else{
                    html+= '</div><a target="_blank" href='+cms.domain+'play/prepareAuthInfo?goodsId='+data.userGoodsRel.goods.id+'&courseId='+data.userGoodsRel.course.id+'&syllabusId='+data.syllabus.id+'&coursewareId='+data.userGoodsRel.courseWare.id+'&index='+(data.courseMap.index-1)+'&itemindex='+(data.courseMap.itemIndex-1)+' class="continue fr">继续</a></div>';
                }
            }
            html+='</div><div class="member_div_btm">'+
                '<a href="'+cms.login+'logout?service='+cms.out+'" id="login-button">退出登录</a>'+
                '</div></div>';

            $('#sculpture').html(html);

            $.ajax({
            type : "get",
            async : false,
            url : "/valid/url",
            cache : false,
            data: {
                url: window.location.pathname
            },
            dataType : "jsonp",
            success : function(data){
               if(data) {
                // redirect to current page
                $("#login-button").attr('href', window.location.origin +'/user/logout?redirectUrl='+ encodeURIComponent(window.location.href));
               }
            },
            error:function(){
            }
        });
        }
    }
});
