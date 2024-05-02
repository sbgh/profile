import Mont from '../assets/pexels-eberhardgross-1062249.jpg';
import $ from 'jquery';

const Cube = () => {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const makeCubes = async (type) => {
        var cubes = []

        function setupSwarmElements(elementId, n) {

            const duration = 15000
            const rotations = 10

            for (let j = 0; j < n; j++) {
                var pEle = $("#cubeStore");
                var eleObj = $("#cube").clone().appendTo(pEle)
                eleObj.removeAttr("id");
                eleObj.attr("id", "cube_" + j);
                eleObj.addClass("cube-clone")
                if (j !== 0) {
                    // eleObj.find(".heart").remove();
                }

                var r1 = (Math.random())
                var r2 = (Math.random())
                var r3 = (Math.random())

                var r4 = (Math.random())
                var r5 = (Math.random())
                var r6 = (Math.random())

                var r7 = (Math.random())
                var r8 = (Math.random())
                var r9 = (Math.random())
                var startTime = new Date();

                var colorpicks = ["rgba(54,122,224,", "rgba(224,156,54,", "rgba(224,71,54,", "rgba(122,224,54,", "rgba(224,54,122,"];
                var rndInt = getRandomInt(0, 4)

                cubes.push({ "id": "cube_" + j, "r1": r1, "r2": r2, "r3": r3, "r4": r4, "r5": r5, "r6": r6, "r7": r7, "r8": r8, "r9": r9, "color": colorpicks[rndInt], "startTime": startTime, "duration": duration, "rotations": rotations })
            }

            setTimeout(function () {
                window.requestAnimationFrame(moveElements)
            }, 200)
        }

        function moveElements(timeStamp) {
            frame++;
            var thisFrameLag = frameLag - 16;
            if (thisFrameLag < 0) {
                thisFrameLag = 0
            }
            if (thisFrameLag > 100) {
                thisFrameLag = 100
            }
            if (frame > 3 + (thisFrameLag)) {
                //console.log(frame, thisFrameLag);
                frame = 0;

                for (let i in cubes) {
                    var cube = cubes[i]
                    const timeRatio = ((new Date().getTime() - new Date(cube.startTime).getTime()) / cube.duration)
                    const opacityCurve = (Math.sin(Math.PI * (timeRatio * 2 - .5)) + 1) / 2

                    // console.log(timeRatio, Math.sin(Math.PI * (timeRatio * 2 - .5)), opacityCurve)

                    let r1 = cube.r1 + (cube.r4 - cube.r1) * timeRatio;
                    let r2 = cube.r2 + (cube.r5 - cube.r2) * timeRatio;
                    let r3 = cube.r3 + (cube.r6 - cube.r3) * timeRatio;
                    let r7 = cube.r7
                    let r8 = cube.r8
                    let r9 = cube.r9

                    const rotations = cube.rotations * 360 * r3
                    // let scrollHeight = $("#main").scrollTop() * (1 - r3);

                    var eleObj = $("#" + cube.id)
                    var eWidth = eleObj.parent().width() * 0.95;

                    var eHeight = $(window).height();
                    // eleObj.show();

                    eleObj.css({
                        "-webkit-backface-visibility": "initial",
                        // "transform": "translate(" + (r1 * eWidth).toString() + "px, " + (r2 * eHeight - eHeight / 2).toString() + "px) scale(" + (r3 * 2 + .1).toString() + ") rotate3d(" + (r7 * 2 - 1).toString() + ", " + (r8 * 2 - 1).toString() + ", " + (r9 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) ",
                        // "transform": "translate(" + (r1 * eWidth).toString() + "px, " + (r2 * eHeight - eHeight / 2).toString() + "px) scale(" + (r3).toString() + ") rotate3d(" + (r7 * 2 - 1).toString() + ", " + (r8 * 2 - 1).toString() + ", " + (r9 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) ",
                        "transform": "translate(" + (r1 * eWidth).toString() + "px, " + (r2 * eHeight).toString() + "px) scale(" + (r3).toString() + ") rotate3d(" + (r7 * 2 - 1).toString() + ", " + (r8 * 2 - 1).toString() + ", " + (r9 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) ",
                        // "transform": "translate(" + ((r1 * 2 - 1) * eWidth).toString() + "px, " + ((r2 * 2 - 1) * eHeight).toString() + "px) scale(" + (r3).toString() + ") rotate3d(" + (r7 * 2 - 1).toString() + ", " + (r8 * 2 - 1).toString() + ", " + (r9 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) ",

                        "transform-origin": "center"
                    });

                    eleObj.find(".cube-face").css(
                        {
                            "border-color": "rgba(0, 0, 0," + (opacityCurve / 8 * (r3)).toString() + ")",
                            "background-color": cube.color + (opacityCurve / 8 * (r3)).toString() + ")"
                        }
                    );
                    // eleObj.find(".heart").css(
                    //     {
                    //         "opacity": (r3 / 6).toString()
                    //     }
                    // )
                }

                frameLag = timeStamp - lastTimeStamp;
                lastTimeStamp = timeStamp;
                if ((new Date().getTime() - new Date(cube.startTime).getTime()) < cube.duration) {
                    window.requestAnimationFrame(moveElements);
                } else {
                    for (let i in cubes) {
                        var cube = cubes[i]
                        var eleObj = $("#" + cube.id)
                        // if( i == 0 ){
                        eleObj.remove()
                        // }
                    }
                    cubes = [];
                }
            } else {
                frameLag = timeStamp - lastTimeStamp;
                lastTimeStamp = timeStamp;
                window.requestAnimationFrame(moveElements);
            }
        }

        var frame = 0;
        var lastTimeStamp = new Date().getTime();
        var frameLag = 16;
        
        setupSwarmElements("cube", 20);
    }


    function grav() {

        $("#background").clone().insertAfter('#background').prop('id', 'backgroundGrav')
        $("#root").clone().appendTo("#backgroundGrav").prop('id', 'rootGrav')
        $("#rootGrav #main").prop('id', 'rootMain')

        $("#main").css({ color: "black" })

        var r1 = (Math.random())
        var r2 = (Math.random())
        var r3 = (Math.random())
        const rotations = 160;

        const eWidth = $(window).width();
        const eHeight = $(window).height();

        $("#background").css({
            "transition": "opacity 0s",
            "opacity": "0"
        });

        $("#backgroundGrav").css({
            "transition": "all 8s",
            "opacity": "0",
            "transform": 
                "translate(" + ((r1 - 0.5) * eWidth).toString() + "px, " + ((r2 - 0.5) * eHeight).toString() + "px) scale(" + (0).toString() + ") rotate3d(" + (r1 * 2 - 1).toString() + ", " + (r2 * 2 - 1).toString() + ", " + (r3 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) "
            // "transform-origin": "center"
        });
        $("#background").removeClass("background-change")

        setTimeout(function () {
            $('#backgroundGrav').remove()
        }, 6000)

    }

    function fadeBack() {
        $("#background").css({ 
            "transition": "opacity 8s",
            "opacity": ".7" 
        })
    }
    function sepChange() {
        $("#background").addClass("background-change")
    }


    function loop() {
        setTimeout(function () {
            makeCubes()
        }, 6000)

        setTimeout(function () {
            fadeBack()
        }, 22000)

        setTimeout(function () {
            sepChange()
        }, 30000)

        setTimeout(function () {
            grav()
        }, 40000)
    }
    loop()
    setInterval(loop, 60000)

    return (
        <div>
            <div id="cube-container"><div id="cube" className="cube">
                {/* <div className="heart"></div> */}
                <div className="cube-face  cube-face-front"></div>
                <div className="cube-face  cube-face-back"></div>
                <div className="cube-face  cube-face-left"></div>
                <div className="cube-face  cube-face-right"></div>
                <div className="cube-face  cube-face-top"></div>
                <div className="cube-face  cube-face-bottom"></div>
            </div></div>
        </div>
    )
}

export default Cube

