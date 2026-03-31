import React from 'react'
import MenuHeader from './MenuHeader'
import MenuDetailsPanel from './MenuDetailsPanel'
import MenuBouquetPanel from './MenuBouquetPanel'
import MenuInfoPanel from './MenuInfoPanel'
import OrderModal from './OrderModal'

type MenuPageProps = {
    onHomeClick: () => void
}

type FlyToCartAnimation = {
    src: string
    startX: number
    startY: number
    endX: number
    endY: number
    size: number
}

function MenuPage({ onHomeClick }: MenuPageProps) {
    const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false)
    const [cartNotificationCount, setCartNotificationCount] = React.useState(0)
    const [flyToCartAnimation, setFlyToCartAnimation] = React.useState<FlyToCartAnimation | null>(null)
    const [isCartBouncing, setIsCartBouncing] = React.useState(false)
    const animationTimeoutRef = React.useRef<number | null>(null)
    const cartBounceStartTimeoutRef = React.useRef<number | null>(null)
    const cartBounceEndTimeoutRef = React.useRef<number | null>(null)

    React.useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                window.clearTimeout(animationTimeoutRef.current)
            }
            if (cartBounceStartTimeoutRef.current) {
                window.clearTimeout(cartBounceStartTimeoutRef.current)
            }
            if (cartBounceEndTimeoutRef.current) {
                window.clearTimeout(cartBounceEndTimeoutRef.current)
            }
        }
    }, [])

    const handleMenuCartClick = () => {
        setCartNotificationCount((prev) => (prev >= 4 ? 1 : prev + 1))

        const flowerImage = document.getElementById('menu-active-flower') as HTMLImageElement | null
        const headerCart = document.getElementById('menu-header-cart')

        if (!flowerImage || !headerCart) {
            return
        }

        const flowerRect = flowerImage.getBoundingClientRect()
        const cartRect = headerCart.getBoundingClientRect()
        const flySize = Math.max(52, Math.min(112, flowerRect.width * 0.24))

        setFlyToCartAnimation({
            src: flowerImage.currentSrc || flowerImage.src,
            startX: flowerRect.left + flowerRect.width / 2,
            startY: flowerRect.top + flowerRect.height / 2,
            endX: cartRect.left + cartRect.width / 2,
            endY: cartRect.top + cartRect.height / 2,
            size: flySize,
        })

        if (animationTimeoutRef.current) {
            window.clearTimeout(animationTimeoutRef.current)
        }
        if (cartBounceStartTimeoutRef.current) {
            window.clearTimeout(cartBounceStartTimeoutRef.current)
        }
        if (cartBounceEndTimeoutRef.current) {
            window.clearTimeout(cartBounceEndTimeoutRef.current)
        }

        setIsCartBouncing(false)

        animationTimeoutRef.current = window.setTimeout(() => {
            setFlyToCartAnimation(null)
        }, 1350)

        cartBounceStartTimeoutRef.current = window.setTimeout(() => {
            setIsCartBouncing(true)
        }, 980)

        cartBounceEndTimeoutRef.current = window.setTimeout(() => {
            setIsCartBouncing(false)
        }, 1320)
    }

    return (
        <main className="min-h-screen bg-[#3B2D2D]">
            <MenuHeader
                onHomeClick={onHomeClick}
                cartNotificationCount={cartNotificationCount}
                isCartBouncing={isCartBouncing}
            />

            {flyToCartAnimation && (
                <div className="pointer-events-none fixed left-0 top-0" style={{ zIndex: 80 }}>
                    <img
                        src={flyToCartAnimation.src}
                        alt=""
                        aria-hidden="true"
                        className="fly-to-cart-flower h-full w-full object-contain"
                        style={
                            {
                                width: `${flyToCartAnimation.size}px`,
                                height: `${flyToCartAnimation.size}px`,
                                left: `${flyToCartAnimation.startX - flyToCartAnimation.size / 2}px`,
                                top: `${flyToCartAnimation.startY - flyToCartAnimation.size / 2}px`,
                                position: 'fixed',
                                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))',
                                '--dx': `${flyToCartAnimation.endX - flyToCartAnimation.startX}px`,
                                '--dy': `${flyToCartAnimation.endY - flyToCartAnimation.startY}px`,
                            } as React.CSSProperties
                        }
                    />
                </div>
            )}

            <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-10 pt-2 text-white lg:grid-cols-[1fr_1.35fr_1fr] lg:gap-10">
                <MenuDetailsPanel />
                <MenuBouquetPanel />
                <MenuInfoPanel
                    onOrderClick={() => setIsOrderModalOpen(true)}
                    onCartClick={handleMenuCartClick}
                />
            </section>
            <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
        </main>
    )
}

export default MenuPage
