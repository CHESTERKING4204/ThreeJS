import * as THREE from 'three';

//Creating the scean
const scene = new  THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//Creating the Camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000); //(Field Of View (FOV),,near,far)
camera.position.z = 5;

//Create an object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color:'#468585',emissive:'#468585'});

const cube = new THREE.Mesh(geometry,material);
scene.add(cube);

//Add the light
const light = new THREE.DirectionalLight(0x9CDBA6,10); //(Color of light,Intensity)
light.position.set(1,1,1);
scene.add(light);

//Adding the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//Animate the scene
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
animate();