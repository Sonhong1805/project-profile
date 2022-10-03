window.onscroll = myFunction;

// function myFunction() {
//     console.log(document.documentElement.scrollTop.toFixed())

// }
function myFunction() {
    if (document.documentElement.scrollTop.toFixed() > 300 && document.documentElement.scrollTop.toFixed() < 1880) {

        let listAboutNumber = document.querySelectorAll('.about_number');
        listAboutNumber.forEach(item => {
            if (!item.classList.contains("running")) {
                item.classList.add("running");
                let valueDisplays1 = document.querySelectorAll(".about_pts-end1");
                let interval1 = 5000;
                valueDisplays1.forEach((valueDisplay1) => {
                    let startValue1 = 0;
                    let endValue1 = parseInt(valueDisplay1.getAttribute("data-val"));
                    let duration1 = Math.floor(interval1 / endValue1);
                    let counter1 = setInterval(function() {
                        startValue1 += 1;
                        valueDisplay1.textContent = startValue1;
                        if (startValue1 == endValue1) {
                            clearInterval(counter1);
                        }
                        console.log(startValue1);
                    }, duration1);
                });

                let valueDisplays2 = document.querySelectorAll(".about_pts-end2");
                let interval2 = 5000;
                valueDisplays2.forEach((valueDisplay2) => {
                    let startValue2 = 0;
                    let endValue2 = parseInt(valueDisplay2.getAttribute("data-val"));
                    let duration2 = Math.floor(interval2 / endValue2);
                    let counter2 = setInterval(function() {
                        startValue2 += 1;
                        valueDisplay2.textContent = startValue2;
                        if (startValue2 == endValue2) {
                            clearInterval(counter2);
                        }
                    }, duration2);
                });

                let valueDisplays3 = document.querySelectorAll(".about_pts-end3");
                let interval3 = 5000;
                valueDisplays3.forEach((valueDisplay3) => {
                    let startValue3 = 0;
                    let endValue3 = parseInt(valueDisplay3.getAttribute("data-val"));
                    let duration3 = Math.floor(interval3 / endValue3);
                    let counter3 = setInterval(function() {
                        startValue3 += 1;
                        valueDisplay3.textContent = startValue3;
                        if (startValue3 == endValue3) {
                            clearInterval(counter3);
                        }
                    }, duration3);
                });
            }
        })


        document.getElementById("myLineCenter").className = "line-center";
        document.getElementById("myLineStart").className = "line-start";
        document.getElementById("myLineEnd").className = "line-end";
    } else {
        document.getElementById("myLineStart").className = "";
        document.getElementById("myLineCenter").className = "";
        document.getElementById("myLineEnd").className = "";
        let listAboutNumber = document.querySelectorAll('.about_number');
        listAboutNumber.forEach(item => {
            item.classList.remove("running")
        })
    }

}


const list = document.querySelectorAll('.about_animation')
var index = 0

setInterval(() => {
    list.forEach((e) => {
        e.classList.remove('change-properties')
    })
    list[index].classList.add('change-properties')
    index++
    if (index == list.length) {
        index = 0;
    }
}, 200)






var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});