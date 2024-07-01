

import $ from 'jquery'

const spinTitle = async () => {

        $("#mainTitle").append("<div id='spinTitleContain'></div>")
        function setupSpinTitle() {
            const titleTxt = "ezStack Systems"
            const titleArr = titleTxt.split("")
            for (var CharIn in titleArr) {
                titleArr[CharIn] = titleArr[CharIn] === " " ? "&nbsp;" : titleArr[CharIn]
                const chrHTML = "<div class='spinChr' id='spinChr" + CharIn + "'>" + titleArr[CharIn] + "</div>"
                const charEle = $($.parseHTML(chrHTML))
                $("#spinTitleContain").append(charEle)

                var r1 = (Math.random())
                var r2 = (Math.random())
                var r3 = (Math.random())

                const eWidth = $(window).width();
                const eHeight = $(window).height();
                const rotations = r2 * 720 + 360;
                $("#spinChr" + CharIn).css({
                    "transform":
                    // "perspective(500px) translate3d(" + ((r1 - 0.5) * eWidth * 2).toString() + "px, " +((r2 - 0.5) * eHeight * 2).toString() + "px, " + (-r3 * eHeight+500).toString() + "px) scale(" + (0).toString() + ") rotate3d(" + (r1 * 2 - 1).toString() + ", " + (r2 * 2 - 1).toString() + ", " + (r3 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) "
                    "perspective(1000px) translate3d(" + ((r1 - 0.5) * eWidth * 2).toString() + "px, " +((r2 - 0.5) * eHeight * 2).toString() + "px, " + (r3 * 10000 - 5000).toString() + "px) rotate3d(" + (r1 * 2 - 1).toString() + ", " + (r2 * 2 - 1).toString() + ", " + (r3 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) "
                })
            }

            setTimeout(function () {
                for (var CharIn in titleArr) {
                    var r3 = (Math.random())
                    var delay = (r3 * 2000).toFixed(2) + "ms"
                    $("#spinChr" + CharIn).css({
                        "transition-delay": delay,
                        "color": "#000000ff",
                        "transition": "color 2s " + delay + ", transform 2s ease-out " + delay + ", scale 2s ease-out " + delay,
                        "transform": "perspective(1000px)  translate3d(0 , 0, 0) rotate3d(0, 0, 0 , 0deg) scale(1)"
                    })
                }
            }, 500)


        }
        setupSpinTitle()
}

export { spinTitle }

