"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { PlaneModel } from '@/components/plane/component'
import { Cloud, Float, Html, Loader, OrbitControls, Text, useProgress, } from '@react-three/drei'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { motion as motion3d } from 'framer-motion-3d'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size'
import { Depth, LayerMaterial, Noise } from 'lamina'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import 'react-toastify/dist/ReactToastify.css';


import * as THREE from 'three'

// component
import Appbar from '@/components/appbar/component'


// styles
import { bouncingItemVariants, containerVariants } from '@/styles/variants'
import './page.scss'
import { ToastContainer, toast } from 'react-toastify'


const CloudOpacity = .2
export default function Home() {
  const width = useWindowWidth()
  const height = useWindowHeight()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const [alreadyShownEffectsWarning, setAlreadyShownEffectsWarning] = useState(false)
  const [isTextHovered, setIsTextHovered] = useState(false)
  const [mouseInMotion, setMouseInMotion] = useState(false)

  const isMobile = width < 720

  const pageRef = useRef(null)


  const rotateY = useTransform(x, [0, width], [-.1, .1]);
  const rotateX = useTransform(y, [0, height], [-.1, .1]);

  function handleMouseMove(event) {
    // console.log(pageRef.current)
      // setHovered(true)
      const rect = event.currentTarget.getBoundingClientRect();

      // if( !mouseInMotion ) {
      //   setMouseInMotion(true)

      //   const tout = setTimeout(()=> {
      //     console.log("set mouseInMotion to false now")
      //     if( mouseInMotion ) {
      //       setMouseInMotion(false)
      //     }
      //     clearTimeout(tout)
      //   }, 5000)
      // }

      // setTimeout(()=> {
      x.set(event.clientX - 20 - rect.left);
      y.set(event.clientY - 20 - rect.top);
      // }, 50)

  }

  
  useEffect(()=> {
    // setInterval(()=> {
    //   if( isMouse )
    // }, 5000)
  }, [])

  useEffect(()=> {
    
    if( width < 720 && !alreadyShownEffectsWarning ) {
      console.log("we mobile now")

      toast.warn('Our mouse effects are only supported in desktop devices!', {
        position: "bottom-center",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setAlreadyShownEffectsWarning(true)
    }
  }, [ width ])
  return (
    <motion.div
      className='page'
      ref={pageRef}
      onMouseMove={e => handleMouseMove(e)}
    >
      <Appbar />

      <Canvas className='home_canvas'>
        <OrbitControls />
        <ambientLight />

        <CanvasBackground />

        <Float floatIntensity={.2} rotationIntensity={.1}>
        <motion3d.group
          scale={[ .09, .09, .09 ]}
          position={[ 0, -1, -1.5 ]}
          rotation-y={rotateY}
          rotation-x={rotateX}
        >
          {/* plane model */}
          {/* <Suspense fallback={<Loader />}> */}
            <group scale={ isMobile ? [ .8, .8, .8 ] : [ 1, 1, 1 ] }>
                <PlaneModel />
            </group>
          {/* </Suspense> */}

          {
            new Array(30).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ (i % 2 == 0) ? Math.random() * 20 : Math.random() * -20  }
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }
          {
            new Array(50).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ 50 }
                  position-y={-10}
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }
          {
            new Array(50).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ 40 }
                  position-y={-10}
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }
          {
            new Array(50).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ 0 }
                  position-y={-10}
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }
          {
            new Array(50).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ 15 }
                  position-y={-10}
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }
          {
            new Array(50).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ -10 }
                  position-y={-10}
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }
          {
            new Array(50).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ -20 }
                  position-y={-10}
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }
          {
            new Array(50).fill(20).map((_, i)=> {

              return (
                <group
                  key={i}
                  position-x={-140 + (i*10)}
                  position-z={ -40 }
                  position-y={-10}
                >
                  <Cloud
                    color='white'
                    width={30}
                    opacity={CloudOpacity}
                  />
                </group>
              )
            })
          }

            <group position={[ -10, 20, 0 ]} scale={5}>
                <Text
                    font="/fonts/Orbitron_Regular.json"
                    scale={ isMobile ? 1 : 1 }
                    position={ isMobile ? [ 2, 5, -4 ] : [ 2.5, 5.6, -4 ] }
                >
                  Welcome To
                </Text>
                <Text
                    font="/fonts/Orbitron_Regular.json"
                    scale={ isMobile ? 3.2 : 6 }
                    position={ isMobile ? [ 2, 2.5, -4 ] : [ 2.5, .5, -2 ] }
                    // color={"lightskyblue"}
                    color={"aliceblue"}
                    // color="powderblue"
                    onPointerEnter={()=> setIsTextHovered(true)}
                    onPointerOut={()=> setIsTextHovered(false)}
                    strokeColor={isTextHovered ? "aliceblue" : "transparent"}
                    strokeWidth={ isTextHovered ? .02 : 0 }
                    strokeOpacity={ isTextHovered ? .3 : 0}
                    fillOpacity={ isTextHovered ? 0 : 1 }
                >
                  Jet Blue
                </Text>
            </group>
        </motion3d.group>
        </Float>

        {/* <AltLoader /> */}
        {/* <CanvasLoader /> */}
      </Canvas>
      {/* <Loader /> */}

      <motion.div
        className='direction_container'
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className='direction_container_icon'>
          <MdKeyboardDoubleArrowDown style={{ fontSize: '2rem', color: 'white', }} />
        </motion.div>
      </motion.div>

      <ToastContainer />
    </motion.div>
  )
}



const CanvasBackground = ()=> {
  const ref = useRef(null)

  useFrame(()=> {
      ref.current.rotation.x += .02
      ref.current.rotation.y += .02
  })

  return (
      <mesh ref={ref} scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
              <Depth
                  // colorA="skyblue"
                  // colorA="royalblue"
                  // colorA="cadetblue"
                  // colorA="cornflowerblue"
                  // colorA="deepskyblue"
                  colorA="dodgerblue"
                  colorB="gray"
                  alpha={1}
                  mode="normal"
                  near={0}
                  far={300}
                  origin={[100, 100, 100]}
              />
              <Noise mapping="local" type="cell" scale={0.5} mode="darken" />
          </LayerMaterial>
      </mesh>
  )
}

function AltLoader() {
  console.log("AltLoader called")
  const { active, progress, errors, item, loaded, total } = useProgress()
  console.log("progress ", progress)

  if( progress == 100 ) {
      return (
          <></>
      )
  }
  return (
    <Html
      center
      className='canvas_loader'
    >
      {progress} % loaded
    </Html>
  )
}

const CanvasLoader = ()=> {
  console.log("CanvasLoader called")
    const { progress } = useProgress()

    console.log("progress ", progress)

    // if( progress == 100 ) {
    //     return (
    //         <></>
    //     )
    // }
    return (
        <group>
            <Html
                center
                className='canvas_loader'
            >
                <h1>
                    {progress} %
                </h1>
                <p>
                    Loaded
                </p>
            </Html>
        </group>
    )
}
