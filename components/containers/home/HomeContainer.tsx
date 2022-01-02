import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import { Suspense } from 'react';


function Item({ url, scale, ...props }): JSX.Element {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta);
    // @ts-ignore
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta);
  });
  return (
    <group {...props}>
      <Image
      // @ts-ignore
      ref={ref} scale={scale} url={url} />
    </group>
  );
}

function Items(): JSX.Element {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item url="/1.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="/2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="/3.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="/4.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="/5.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="/6.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="/7.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="/8.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="/12.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  );
}

function HomeContainer(): React.ReactElement {
  return (
    <>
      <Canvas style={{ height: '100vh', overflow: "hidden", margin: "auto" }} orthographic camera={{ zoom: 80 }} gl={{ alpha: true, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5,]}>
        <color attach="background" args={['#fff']} /> <Suspense fallback={null}><ScrollControls damping={4} pages={5}>

          <Items />
          <Scroll html
          // @ts-ignore
          style={{ width: '100%' }}>
            <h1 className="rounded-lg" style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '8em', transform: `translate3d(0,-100%,0)` }}>Learning in Public</h1>
            <h1 style={{ position: 'absolute', top: '180vh', left: '10vw', fontSize: '6em' }}><a href="/bcf3c19d64414c0787ae7a5cd0676447">Real Estate</a></h1>
            <h1 style={{ position: 'absolute', top: '260vh', right: '10vw', fontSize: '6em' }}>Blog</h1>
            <h1 style={{ position: 'absolute', top: '350vh', left: '10vw', fontSize: '6em' }}>Project</h1>
            <h1 style={{ position: 'absolute', top: '450vh', right: '10vw', fontSize: '6em' }}>
              About
              <br />
              Me
            </h1>
          </Scroll>
        </ScrollControls></Suspense></Canvas>
    </>
  );
}

export default HomeContainer;
