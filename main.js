import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.module.js"

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.00000001, 10000000000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let domelem = renderer.domElement

domelem.class="hello"
document.body.appendChild( domelem );

var geometry = new THREE.IcosahedronGeometry(5);
var material = new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, wireframe:true} );
var shape= new THREE.Mesh( geometry, material );

function rand_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function create_stars(stars){
    let geometry = new THREE.TetrahedronGeometry(0.5)
    for(var i=0; i<stars+1;i++){
        let material = new THREE.MeshBasicMaterial( {color:Math.random() * 0xffffff, wireframe:true})
        let shape = new THREE.Mesh(geometry,material)
        shape.position.set(rand_int(-150,150),rand_int(-150,150),rand_int(-150,150))
        shape.rotation.set(rand_int(-150,150),rand_int(-150,150),rand_int(-150,150))
        scene.add(shape)
    }
}

create_stars(200)
scene.add(shape)

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
        camera.position.z=(window.scrollY/window.innerHeight)*7.5+cameraStartPosition
        camera.rotation.z=(window.scrollY/window.innerHeight)*0.5+cameraStartPosition
    })

	renderer.render( scene, camera );
};
animate()

