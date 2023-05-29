let scene, camera, renderer, circle, skeleton, particle;
function init() {
  scene = new THREE.Scene();
  let e = window.innerWidth / window.innerHeight;
  ((camera = new THREE.PerspectiveCamera(75, e, 0.1, 1e4)).position.z = 500),
    scene.add(camera),
    (renderer = new THREE.WebGLRenderer({
      antialias: !0,
      alpha: !0,
    })).setPixelRatio(window.devicePixelRatio),
    renderer.setSize(window.innerWidth, window.innerHeight),
    (renderer.autoClear = !1),
    renderer.setClearColor(0, 0),
    document.getElementById("canvas").appendChild(renderer.domElement),
    (circle = new THREE.Object3D()),
    (skeleton = new THREE.Object3D()),
    (particle = new THREE.Object3D()),
    scene.add(circle),
    scene.add(skeleton),
    scene.add(particle);
  let n = new THREE.TetrahedronGeometry(2, 1),
    t = new THREE.SphereGeometry(7, 32, 32),
    r = new THREE.IcosahedronGeometry(15, 4),
    i = new THREE.MeshPhongMaterial({
      color: 2697513,
      shading: THREE.FLatShading,
    }),
    a = new THREE.MeshPhongMaterial({
      color: 4868682,
      side: THREE.DoubleSide,
      wireframe: !0,
    }),
    o = new THREE.MeshPhongMaterial({
      color: 2697513,
      side: THREE.DoubleSide,
      wireframe: !0,
    }),
    l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? 1e3
      : 1.2e3;
  for (let c = 0; c < l; c++) {
    let d = new THREE.Mesh(n, o);
    d.position.set(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    ),
      d.position.multiplyScalar(90 + 900 * Math.random()),
      d.rotation.set(3 * Math.random(), 3 * Math.random(), 3 * Math.random()),
      particle.add(d);
  }
  let s = new THREE.Mesh(t, i);
  (s.scale.x = s.scale.y = s.scale.z = 16), circle.add(s);
  let $ = new THREE.Mesh(r, a);
  ($.scale.x = $.scale.y = $.scale.z = 11), skeleton.add($);
  let _ = new THREE.AmbientLight(13948116);
  scene.add(_);
  let h = [];
  (h[0] = new THREE.DirectionalLight(16777215, 1)),
    h[0].position.set(1, 0, 0),
    (h[1] = new THREE.DirectionalLight(11460838, 1)),
    h[1].position.set(0.75, 1, 0.5),
    (h[2] = new THREE.DirectionalLight(14277490, 1)),
    h[2].position.set(-0.75, -1, 0.5),
    scene.add(h[0]),
    scene.add(h[1]),
    scene.add(h[2]),
    animate(),
    window.addEventListener("resize", onWindowResize, !1);
}
function animate() {
  requestAnimationFrame(animate),
    (particle.rotation.x += 0),
    (particle.rotation.y -= 0.003),
    (particle.rotation.z -= 0.0015),
    (circle.rotation.x -= 0.002),
    (circle.rotation.y -= 0.002),
    (skeleton.rotation.x += 0.003),
    (skeleton.rotation.y += 0.003),
    renderer.render(scene, camera);
}
function onWindowResize() {
  (camera.aspect = window.innerWidth / window.innerHeight),
    camera.updateProjectionMatrix(),
    renderer.setSize(window.innerWidth, window.innerHeight);
}
(window.onload = init),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".work-text"),
      n = document.querySelector(".contact-text");
    function t(e, n) {
      let t = e.querySelectorAll(".letter");
      for (let r = 0; r < t.length; r++)
        t[r].style.animationDelay = `${n + 0.1 * r}s`;
    }
    t(e, 2.2), t(n, 2.2);
  });


  /* Set width of all animated text to match container */
let parent = document.querySelectorAll('.animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};

// Cards

$('.buy').click(function(){
  $('.bottom').addClass("clicked");
});

$('.remove').click(function(){
  $('.bottom').removeClass("clicked");
});


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Black Mirror

function addAnimationToElement(element, animationClass) {
  if (isElementInViewport(element) && !element.classList.contains(animationClass)) {
    element.classList.add(animationClass);
  }
}

const disciplineElement = document.querySelector('h3');
const animationClass = 'animate-shake';

document.addEventListener('DOMContentLoaded', function() {
  addAnimationToElement(disciplineElement, animationClass);
});

window.addEventListener('scroll', function() {
  addAnimationToElement(disciplineElement, animationClass);
});


