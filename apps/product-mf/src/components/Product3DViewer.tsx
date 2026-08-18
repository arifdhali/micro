import { Canvas, useLoader } from "@react-three/fiber";
import {
  Bounds,
  Center,
  Environment,
  Html,
  Loader,
  OrbitControls,
  // RoundedBox,
  useGLTF,
  // useTexture,
} from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const modelURL = "http://localhost:5001/model/iphone_12_pro.glb";

function ProductModel() {
  const gltf = useLoader(GLTFLoader, modelURL);

  return (
    <Bounds fit>
      <Center>
        <primitive
          object={gltf.scene}
        />
      </Center>
    </Bounds>
  );
}

useGLTF.preload(modelURL);




// function Phone() {
// // const FRONT =  "https://cdn.mycardpost.com/frontend/card_new/178309496812front-watermark-V2.png";
// // const BACK = "https://cdn.mycardpost.com/frontend/card_new/u73432b5baeec28e63bdd37c55200094c.jpg";
// // const FRONT =  "http://192.168.0.95:5001/shirt-1.jpg";
// // const BACK = "http://192.168.0.95:5001/shirt-2.jpg";
//   const frontTexture = useTexture(FRONT);
//   const backTexture = useTexture(BACK);

//   return (
//     <group >

//       <RoundedBox
//         args={[3, 6, 0.2]}
//         radius={.1}
//         smoothness={7}
//       >
//         <meshStandardMaterial
//           color="#111"
//           metalness={1.0}
//           roughness={0.25}         
//         />
//       </RoundedBox>

//       <mesh position={[0, 0, 0.12]}>
//         <planeGeometry args={[2.65, 5.65]} />

//         <meshStandardMaterial
//           map={frontTexture}
//           roughness={0.3}
//         />
//       </mesh>


//       <mesh
//         position={[0, 0, -0.12]}
//         rotation={[0, Math.PI, 0]}
//       >
//         <planeGeometry args={[2.65, 5.65]} />

//         <meshStandardMaterial
//           map={backTexture}
//           roughness={0.3}
//         />
//       </mesh>

//     </group>
//   );
// }

export default function Product3DViewer() {
  return (
    <div className="h-[600px] w-full overflow-hidden rounded-2xl product-viewer">
      <Canvas
        frameloop="demand"
        camera={{
          fov: 80,
        }}
      >
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >

          <ProductModel />
          {/* <Phone /> */}

          <Environment preset="warehouse"  background />
          <ambientLight intensity={2} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
          />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
          />

        </Suspense>
      </Canvas>
    </div>
  );
}