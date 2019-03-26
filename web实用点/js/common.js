//用闭包形式来写，前面加;是防止跟其他js压缩时报错
;
(function(win) {
    // 开启严格模式
    "use strict";
    var commonTool = {
        //判断是否数字
        isNumber: function(str) {
            var n = new Number(str);
            if (!isNaN(n)) {
                return true;
            } else {
                return false;
            }
        },
        //判断是否对象
        isObj: function(obj) {
            if (typeof obj == "object") {
                return true;
            } else {
                return false;
            }
        },
        //判断是否为空
        emptyFun: function(obj) {
            var obj = obj;
            if (obj == "" || obj == null || obj == undefined || obj == "null" || obj == "undefined") {
                return true;
            } else {
                return false;
            }
        },
        //获取地址栏参数
        GetQueryString: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        getLocalTime: function(nS) {
            var now = new Date(nS);
            if (!now) {
                return 0;
            } else {
                var year = now.getFullYear(); //年
                var month = now.getMonth() + 1; //月
                var date = now.getDate(); //日
                var hour = now.getHours(); //时
                var minute = now.getMinutes(); //分
                var second = now.getSeconds(); //秒
                return year + "-" + month + "-" + date;
            }
        },
        //校验是否全由数字组成 
        isDigit: function(s) {
            var patrn = /^[0-9]{1,20}$/;
            if (!patrn.exec(s)) return false;
            return true;
        },
        //校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串 
        isRegisterUserName: function(s) {
            var patrn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
            if (!patrn.exec(s)) return false;
            return true;
        },
        //校验用户姓名：只能输入1-30个以字母开头的字串 
        isTrueName: function isTrueName(s) {
            var patrn = /^[a-zA-Z]{1,30}$/;
            if (!patrn.exec(s)) return false
            return true
        },
        //校验密码：只能输入6-20个字母、数字、下划线 
        isPasswd: function(s) {
            var patrn = /^(\w){6,20}$/;
            if (!patrn.exec(s)) return false;
            return true;
        },
        //校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-” 
        isTel: function(s) {
            var patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
            if (!patrn.exec(s)) return false;
            return true;
        },
        //校验手机号码：必须以数字开头，除数字外，可含有“-”
        isMobil: function(s) {
            var patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
            if (!patrn.exec(s)) return false;
            return true;
        },
        //校验邮政编码 
        isPostalCode: function(s) {
            var patrn = /^[a-zA-Z0-9 ]{3,12}$/;
            if (!patrn.exec(s)) return false;
            return true;
        },
        //校验搜索关键字 
        isSearch: function(s) {
            var patrn = /^[^`~!@#$%^&*()+=|\\\][\]\{\}:;\'\,.<>/?]{1}[^`~!@$%^&()+=|\\\][\]\{\}:;\'\,.<>?]{0,19}$/;
            if (!patrn.exec(s)) return false;
            return true;
        },
        //检测IP地址
        isIP: function(s) {
            var patrn = /^[0-9.]{1,20}$/;
            if (!patrn.exec(s)) return false;
            return true;
        }

    };

    //兼容CommonJs规范 
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = commonTool;
    };
    //兼容AMD/CMD规范
    if (typeof define === 'function') define(function() {
        return commonTool;
    });
    //注册全局变量，兼容直接使用script标签引入插件
    win.commonTool = commonTool;

})(window);