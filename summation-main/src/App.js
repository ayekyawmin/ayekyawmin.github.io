import { useRef } from 'react'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { OrbitControls, Stage, Backdrop, MeshReflectorMaterial} from '@react-three/drei'
import {
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
} from '@react-three/drei'
import { Model } from './Web6.jsx';


export default function App() {
  return (
  

  
    <Canvas camera={{ position: [0, 7, 25], near: 5, far: 75, fov: 75 }}>
    


    <directionalLight position={[-10, 10, 20]} intensity={0.25} color="red" />
    <directionalLight position={[10, 10, 20]} intensity={0.25} color="blue" />
    

   
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -45, 0]}>
    <planeGeometry args={[500, 500]} />
      <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}          
        />
      </mesh>
    

  
    <ScrollControls damping={0.2} pages={3} distance={0.5}>
    <Scroll html>
          
            <div className="sidetxt" style={{ transform: 'translate3d(85vw, 10vh, 0)' }}>
              <h2>Projects</h2>
            </div>
            
            <div className="sideimg" style={{ transform: 'translate3d(80vw, 10vh, 0)' }}>
		<img src='s2.jpg' alt="My img" width="328" height="528"></img>
            </div>
            
            <div className="sideimg" style={{ transform: 'translate3d(80vw, 20vh, 0)' }}>
		<img src='s3.jpg' alt="My img" width="328" height="528" ></img>
	    </div>
	
	    <div className="sideimg" style={{ transform: 'translate3d(80vw, 40vh, 0)' }}>
		<img src='s5.jpg' alt="My img" width="328" height="528" ></img>
            </div>
            
          
            
 <div className="reg" style={{ transform: 'translate3d(80vw, 50vh, 0)' }}>    
            
    <h1>Register</h1>
    <p>Please fill in this form to create an account and to browse more photos.</p>

    <label for="email">Email</label><br />
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input><br /><br />

    <label for="psw">Password</label><br />
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input><br /><br />

    <label for="psw-repeat">Repeat Password</label><br />
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="button">Register</button>

  

    <p>Already have an account? <a href="#">Sign in</a>.</p>


   
   </div>         
          </Scroll>

          <Preload />

 </ScrollControls>
      



     <Backdrop castShadow floor={10} position={[0, -50, -90]} scale={[1500, 2500, 40]}>
        <meshStandardMaterial color="#15151a" envMapIntensity={0.1} />
      </Backdrop>
      

      
 <Stage>
      

        <Model />

 </Stage>

        
      
      <OrbitControls enableZoom={false} />
      

    </Canvas>
  )
}

function Images() {
  const group = useRef()
  const data = useScroll()
  const { height } = useThree((state) => state.viewport)
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2

  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/s1.jpg" />
      <Image position={[2, 0, 3]} scale={3} url="/s2.jpg" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="s3.jpg" />


    </group>
  )
}



