import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  useGLTF,
  Center,
  Loader,
  Html,
} from "@react-three/drei";
import { Suspense } from "react";

const modelURL = "http://localhost:5001/model/iphone_12_pro.glb";
function ProductModel() {
  const { scene } = useGLTF(modelURL,);

  return (
    <Center>
      <primitive
        object={scene}
        scale={.1}
      />
    </Center>
  );
}

useGLTF.preload(modelURL);

export default function Product3DViewer() {
  return (
    <div className="h-[700px] w-full overflow-hidden rounded-2xl bg-[#333535]">

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 100,
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <Suspense fallback={<Html center>
          <Loader />
        </Html>}>
          <Environment preset="dawn" />

          <ProductModel />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          minDistance={2}
          maxDistance={6}
          maxZoom={10}

        />
      </Canvas>
    </div>
  );
}