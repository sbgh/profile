
import * as THREE from 'three';

import { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import glbFile from '../assets/models/clouds.glb'

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

        //Lights
        let light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(3, 10, -10);
        scene.add(light, new THREE.AmbientLight(0xffffff, .8));

        //Camera
        var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
        // camera.position.set(0, 0, 200) //.setLength(10);
        camera.lookAt(scene.position);
        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight * 2);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        
        var cloud
        loader.load(glbFile, function (gltf) {

            var cloudModels = []
            for (let i = 0; i < 50; i++) {
                cloud = gltf.scene.clone()
                cloud.traverse((object) => {

                    if (object.material) {
                        object.material = object.material.clone()
                        object.material.color = colors[getRandomInt(0, colors.length-1)]

                    }
                });

                var cent = new THREE.Vector3();
                var size = new THREE.Vector3();
                var bbox = new THREE.Box3().setFromObject(cloud);

                // const boxHelper = new THREE.Box3Helper(bbox, 0xffff00);
                // scene.add(boxHelper);

                bbox.getCenter(cent);
                bbox.getSize(size);

                //Rescale the object to normalized space
                var maxAxis = Math.max(size.x, size.y, size.z);
                cloud.scale.multiplyScalar(2.0 / maxAxis);

                //Now get the updated/scaled bounding box again..
                bbox.setFromObject(cloud);
                bbox.getCenter(cent);
                bbox.getSize(size);

                let z = Math.random() * -100
                let x = Math.random() * (20 + -z) - (20 + -z)/2
                let y = Math.random() * 30 - 15

                cloud.position.x = -cent.x + x;
                cloud.position.y = -cent.y + y;
                cloud.position.z = -cent.z + z;

                var axis = new THREE.Vector3(Math.random()/30, Math.random()*3, Math.random()/30).normalize();
                cloud.rotateOnAxis(axis, Math.random() * 2);
                cloud.myAxis = axis

                cloud.rad = Math.random() * 2

                cloud.mySpeed =(Math.random()*2-1) /200
                scene.add(cloud)

                cloudModels.push(cloud)

                // const gridHelper = new THREE.GridHelper(10, 10);
                // scene.add(gridHelper);
            }


            var startDate = new Date(); 
            
            var animate = function () {
                requestAnimationFrame(animate);

                var zDuration = 20000 //ms
                var startZ = 100
                var endZ = 10
                var now = new Date(); 
                var timeDiff = Math.abs(now.getTime() - startDate.getTime()); 
                var easeToZero = 1 - Math.sin(Math.min(timeDiff/zDuration*Math.PI,Math.PI) / 2)

                var position = document.getElementById('mainContent').scrollTop
                camera.position.y = -position / 60

                // camera.position.z  = timeDiff >= zDuration ? camera.position.z = endZ : camera.position.z = endZ + (easeToZero*startZ);
                camera.position.z = endZ + (easeToZero*startZ);
                
                for (let x in cloudModels) {
                    let obj = cloudModels[x]

                    if (obj) {
                        obj.rotateOnAxis(obj.myAxis, obj.mySpeed);
                    }

                    var distance = camera.position.distanceTo( obj.position );
                    obj.traverse((object) => {
                        if (object.material) {
                            object.material.transparent = true
                            object.material.depthWrite = false
                            object.material.opacity = .6 - Math.min(distance/startZ, 1) * .6
                        }
                    });
                }


                renderer.render(scene, camera);
            };
            animate();

            function onWindowResize() {

                renderer.setSize(innerWidth, innerHeight + 100);
                camera.aspect = innerWidth / (innerHeight + 100);
                camera.updateProjectionMatrix();

            }
            window.addEventListener('resize', onWindowResize, false);


        }, undefined, function (error) {

            console.error(error);

        });



    }, []);
    return (
        <div id="threeBack" className='threeBack' ref={refContainer}></div>

    );
}

export default ThreeDBackgrounds
