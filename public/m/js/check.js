//验证手机合法性
function ismobile(mobilenum) {
    var remobile = new RegExp("^[1][34578][0-9]{9}$", "gi");
    if (!remobile.test(mobilenum)) {
        AlertTip("手机号码错误！", 'warning');
        return false;
    }
    return true;
}
function checkForm(objname, objmobile,code,objagree) {
    var remobile = new RegExp("^[1][34578][0-9]{9}$", "gi");

 if (!objmobile) {
        AlertTip("请填写手机！", 'warning');
        $(objmobile).focus();
        return false;
    }
    if (code == "") {
        AlertTip("请输入验证码！", 'warning');
        return false;
    }
    if (!remobile.test(objmobile.replace(/(^\s+)|(\s+$)/g,""))) {
        AlertTip("手机号码错误！", 'warning');
        $(objmobile).focus();
        return false;
    }
    if (objagree && !$(objagree).is(':checked')) {
        AlertTip("隐私政策必须同意才能完成本次申请！", 'warning');
        return false;
    }
    return true;
}
function AlertTip(str, flag) {
    var dialog = art.dialog({
        title: '提示',
        lock:true,
        content: str,
        icon: flag,
        padding: 20,
        width: 250,
        height: 50,
        zIndex: 10000,
        ok: function () {
            this.close();
        }
    });
}
function checkCode(code) {
    if (code == "") {
        AlertTip("请输入验证码！", 'warning');
        return;
    }
}
function subok(uname) {
		
	var dialog = art.dialog({
            lock: true,
            title: "恭喜，查询成功",
            content: "您的查询申请已提交，我们稍后将核实您提交的平台，给您详细解说。请您等待结果！",
            icon: 'succeed',
            width: 480,
            height: 50,
            button: {
                name: "确定",
                callback: function() {}
            },
             //close: function () { window.open("http://show.jincaishen.cn/DownPage/down.html")}//window.open("http://show.jincaishen.cn/DownPage/down.html"); 
        });
    clearInterval(t);
    secs_time = 0;
    $(".yzms,#picA,#tcwindows,.bd_wd").hide();
    $(".gc").removeAttr("disabled").val("获取验证码");
    $(":text").val("").blur();
}
/*---------------重写setTimeout函数-------------------*/
//var __sto = setTimeout;
//window.setTimeout = function (callback, timeout, param) {
//    var args = Array.prototype.slice.call(arguments, 2);
//    var _cb = function () {
//        callback.apply(null, args);
//   }
//    __sto(_cb, timeout);
//}

var wait_time = 15; //设置15秒
var secs_time = 0;
var t;
function TimeCount(tag) {
    t = window.setInterval(function () { sTimer(tag) }, 1000);
}
function sTimer(tag) {
    secs_time++;
    if (secs_time == wait_time) {
        clearInterval(t);
        secs_time = 0;
        document.getElementById(tag).disabled = "";
        document.getElementById(tag).value = "获取验证码";
    }
    else {
        document.getElementById(tag).value = (parseInt(wait_time) - parseInt(secs_time)) + "秒后重新获取";
    }
}
//同步表单
function tongBuData(userName, mobile, NameValue, mobileValue) {
    document.getElementById(userName).value = NameValue;
    document.getElementById(mobile).value = mobileValue;
}
//验证码状态函数
function GetCodeState(flag, tag1) {
    switch (flag) {
        case 1:
            AlertTip("验证码已经发出，请注意查收！", 'face-smile');
            document.getElementById(tag1).disabled = "disabled";
            TimeCount(tag1);
            break;
        case -2:
            AlertTip("提交次数过多", 'warning');
            break;
        case -3:
            AlertTip("验证码获取失败", 'error');
            break;
        default:
            break;
    }
}
//提交状态函数
function GetSubmitState(flag, uname) {
    switch (flag) {
        case 1:
            subok(uname);
            break;
        case 0:
            AlertTip("提交失败", 'error');
            break;
        case -1:
            AlertTip("所填信息不完整或填写错误", 'error');
            break;
        case -2:
            AlertTip("验证码输入错误", 'error');
            break;
        default:
            break;
    }
}
//获取验证码
function commonGetCode(pic,mobile, uname, Tag) {
    HrTj2014.PageFuncs.RefreshImgVcode(pic, mobile, uname, function (objimage) {
        $("#" + pic).show();
        TimeCount(Tag);
    }, function () {
        AlertTip("验证码获取失败！", "warning");

    }, 134, 60);
}
//提交函数
function commonSubmit(mobile, vcode, uname) {
    HrTj2014.PageFuncs.Sumbit(mobile, vcode, uname, "", null, function (args, scriptTag, hrtjSumbitResult) {
        GetSubmitState(hrtjSumbitResult.state);
    }, function (args, scriptTag, hrtjSumbitResult) {
        GetSubmitState(hrtjSumbitResult.state,uname);
        document.getElementsByTagName('head')[0].removeChild(scriptTag);
    },1,2);
}









