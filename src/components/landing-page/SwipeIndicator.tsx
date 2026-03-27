import React from 'react'
import logoImage from '../../images/swipe.png'

type SwipeIndicatorProps = {
    onSwipeSuccess: () => void
}

function SwipeIndicator({ onSwipeSuccess }: SwipeIndicatorProps) {
    const trackRef = React.useRef<HTMLDivElement | null>(null)
    const [isDragging, setIsDragging] = React.useState(false)
    const [swipeOffset, setSwipeOffset] = React.useState(8)

    const updateSwipeOffset = (clientX: number) => {
        if (!trackRef.current) {
            return
        }

        const rect = trackRef.current.getBoundingClientRect()
        const iconSize = 56
        const min = 8
        const max = rect.width - iconSize - 8
        const next = clientX - rect.left - iconSize / 2
        const clamped = Math.min(Math.max(next, min), max)
        setSwipeOffset(clamped)
    }

    const handleSwipeStart = (event: React.PointerEvent<HTMLDivElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId)
        setIsDragging(true)
        updateSwipeOffset(event.clientX)
    }

    const handleSwipeMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) {
            return
        }

        updateSwipeOffset(event.clientX)
    }

    const handleSwipeEnd = () => {
        if (trackRef.current) {
            const iconSize = 56
            const max = trackRef.current.clientWidth - iconSize - 8
            const successThreshold = max * 0.8

            if (swipeOffset >= successThreshold) {
                setSwipeOffset(max)
                onSwipeSuccess()
                return
            }
        }

        setSwipeOffset(8)
        setIsDragging(false)
    }

    return (
        <div className="absolute right-0 top-[70%] z-20 -translate-y-1/2">
            <div
                ref={trackRef}
                className="swipe-track relative h-18 w-[280px] cursor-grab overflow-hidden rounded-l-[100px] border border-white/30 bg-white/20 shadow-lg backdrop-blur-sm active:cursor-grabbing"
                onPointerDown={handleSwipeStart}
                onPointerMove={handleSwipeMove}
                onPointerUp={handleSwipeEnd}
                onPointerCancel={handleSwipeEnd}
                aria-label="Swipe indicator"
            >
                <div className="swipe-arrow absolute right-16 top-11 -translate-y-1/2 text-sm font-semibold tracking-widest text-black/80">
                    {'Swipe to explore'.toUpperCase()}
                </div>
                <img
                    src={logoImage}
                    alt="Swipe logo"
                    className="absolute top-1/2 h-14 w-14 -translate-y-1/2 select-none object-contain touch-none"
                    style={{
                        left: `${swipeOffset}px`,
                        transition: isDragging ? 'none' : 'left 180ms ease-out',
                    }}
                    draggable={false}
                />
            </div>
        </div>
    )
}

export default SwipeIndicator
