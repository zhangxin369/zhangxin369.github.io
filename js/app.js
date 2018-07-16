/* 微信网页自带 触屏事件
function load() {

    document.addEventListener('touchstart', touch, false);
    document.addEventListener('touchmove', touch, false);
    document.addEventListener('touchend', touch, false);

    function touch(event) {
        var event = event || window.event;

        var oInp = document.getElementById("inp");
        var distance, clientX_start, clientX_end,
            minRange = 10;
        this.clientX_start;
        this.direction;
        this.distance;

        this.callbackFun = function () {
            if (this.direction == 'ltr') {
                console.log('从左往右');
            }
            else {
                console.log('从右往左');
            }
            if( Math.abs(this.distance)<400 ){
                document.querySelector('body').style = "transform: translateX(0px)";
            }else{
                window.history.go(-1);
            }
        }
        switch (event.type) {
            case "touchstart":
                clientX_start = event.touches[0].clientX;
                this.clientX_start = clientX_start;
                break;
            case "touchend":
                this.callbackFun();
                break;
            case "touchmove":
                //event.preventDefault(); 屏蔽默认事件

                clientX_end = event.changedTouches[0].clientX;
                //判断移动的方向
                this.distance = clientX_end - this.clientX_start;
                if (this.clientX_start + minRange < clientX_end) {
                    this.direction = 'ltr';
                }
                else if (this.clientX_start - minRange > clientX_end) {
                    this.direction = 'rtl';
                }
               
                document.querySelector('body').style = "transform: translateX("+this.distance+"px)";
                break;
        }
        
    }
}
window.addEventListener('load', load, false);
*/



