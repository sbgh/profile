

import $ from 'jquery'

const mainTitle = async () => {

    function setupSpinTitle() {

        const titleTxt = "ezStack Systems"
        const titleArr = titleTxt.split("")

        const subTitleTxt = "IT Services and Solutions"
        const subTitleArr = subTitleTxt.split("")

        const btnRowArr = ["What We Do", "About Us", "Contact Us"]
        const eleScrollArr = ["mainInfo", "mainInfo", "mainInfo"]

        for (var CharIn in titleArr) {
            titleArr[CharIn] = titleArr[CharIn] === " " ? "&nbsp;" : titleArr[CharIn]
            const chrHTML = "<div class='mainChr' id='mainChr" + CharIn + "'>" + titleArr[CharIn] + "</div>"
            const charEle = $($.parseHTML(chrHTML))
            $("#topTitle").append(charEle)

            var r1 = (Math.random())
            var r2 = (Math.random())
            var r3 = (Math.random())

            const eWidth = $(window).width();
            const eHeight = $(window).height();
            const rotations = r2 * 720 + 360;
            $("#mainChr" + CharIn).css({
                "transform":
                    "perspective(1000px) translate3d(" + ((r1 - 0.5) * eWidth * 2).toString() + "px, " + ((r2 - 0.5) * eHeight * 2).toString() + "px, " + (r3 * 10000 - 5000).toString() + "px) rotate3d(" + (r1 * 2 - 1).toString() + ", " + (r2 * 2 - 1).toString() + ", " + (r3 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) ",
                "text-shadow": "#33333300 -1px -1px 14px"
            })
        }

        for (var CharIn in subTitleArr) {
            subTitleArr[CharIn] = subTitleArr[CharIn] === " " ? "&nbsp;" : subTitleArr[CharIn]
            const chrHTML = "<div class='raiseChr' id='raiseChr" + CharIn + "'>" + subTitleArr[CharIn] + "</div>"
            const charEle = $($.parseHTML(chrHTML))

            $("#subTitle").append(charEle)
            $("#raiseChr" + CharIn).css({
                "transform":
                    "perspective(1000px) translate3d(" + (0).toString() + "px, " + (0).toString() + "px, " + (-10000).toString() + "px)  ",
                "text-shadow": "#33333300 -1px -1px 7px"
            })
        }

        for (var ItemIn in btnRowArr) {

            const itemHTML = "<div class='mainBtn' id='mainBtn" + ItemIn + "'>" + btnRowArr[ItemIn] + "</div>"
            const itemEle = $($.parseHTML(itemHTML))

            $("#btnRow").append(itemEle)

        }

        setTimeout(function () {
            for (var CharIn in titleArr) {
                var r3 = (Math.random())
                var delay = (r3 * 2000).toFixed(2) + "ms"
                var longDelay = (r3 * 2000 + 2000).toFixed(2) + "ms"
                $("#mainChr" + CharIn).css({
                    "transition-delay": delay,
                    "color": "#000000ff",
                    "transition": "color 2s " + delay + ", transform 2s ease-out " + delay + ", text-shadow 2s ease-out " + longDelay,
                    "transform": "perspective(1000px)  translate3d(0 , 0, 0) rotate3d(0, 0, 0 , 0deg) scale(1)",
                    "text-shadow": "#333333c2 -1px -1px 14px"
                })
            }
        }, 500)

        setTimeout(function () {
            for (var CharIn in subTitleArr) {
                var r3 = (Math.random())
                var delay = (CharIn * 40).toFixed(2) + "ms"
                $("#raiseChr" + CharIn).css({
                    "transition-delay": delay,
                    "color": "#000000ff",
                    "transition": "color 1s " + delay + ", transform 1s ease-out " + delay + ", scale 1s ease-out " + (delay),
                    "transform": "perspective(1000px)  translate3d(0 , 0, 0) rotate3d(0, 0, 0 , 0deg) scale(1)",
                    "text-shadow": "#333333c2 -1px -1px 7px"
                })
            }
        }, 4500)

        setTimeout(function () {
            for (var ItemIn in btnRowArr) {
                var delay = (100 * ItemIn).toString() + "ms"
                $("#mainBtn" + ItemIn).css({
                    "transition": "transform .3s ease-out " + delay,
                    "transform": "translate(0 , 0)"
                })

                $("#mainBtn" + ItemIn).on("click", function () {

                    $("#mainContent").animate({
                        scrollTop: $("#" + eleScrollArr[ItemIn]).offset().top
                    }, 100);
                });
            }
        }, 7000)

    }
    setupSpinTitle()
}

export { mainTitle }

