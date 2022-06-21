import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.module.js"

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.001, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let domelem = renderer.domElement

domelem.class="hello"
document.body.appendChild( domelem );

var geometry = new THREE.IcosahedronGeometry( 2 );
var material = new THREE.MeshStandardMaterial( { color: 0xB026FF, wireframe:true} );
var shape= new THREE.Mesh( geometry, material );

var pointlight = new THREE.PointLight( 0xffffff)
pointlight.position.set(15,15,15)

var ambientlight = new THREE.AmbientLight( 0xfffffff)

scene.add(ambientlight, shape, pointlight)

let cameraStartPosition = 10

camera.position.z=(window.scrollY/window.innerHeight)+cameraStartPosition

var animate = function () {
	requestAnimationFrame( animate );

    document.addEventListener('mousemove',function(e){
        shape.rotation.x=e.clientY/525
        shape.rotation.y=e.clientX/525
    })

    document.addEventListener('scroll',function(e){
        camera.position.z=(window.scrollY/window.innerHeight)+cameraStartPosition
        console.log(window.scrollY/window.screenY)
    })

	renderer.render( scene, camera );
};

animate()

