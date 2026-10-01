import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Maximize2, Sparkles, Sun, Moon, Eye } from 'lucide-react';

export default function Arena3DCanvas() {
  const mountRef = useRef(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [nightMode, setNightMode] = useState(true);

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const reqIdRef = useRef(null);
  const autoRotateRef = useRef(isAutoRotating);

  useEffect(() => {
    autoRotateRef.current = isAutoRotating;
  }, [isAutoRotating]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    // 1. Scene setup with deep futuristic night fog (purple/navy)
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const fogColor = nightMode ? 0x070a14 : 0xcbd5e1;
    scene.fog = new THREE.FogExp2(fogColor, 0.025);

    // 2. Camera setup - dramatic elevated top-three-quarters angle like reference image
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 120);
    camera.position.set(0, 10.5, 16.5);
    camera.lookAt(0, 0.5, 0);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // -------------------------------------------------------------
    // BUILD FUTURISTIC OVAL STADIUM (MATCHING REFERENCE IMAGE)
    // -------------------------------------------------------------
    const arenaGroup = new THREE.Group();
    scene.add(arenaGroup);

    // --- A. FUTURISTIC CITY SKYLINE BACKGROUND ---
    const cityGroup = new THREE.Group();
    const bldgCount = 45;
    const cityRadius = 26;

    for (let i = 0; i < bldgCount; i++) {
      const angle = (i / bldgCount) * Math.PI * 1.4 - Math.PI * 0.7;
      const dist = cityRadius + (Math.random() - 0.5) * 6;
      const bH = 4 + Math.random() * 9;
      const bW = 1.2 + Math.random() * 1.8;
      const bD = 1.2 + Math.random() * 1.8;

      const bGeo = new THREE.BoxGeometry(bW, bH, bD);
      const isGlow = Math.random() > 0.4;
      const bMat = new THREE.MeshStandardMaterial({
        color: nightMode ? (isGlow ? 0x1e1b4b : 0x0f172a) : 0x475569,
        roughness: 0.3,
        metalness: 0.8,
        emissive: nightMode ? (isGlow ? (i % 2 === 0 ? 0x38bdf8 : 0xa855f7) : 0x000000) : 0x000000,
        emissiveIntensity: nightMode ? (isGlow ? 0.35 : 0) : 0,
      });

      const bMesh = new THREE.Mesh(bGeo, bMat);
      bMesh.position.set(Math.sin(angle) * dist, bH / 2 - 2, Math.cos(angle) * dist - 5);
      cityGroup.add(bMesh);
    }
    arenaGroup.add(cityGroup);

    // --- B. OVAL STADIUM BASE & LANDSCAPE ---
    // Outer Ground Podium
    const podiumGeo = new THREE.CylinderGeometry(13.5, 14.5, 0.6, 64);
    podiumGeo.scale(1.35, 1, 1); // Oval scale factor
    const podiumMat = new THREE.MeshStandardMaterial({
      color: nightMode ? 0x090d16 : 0x334155,
      roughness: 0.7,
      metalness: 0.3,
    });
    const podiumMesh = new THREE.Mesh(podiumGeo, podiumMat);
    podiumMesh.position.y = -0.3;
    podiumMesh.receiveShadow = true;
    arenaGroup.add(podiumMesh);

    // Ground Surrounding Grid Lines (Neon City Base)
    const gridHelper = new THREE.GridHelper(36, 36, nightMode ? 0x38bdf8 : 0x94a3b8, nightMode ? 0x1e1b4b : 0xe2e8f0);
    gridHelper.position.y = -0.01;
    arenaGroup.add(gridHelper);

    // --- C. STADIUM EXTERNAL WALL TIERS ---
    // Outer Facade Tier 1 (Bottom Shell)
    const wall1Geo = new THREE.CylinderGeometry(10.5, 11.2, 1.4, 64, 1, true);
    wall1Geo.scale(1.35, 1, 1);
    const wall1Mat = new THREE.MeshStandardMaterial({
      color: nightMode ? 0x0f172a : 0x64748b,
      roughness: 0.25,
      metalness: 0.85,
      side: THREE.DoubleSide,
    });
    const wall1 = new THREE.Mesh(wall1Geo, wall1Mat);
    wall1.position.y = 0.7;
    arenaGroup.add(wall1);

    // Outer Facade Tier 2 (Middle Shell)
    const wall2Geo = new THREE.CylinderGeometry(9.6, 10.4, 1.5, 64, 1, true);
    wall2Geo.scale(1.35, 1, 1);
    const wall2Mat = new THREE.MeshStandardMaterial({
      color: nightMode ? 0x1e293b : 0x475569,
      roughness: 0.2,
      metalness: 0.9,
      side: THREE.DoubleSide,
    });
    const wall2 = new THREE.Mesh(wall2Geo, wall2Mat);
    wall2.position.y = 2.0;
    arenaGroup.add(wall2);

    // --- D. RADIAL ROOF CANOPY & BEAMS (LIKE REFERENCE IMAGE) ---
    // Outer Roof Ring Frame
    const roofOuterGeo = new THREE.CylinderGeometry(9.0, 9.6, 0.8, 64, 1, true);
    roofOuterGeo.scale(1.35, 1, 1);
    const roofOuterMat = new THREE.MeshStandardMaterial({
      color: nightMode ? 0x0f172a : 0x334155,
      metalness: 0.95,
      roughness: 0.15,
      side: THREE.DoubleSide,
    });
    const roofOuter = new THREE.Mesh(roofOuterGeo, roofOuterMat);
    roofOuter.position.y = 3.0;
    arenaGroup.add(roofOuter);

    // Inner Oval Aperture Rim
    const roofInnerGeo = new THREE.CylinderGeometry(5.2, 5.2, 0.4, 64, 1, true);
    roofInnerGeo.scale(1.35, 1, 1);
    const roofInnerMat = new THREE.MeshBasicMaterial({
      color: nightMode ? 0x38bdf8 : 0x2563eb,
      side: THREE.DoubleSide,
    });
    const roofInner = new THREE.Mesh(roofInnerGeo, roofInnerMat);
    roofInner.position.y = 3.3;
    arenaGroup.add(roofInner);

    // 36 RADIAL ROOF SPOKE BEAMS (Creating the structural canopy from reference)
    const spokeCount = 36;
    const spokeGroup = new THREE.Group();

    for (let i = 0; i < spokeCount; i++) {
      const angle = (i / spokeCount) * Math.PI * 2;
      const spokeLength = 4.2;

      const beamGeo = new THREE.BoxGeometry(0.12, 0.15, spokeLength);
      const beamMat = new THREE.MeshStandardMaterial({
        color: nightMode ? 0x1e293b : 0x64748b,
        metalness: 0.9,
        roughness: 0.2,
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);

      // Position beam radially between inner rim (R~5.2*1.35) and outer rim (R~9.0*1.35)
      const rInnerX = 5.2 * 1.35;
      const rInnerZ = 5.2;
      const rOuterX = 9.0 * 1.35;
      const rOuterZ = 9.0;

      const xMid = (Math.cos(angle) * rInnerX + Math.cos(angle) * rOuterX) / 2;
      const zMid = (Math.sin(angle) * rInnerZ + Math.sin(angle) * rOuterZ) / 2;

      beam.position.set(xMid, 3.2, zMid);
      beam.lookAt(0, 3.2, 0);
      spokeGroup.add(beam);
    }
    arenaGroup.add(spokeGroup);

    // --- E. GLOWING NEON LED ROOF RING (CYAN & MAGENTA APERTURE) ---
    // Outer Neon Ring Strip
    const neonTorusOuterGeo = new THREE.TorusGeometry(8.9, 0.1, 16, 100);
    neonTorusOuterGeo.scale(1.35, 1, 1);
    const neonMatOuter = new THREE.MeshBasicMaterial({
      color: nightMode ? 0x38bdf8 : 0x0284c7,
    });
    const neonOuterMesh = new THREE.Mesh(neonTorusOuterGeo, neonMatOuter);
    neonOuterMesh.rotation.x = Math.PI / 2;
    neonOuterMesh.position.y = 2.78;
    arenaGroup.add(neonOuterMesh);

    // Inner Aperture Neon Ring Strip (Bright Glowing Electric Blue/Purple Aperture)
    const neonTorusInnerGeo = new THREE.TorusGeometry(5.2, 0.12, 16, 100);
    neonTorusInnerGeo.scale(1.35, 1, 1);
    const neonMatInner = new THREE.MeshBasicMaterial({
      color: nightMode ? 0xc084fc : 0x3b82f6,
    });
    const neonInnerMesh = new THREE.Mesh(neonTorusInnerGeo, neonMatInner);
    neonInnerMesh.rotation.x = Math.PI / 2;
    neonInnerMesh.position.y = 3.32;
    arenaGroup.add(neonInnerMesh);

    // Exterior Facade LED Strips (Middle Tier Glow Ring)
    const neonMidGeo = new THREE.TorusGeometry(9.6, 0.08, 16, 100);
    neonMidGeo.scale(1.35, 1, 1);
    const neonMidMat = new THREE.MeshBasicMaterial({
      color: nightMode ? 0x00f0ff : 0x2563eb,
    });
    const neonMidMesh = new THREE.Mesh(neonMidGeo, neonMidMat);
    neonMidMesh.rotation.x = Math.PI / 2;
    neonMidMesh.position.y = 1.3;
    arenaGroup.add(neonMidMesh);

    // --- F. ILLUMINATED GREEN PITCH FIELD INSIDE ARENA ---
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    // Turf base
    ctx.fillStyle = nightMode ? '#042f2e' : '#15803d';
    ctx.fillRect(0, 0, 1024, 768);

    // Grass stripes
    const stripeWidth = 1024 / 12;
    for (let i = 0; i < 12; i++) {
      if (i % 2 === 0) {
        ctx.fillStyle = nightMode ? 'rgba(13, 148, 136, 0.25)' : 'rgba(22, 101, 52, 0.4)';
        ctx.fillRect(i * stripeWidth, 0, stripeWidth, 768);
      }
    }

    // Glowing pitch lines
    ctx.strokeStyle = nightMode ? 'rgba(56, 189, 248, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    ctx.lineWidth = 10;
    ctx.shadowColor = nightMode ? '#38bdf8' : 'transparent';
    ctx.shadowBlur = nightMode ? 15 : 0;

    ctx.strokeRect(40, 40, 944, 688);
    ctx.beginPath();
    ctx.moveTo(512, 40);
    ctx.lineTo(512, 728);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(512, 384, 120, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = nightMode ? '#38bdf8' : '#ffffff';
    ctx.beginPath();
    ctx.arc(512, 384, 12, 0, Math.PI * 2);
    ctx.fill();

    // Goals
    ctx.strokeRect(40, 204, 160, 360);
    ctx.strokeRect(824, 204, 160, 360);

    const pitchTexture = new THREE.CanvasTexture(canvas);
    pitchTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const pitchGeo = new THREE.PlaneGeometry(10.5, 7.0);
    const pitchMat = new THREE.MeshStandardMaterial({
      map: pitchTexture,
      roughness: 0.35,
      metalness: 0.1,
    });
    const pitchMesh = new THREE.Mesh(pitchGeo, pitchMat);
    pitchMesh.rotation.x = -Math.PI / 2;
    pitchMesh.position.y = 0.05;
    pitchMesh.receiveShadow = true;
    arenaGroup.add(pitchMesh);

    // --- G. STADIUM SEATING STANDS INSIDE ARENA BOWL ---
    const seatsGeo = new THREE.CylinderGeometry(6.6, 5.4, 1.8, 64, 1, true);
    seatsGeo.scale(1.35, 1, 1);
    const seatsMat = new THREE.MeshStandardMaterial({
      color: nightMode ? 0x1e1b4b : 0x64748b,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });
    const seatsMesh = new THREE.Mesh(seatsGeo, seatsMat);
    seatsMesh.position.y = 0.95;
    arenaGroup.add(seatsMesh);

    // --- H. INTENSE STADIUM FLOODLIGHTS & CENTRAL HOLOGRAM ---
    // Floodlight Spotlights pointing down onto pitch
    const spot1 = new THREE.SpotLight(nightMode ? 0x38bdf8 : 0xffffff, nightMode ? 6 : 3);
    spot1.position.set(0, 9, 0);
    spot1.target.position.set(0, 0, 0);
    spot1.angle = Math.PI / 3;
    spot1.penumbra = 0.4;
    spot1.castShadow = true;
    scene.add(spot1);
    scene.add(spot1.target);

    // Floating Hologram Trophy / Orb in Center Aperture
    const centerGroup = new THREE.Group();

    const trophyGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const trophyMat = new THREE.MeshStandardMaterial({
      color: nightMode ? 0x38bdf8 : 0x2563eb,
      emissive: nightMode ? 0x0284c7 : 0x1d4ed8,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.1,
    });
    const trophyMesh = new THREE.Mesh(trophyGeo, trophyMat);
    centerGroup.add(trophyMesh);

    const auraGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const auraMat = new THREE.MeshBasicMaterial({
      color: nightMode ? 0xc084fc : 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const auraMesh = new THREE.Mesh(auraGeo, auraMat);
    centerGroup.add(auraMesh);

    centerGroup.position.set(0, 2.2, 0);
    arenaGroup.add(centerGroup);

    // --- I. ATMOSPHERIC PARTICLES & LIGHT BEAMS ---
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 24;
      posArray[i + 1] = Math.random() * 12 + 0.2;
      posArray[i + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.09,
      color: nightMode ? 0x38bdf8 : 0x3b82f6,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    arenaGroup.add(particlesMesh);

    // Main Directional Light & Ambient Light
    const ambientLight = new THREE.AmbientLight(
      nightMode ? 0x1e1b4b : 0xffffff,
      nightMode ? 1.4 : 2.0
    );
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, nightMode ? 1.2 : 1.8);
    mainLight.position.set(10, 20, 15);
    mainLight.castShadow = true;
    scene.add(mainLight);

    // -------------------------------------------------------------
    // MOUSE INTERACTION & SMOOTH ROTATION
    // -------------------------------------------------------------
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0.32;
    let targetRotationY = -0.3;
    let currentRotationX = 0.32;
    let currentRotationY = -0.3;

    const onPointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.004;
      targetRotationX += deltaY * 0.004;

      targetRotationX = Math.max(0.1, Math.min(Math.PI / 2.3, targetRotationX));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.style.cursor = 'grab';
    domElem.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // -------------------------------------------------------------
    // ANIMATION LOOP
    // -------------------------------------------------------------
    let clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (autoRotateRef.current && !isDragging) {
        targetRotationY += 0.0025;
      }

      currentRotationX += (targetRotationX - currentRotationX) * 0.07;
      currentRotationY += (targetRotationY - currentRotationY) * 0.07;

      arenaGroup.rotation.y = currentRotationY;
      arenaGroup.rotation.x = currentRotationX;

      // Animate center float
      centerGroup.position.y = 2.2 + Math.sin(elapsedTime * 2.2) * 0.15;
      trophyMesh.rotation.y = elapsedTime * 0.8;
      auraMesh.rotation.y = -elapsedTime * 0.5;
      auraMesh.rotation.z = elapsedTime * 0.4;

      // Twinkle particles
      const positions = particleGeo.attributes.position.array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] += Math.sin(elapsedTime + i) * 0.0025;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------
    // RESIZE OBSERVER
    // -------------------------------------------------------------
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(reqIdRef.current);
      resizeObserver.disconnect();
      domElem.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      podiumGeo.dispose();
      podiumMat.dispose();
      wall1Geo.dispose();
      wall1Mat.dispose();
      wall2Geo.dispose();
      wall2Mat.dispose();
      roofOuterGeo.dispose();
      roofOuterMat.dispose();
      pitchGeo.dispose();
      pitchMat.dispose();
      pitchTexture.dispose();
      trophyGeo.dispose();
      trophyMat.dispose();
      renderer.dispose();
    };
  }, [nightMode]);

  const handleResetCamera = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 10.5, 16.5);
      cameraRef.current.lookAt(0, 0.5, 0);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden group select-none">
      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full flex items-center justify-center bg-slate-950/90" />

      {/* Floating HUD Overlay */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/60 backdrop-blur-md text-[11px] font-semibold text-cyan-400 shadow-xl pointer-events-auto">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
          FUTURISTIC STADIUM 3D
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900/85 p-1 rounded-xl border border-slate-700/60 backdrop-blur-md pointer-events-auto shadow-xl">
          <button
            onClick={() => setIsAutoRotating((prev) => !prev)}
            title={isAutoRotating ? 'Pause 360° Rotation' : 'Auto Rotate 360°'}
            className={`p-2 rounded-lg text-xs transition-colors ${
              isAutoRotating ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <RotateCw className={`h-4 w-4 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '7s' }} />
          </button>

          <button
            onClick={() => setNightMode((prev) => !prev)}
            title={nightMode ? 'Switch to Day Mode' : 'Switch to Night Lights'}
            className="p-2 rounded-lg text-xs text-slate-400 hover:text-white transition-colors"
          >
            {nightMode ? <Moon className="h-4 w-4 text-indigo-400" /> : <Sun className="h-4 w-4 text-amber-400" />}
          </button>

          <button
            onClick={handleResetCamera}
            title="Reset View"
            className="p-2 rounded-lg text-xs text-slate-400 hover:text-white transition-colors"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Drag Instruction Banner */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-100 opacity-75">
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/85 border border-slate-700/60 backdrop-blur-md text-[10px] font-medium text-slate-300 shadow-lg">
          <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
          Drag to rotate 360° • Futuristic Night Arena
        </div>
      </div>
    </div>
  );
}
