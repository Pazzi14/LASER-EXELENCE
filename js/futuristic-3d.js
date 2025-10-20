// futuristic-3d.js - Efeito 3D Futurista com Three.js (r128)

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se a biblioteca Three.js está disponível
    if (typeof THREE === 'undefined') {
        console.warn("Three.js não foi carregado. O efeito 3D não será exibido.");
        return;
    }

    let scene, camera, renderer;
    let particles, particleCount = 2000;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000); 

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false }); 
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Z-INDEX CRÍTICO para o fundo
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '-1'; 
        document.body.appendChild(renderer.domElement);

        // Configuração das Partículas
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const color = new THREE.Color();

        const material = new THREE.PointsMaterial({ 
            size: 5, 
            vertexColors: true, 
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.7 
        });

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * 4000 - 2000;
            const y = Math.random() * 4000 - 2000;
            const z = Math.random() * 4000 - 2000;
            positions.push(x, y, z);
            // Cor azul/ciano futurista
            color.setHSL(0.5 + Math.random() * 0.2, 1, 0.5); 
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) * 0.5; 
        mouseY = (event.clientY - windowHalfY) * 0.5;
    }

    function animate() {
        requestAnimationFrame(animate);

        camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 0.05 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        particles.rotation.z += 0.001;
        particles.rotation.x += 0.0005;
        
        renderer.render(scene, camera);
    }

    init();
    animate();
});
