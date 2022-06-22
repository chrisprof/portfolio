import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.module.js"

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.001, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let domelem = renderer.domElement

domelem.class="hello"
document.body.appendChild( domelem );

var geometry = new THREE.IcosahedronGeometry( 2 );
var material = new THREE.MeshStandardMaterial( { color: Math.random() * 0xffffff, wireframe:true} );
var shape= new THREE.Mesh( geometry, material );

function rand_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function create_stars(stars){
    for(var i=0; i<stars+1;i++){
        let geometry = new THREE.TetrahedronGeometry( 0.1, 3)
        let material = new THREE.MeshBasicMaterial( {color:Math.random() * 0xffffff})
        let shape = new THREE.Mesh(geometry,material)
        shape.position.set(rand_int(-20,20),rand_int(-20,20),rand_int(-20,20))
        scene.add(shape)
    }
}

create_stars(50)
console.log(rand_int(10))

var pointlight = new THREE.PointLight( 0xffffff)
pointlight.position.set(15,15,15)

var ambientlight = new THREE.AmbientLight( 0xffffff)

scene.add(ambientlight, shape, pointlight)

let cameraStartPosition = 10

camera.position.z=(window.scrollY/window.innerHeight)+cameraStartPosition
camera.rotation.z=(window.scrollY/window.innerHeight)*2+cameraStartPosition

var animate = function () {
	requestAnimationFrame( animate );

    document.addEventListener('mousemove',function(e){
        shape.rotation.x=e.clientY/525
        shape.rotation.y=e.clientX/525
    })

    document.addEventListener('scroll',function(e){
        camera.position.z=(window.scrollY/window.innerHeight)*2+cameraStartPosition
        camera.rotation.z=(window.scrollY/window.innerHeight)*1.2+cameraStartPosition
        console.log(window.scrollY/window.innerHeight)
    })

	renderer.render( scene, camera );
};
animate()

