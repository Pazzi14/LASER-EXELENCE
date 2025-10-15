// futuristic-3d.js - Efeito 3D Futurista com Three.js (r128)

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se a biblioteca Three.js está carregada
    if (typeof THREE === 'undefined') {
        console.error("ERRO CRÍTICO: Three.js não foi carregado. Adicione a tag <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'></script> no seu HTML antes de futuristic-3d.js.");
        return;
    }

    // --- Configuração da Cena ---
    let scene, camera, renderer;
    let particles, particleCount = 2000;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function init() {
        // 1. Criar a Cena
        scene = new THREE.Scene();
        
        // Fundo preto para o efeito futurista
        scene.background = new THREE.Color(0x000000); 

        // 2. Criar a Câmera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;

        // 3. Criar o Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Adicionar o canvas 3D ao corpo da página (como primeiro elemento)
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '-1'; // Fica atrás de todo o conteúdo HTML/CSS
        document.body.appendChild(renderer.domElement);

        // 4. Criar as Partículas
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
            // Posição aleatória no espaço (-2000 a 2000)
            const x = Math.random() * 4000 - 2000;
            const y = Math.random() * 4000 - 2000;
            const z = Math.random() * 4000 - 2000;
            positions.push(x, y, z);

            // Cor aleatória, puxando para o azul/ciano futurista
            color.setHSL(0.5 + Math.random() * 0.2, 1, 0.5); 
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        particles = new THREE.Points(geometry, material);
        scene.add(particles);


        // --- Listeners de Eventos ---
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
    }

    // --- Funções de Evento ---

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) * 2;
        mouseY = (event.clientY - windowHalfY) * 2;
    }

    // --- Loop de Animação ---

    function animate() {
        requestAnimationFrame(animate);

        // Rotação da câmera para o efeito de paralaxe com o mouse
        camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 0.05 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        // Movimento das Partículas (Simulação de um campo de estrelas/hiperespaço)
        particles.rotation.z += 0.001;
        particles.rotation.x += 0.0005;
        
        renderer.render(scene, camera);
    }

    // Inicializa tudo
    init();
    animate();
});
