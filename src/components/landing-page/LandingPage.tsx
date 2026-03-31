import React from 'react'
import bgVideo from '../../images/vidloop.mp4'
import FlowerShowcase from './FlowerShowcase'
import FloatingLogo from './FloatingLogo'
import SwipeIndicator from './SwipeIndicator'

type LandingPageProps = {
    onSwipeSuccess: (rect: { left: number; top: number; width: number; height: number }) => void
    hideFloatingLogo?: boolean
}

function LandingPage({ onSwipeSuccess, hideFloatingLogo = false }: LandingPageProps) {
    const logoRef = React.useRef<HTMLDivElement>(null)

    const handleSwipeSuccess = () => {
        if (!logoRef.current) {
            onSwipeSuccess({ left: 24, top: 8, width: 56, height: 56 })
            return
        }

        const rect = logoRef.current.getBoundingClientRect()
        onSwipeSuccess({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
        })
    }

    return (
        <main className="relative isolate min-h-screen overflow-hidden">
            <FloatingLogo logoRef={logoRef} hidden={hideFloatingLogo} />

            <div className="absolute inset-0 -z-10">
                <video
                    className="h-full w-full object-cover opacity-75 [filter:brightness(73%)_contrast(200%)_saturate(120%)]"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[rgba(110,150,210,0.05)]" />
                <div className="absolute inset-0 bg-[rgba(120,180,140,0.08)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.15),transparent_55%)]" />
            </div>

            <div className="relative z-10 min-h-screen px-4 py-8 sm:px-8 lg:px-12">
                <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl grid-cols-1 items-center gap-8 rounded-3xl border-white/20 p-6 md:grid-cols-2 md:gap-20 md:p-10 lg:gap-28">
                    <FlowerShowcase />

                    <div className="text-left">
                        <h1 className="font-comforter-brush text-[120px] font-normal leading-[95%] tracking-[0.04em] text-[#2f1f26] sm:text-[30px] lg:text-[90px]">
                            BOUKEYT
                        </h1>
                        <p className="font-buenard mt-5 max-w-xl text-[24px] font-normal leading-[150%] text-[#2d2327] sm:text-[12px] lg:text-[18px]">
                            Handcrafted with care, fuzzy creations bring warmth, comfort, and
                            a touch of personality to your everyday life. Each piece is
                            lovingly made by hand, ensuring every item is unique, soft, and
                            special-perfect for gifts or personal keepsakes.
                        </p>
                    </div>
                </section>
            </div>

            <SwipeIndicator onSwipeSuccess={handleSwipeSuccess} />
        </main>
    )
}

export default LandingPage
