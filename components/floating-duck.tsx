"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import type * as THREE from "three"

function DuckModel({ scale }: { scale: number }) {
  // プロジェクト内のパスを参照
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const meshRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
      meshRef.current.rotation.x = 0.2
    }
  })

  return <primitive object={scene.clone()} scale={scale} position={[0, -50, -200]} ref={meshRef} />
}

export default function FloatingDuck() {
  const [mounted, setMounted] = useState(false)
  const [currentScale, setCurrentScale] = useState(50) // デフォルトはスマホサイズ
  const [isMobile, setIsMobile] = useState(false) // スマホ判定を追加

  useEffect(() => {
    setMounted(true)

    const handleResize = () => {
      // 画面幅に基づいてスケールとスマホ判定を調整
      if (window.innerWidth >= 768) {
        setCurrentScale(100) // PCサイズ
        setIsMobile(false)
      } else {
        setCurrentScale(50) // スマホサイズ
        setIsMobile(true)
      }
    }

    handleResize() // 初期ロード時
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!mounted || isMobile) {
    // スマホの場合はレンダリングしない
    return null
  }

  return (
    <div className="absolute inset-0 w-full h-screen z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75 }}
        dpr={1}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.0} />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <DuckModel scale={currentScale} />
        </Suspense>
      </Canvas>
    </div>
  )
}

