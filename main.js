import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.module.js"

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 1000, window.innerWidth/window.innerHeight, 0.000000000001, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let domelem = renderer.domElement

domelem.class="hello"
document.body.appendChild( domelem );

var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshBasicMaterial( { color: 0xC8A2C8 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;

var animate = function () {
	requestAnimationFrame( animate );

    document.addEventListener('mousemove',function(e){
        cube.rotation.x=e.clientY/575
        cube.rotation.y=e.clientX/575
    })

	renderer.render( scene, camera );
};

animate()