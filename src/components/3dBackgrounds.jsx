
import * as THREE from 'three';
import $ from 'jquery';

import { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import glbFile1 from '../assets/models/low_poly_moon.glb'
import glbFile2 from '../assets/models/low_poly_planet_earth.glb'
import { render } from 'react-dom';

function ThreeDBackgrounds() {
    const refContainer = useRef(null);
    useEffect(() => {
        // === THREE.JS CODE START ===

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const red = new THREE.Color("rgb(224, 54, 122)");
        const green = new THREE.Color("rgb(122, 224, 54)");
        const blue = new THREE.Color("rgb(54, 122, 224)");
        const yellow = new THREE.Color("rgb(224, 156, 54)");
        const white = new THREE.Color("rgb(255, 255, 255)");
        const colors = [red, green, blue, yellow]
        // const colors = [blue]

        var scene = new THREE.Scene();
        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        // const gridHelper = new THREE.GridHelper(10, 10);
        // scene.add(gridHelper);


        function setRenderSize() {

            var sceneWidth = document.getElementById('fullHeight').offsetWidth
            var sceneHeight = document.getElementById('fullHeight').offsetHeight

            renderer.setSize(sceneWidth, sceneHeight);
            camera.aspect = sceneWidth / sceneHeight;
            camera.updateProjectionMatrix();
            // console.log(sceneWidth, sceneHeight)

        }
        window.addEventListener('resize', setRenderSize, false);


        //Lights
        let light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(50, 50, 10);
        scene.add(light, new THREE.AmbientLight(0xffffff, .9));

        //Camera
        var camera = new THREE.PerspectiveCamera(50, 1, .1, 1000);
        // camera.updateProjectionMatrix();


        // let controls = new THREE.OrbitControls(camera, renderer.domElement);

        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        var cloneModels = []
        function setCloneColor(clone, colorInc) {
            clone.traverse((object) => {
                if (object.material) {
                    object.material = object.material.clone()
                    object.material.color = colors[colorInc]
                }
            });
        }
        function constructModels(num, gltf) {

            for (let i = 0; i < 20; i++) {
                clone = gltf.scene.clone()

                var cent = new THREE.Vector3();
                var size = new THREE.Vector3();
                var bbox = new THREE.Box3().setFromObject(clone);

                // const boxHelper = new THREE.Box3Helper(bbox, 0xffff00);
                // scene.add(boxHelper);

                bbox.getCenter(cent);
                bbox.getSize(size);

                //Rescale the object to normalized space
                var maxAxis = Math.max(size.x, size.y, size.z);

                //Now get the updated/scaled bounding box again..
                bbox.setFromObject(clone);
                bbox.getCenter(cent);
                bbox.getSize(size);

                var rSize = new THREE.Vector2();
                const renderSize = renderer.getSize(rSize)

                let ratio = renderSize.y / renderSize.x
                let z = Math.random() * -250
                let x = (Math.random() * 2 - 1) * (7 + -z / 25)
                let y = ((Math.random() * 2 - 1) * 5 * ratio - num * 20)

                clone.position.x = -cent.x + x;
                clone.position.y = -cent.y + y;
                clone.position.z = -cent.z + z;

                var axis = new THREE.Vector3(0, Math.random() * 3, 0).normalize();
                clone.rotateOnAxis(axis, Math.random() * 2);
                clone.myAxis = axis

                clone.rad = Math.random() * 2

                clone.mySpeed = (Math.random() * 2 - 1) / 100

                clone.num = num

                if (num == 0 && i == 0) {
                    clone.position.x = -1.0
                    clone.position.y = 9.7;
                    clone.position.z = 26;
                    clone.mySpeed = -.0002
                    clone.scale.multiplyScalar(1 / maxAxis);
                    setCloneColor(clone, 2)
                } else if (num == 1 && i == 0) {
                    clone.position.x = .8
                    clone.position.y = 9.3;
                    clone.position.z = 15;
                    clone.mySpeed = -.0008
                    setCloneColor(clone, 2)
                    clone.scale.multiplyScalar(1 / maxAxis);
                } else {
                    setCloneColor(clone, getRandomInt(0, colors.length - 1))
                    clone.scale.multiplyScalar((Math.random() * .3 - .15) + 1 / maxAxis);
                }

                scene.add(clone)

                cloneModels.push(clone)
            }
            if (!animateStarted) {
                animateStarted = true
                animate();
            }
        }

        var startDate = new Date()
        var skipCount = 0
        var animate = function () {
            requestAnimationFrame(animate);

            skipCount++
            if (skipCount < 2) return //animate every 2nd frame to reduce load

            skipCount = 0
            var zDuration = 25000 //ms
            var startZ = 300
            var endZ = 30
            var now = new Date();
            var timeDiff = Math.abs(now.getTime() - startDate.getTime());
            var easeToZero = 1 - Math.sin(Math.min(timeDiff / zDuration * Math.PI, Math.PI) / 2)

            var fHeight = document.getElementById('fullHeight').offsetHeight
            var position = document.getElementById('mainContent').scrollTop
            camera.position.y = -position / fHeight * 40 + 10

            //look down a bit
            var pi = Math.PI;
            camera.rotation.x = -24 * (pi / 180)

            camera.position.z = endZ + (easeToZero * startZ);

            for (let x in cloneModels) {
                let obj = cloneModels[x]

                if (obj) {
                    obj.rotateOnAxis(obj.myAxis, obj.mySpeed);
                }

                var distance = camera.position.distanceTo(obj.position);
                obj.traverse((object) => {
                    if (object.material) {
                        object.material.transparent = true
                        object.material.depthWrite = false
                        object.material.opacity = 1 - Math.min(distance / startZ, 1)
                    }
                });
            }

            renderer.render(scene, camera);

        };

        const loader = new GLTFLoader();
        var clone
        var animateStarted = false

        setTimeout(function () {
            setRenderSize()

            loader.load(glbFile1, constructModels.bind(null, 0), undefined, function (error) {
                console.error(error);
            });
            loader.load(glbFile2, constructModels.bind(null, 1), undefined, function (error) {
                console.error(error);
            });
            camera.lookAt(scene.position);
        }, 2000)

    }, []);
    return (
        <div id="threeBack" className='threeBack' ref={refContainer}></div>

    );
}

export default ThreeDBackgrounds
