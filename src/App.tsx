import React from 'react'
import LandingPage from './components/landing-page/LandingPage'
import MenuPage from './components/menu-page/MenuPage'
import logoImage from './images/logo.png'

type LogoRect = {
  left: number
  top: number
  width: number
  height: number
}

type TransitionPhase = 'idle' | 'start' | 'toCenter' | 'orbitCenter' | 'toHeader'
type Page = 'landing' | 'menu'
const PAGE_STORAGE_KEY = 'boukeyt-page'

function App() {
  const [page, setPage] = React.useState<Page>(() => {
    const storedPage = window.localStorage.getItem(PAGE_STORAGE_KEY)
    return storedPage === 'menu' ? 'menu' : 'landing'
  })
  const [logoRect, setLogoRect] = React.useState<LogoRect | null>(null)
  const [transitionPhase, setTransitionPhase] = React.useState<TransitionPhase>('idle')
  const orbitTimeoutRef = React.useRef<number | null>(null)
  const toHeaderTimeoutRef = React.useRef<number | null>(null)
  const finishTimeoutRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    window.localStorage.setItem(PAGE_STORAGE_KEY, page)
  }, [page])

  React.useEffect(() => {
    return () => {
      if (orbitTimeoutRef.current) {
        window.clearTimeout(orbitTimeoutRef.current)
      }
      if (toHeaderTimeoutRef.current) {
        window.clearTimeout(toHeaderTimeoutRef.current)
      }
      if (finishTimeoutRef.current) {
        window.clearTimeout(finishTimeoutRef.current)
      }
    }
  }, [])

  const getMenuLogoTarget = () => {
    const isSmallUp = window.innerWidth >= 640
    return {
      left: isSmallUp ? 40 : 24,
      top: isSmallUp ? 8 : 6,
      width: isSmallUp ? 120 : 48,
      height: isSmallUp ? 120 : 48,
    }
  }

  const handleSwipeSuccess = (rect: LogoRect) => {
    if (transitionPhase !== 'idle') {
      return
    }

    setLogoRect(rect)
    setTransitionPhase('start')

    window.requestAnimationFrame(() => {
      setTransitionPhase('toCenter')
    })

    orbitTimeoutRef.current = window.setTimeout(() => {
      setTransitionPhase('orbitCenter')
    }, 720)

    toHeaderTimeoutRef.current = window.setTimeout(() => {
      setPage('menu')
      setTransitionPhase('toHeader')
    }, 1520)

    finishTimeoutRef.current = window.setTimeout(() => {
      setTransitionPhase('idle')
      setLogoRect(null)
    }, 2140)
  }

  const handleHomeClick = () => {
    setPage('landing')
    setTransitionPhase('idle')
    setLogoRect(null)
  }

  const menuTarget = transitionPhase === 'toHeader' ? getMenuLogoTarget() : null

  const getTransitionStyle = (): React.CSSProperties => {
    if (!logoRect) {
      return {}
    }

    if (transitionPhase === 'start') {
      return {
        left: `${logoRect.left}px`,
        top: `${logoRect.top}px`,
        width: `${logoRect.width}px`,
        height: `${logoRect.height}px`,
        transform: 'translate(0, 0) scale(1) rotate(0deg)',
      }
    }

    if (transitionPhase === 'toCenter') {
      return {
        left: '50%',
        top: '50%',
        width: 'min(34vw, 320px)',
        height: 'min(34vw, 320px)',
        transform: 'translate(-50%, -50%) scale(1.02) rotate(6deg)',
      }
    }

    if (transitionPhase === 'orbitCenter') {
      return {
        left: '50%',
        top: '50%',
        width: 'min(30vw, 280px)',
        height: 'min(30vw, 280px)',
        transform: 'translate(-50%, -50%)',
      }
    }

    if (transitionPhase === 'toHeader' && menuTarget) {
      return {
        left: `${menuTarget.left}px`,
        top: `${menuTarget.top}px`,
        width: `${menuTarget.width}px`,
        height: `${menuTarget.height}px`,
        transform: 'translate(0, 0) scale(1) rotate(-6deg)',
      }
    }

    return {}
  }

  return (
    <>
      {page === 'landing' && (
        <LandingPage
          onSwipeSuccess={handleSwipeSuccess}
          hideFloatingLogo={transitionPhase !== 'idle'}
        />
      )}

      {page === 'menu' && <MenuPage onHomeClick={handleHomeClick} />}

      {transitionPhase !== 'idle' && logoRect && (
        <div className="pointer-events-none fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{
              opacity:
                transitionPhase === 'start'
                  ? 0.85
                  : transitionPhase === 'toHeader'
                    ? 0.35
                    : transitionPhase === 'orbitCenter'
                      ? 0.95
                      : 1,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-900"
            style={{ opacity: transitionPhase === 'toCenter' || transitionPhase === 'orbitCenter' ? 0.2 : 0.08 }}
          />

          <img
            src={logoImage}
            alt="Logo transition"
            className={`absolute object-contain ${transitionPhase === 'start' ? 'transition-none' : transitionPhase === 'orbitCenter' ? 'rocket-center-orbit' : 'transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]'}`}
            style={{
              ...getTransitionStyle(),
              filter: 'drop-shadow(0 20px 55px rgba(0,0,0,0.38))',
            }}
          />
        </div>
      )}
    </>
  )
}

export default App
