const { Canvas, useFrame } = ReactThreeFiber;
const { OrbitControls, Text } = drei;

function Plaque({ position, color, text }) {
  const mesh = React.useRef();
  const [hovered, setHover] = React.useState(false);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 0.2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
      <Text position={[0, 0, 0.11]} fontSize={0.2} color="white">
        {text}
      </Text>
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Plaque position={[-2, 0, 0]} color="orange" text="Project A" />
      <Plaque position={[0, 0, 0]} color="skyblue" text="Project B" />
      <Plaque position={[2, 0, 0]} color="purple" text="Project C" />
      <OrbitControls enablePan enableZoom />
    </Canvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Scene />);
