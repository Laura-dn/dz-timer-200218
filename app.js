function whatBtn(ev) {
    let clickBtn = ev.target.id,
        tablo = document.querySelector("#tablo");
    
    switch(clickBtn) {
        case "start":
            if(timerId === undefined) {
                timerId = setInterval(function() {
                    tablo.innerHTML = tablo.innerHTML * 1 + 1;
                }, 1000);
            }
            break;
        case "stop":
            clearInterval(timerId);
            timerId = undefined;
            tablo.innerHTML = 0;
            break;
        case "pause":
            if(timerId !== undefined) {
                clearInterval(timerId);
                timerId = undefined;
            }
            break;
        default:
            console.log("Упс! Что-то пошло не так. :(");
            break;
    }
}

// проходим for по всем кнопкам и вешаем обработчик событий
let DOMBtn = document.querySelectorAll("button"),
    timerId;

for(let i = 0; i < DOMBtn.length; i++) {
    DOMBtn[i].addEventListener("click", whatBtn);
}