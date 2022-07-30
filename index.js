function timeShow(){
    var timeNow = new Date();
    document.querySelector(".hours").textContent = timeNow.getHours();
    document.querySelector(".minutes").textContent = timeNow.getMinutes();
    document.querySelector(".seconds").textContent = timeNow.getSeconds();
    document.querySelector(".day").textContent = timeNow.getDate();
    document.querySelector(".month").textContent = timeNow.getMonth();
    document.querySelector(".year").textContent = timeNow.getFullYear();
}
timeShow();
setInterval(function(){
    timeShow();
}, 1000)
