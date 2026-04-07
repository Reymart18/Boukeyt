import { useEffect, useMemo, useRef, useState } from 'react'
import flowerImage from '../../images/flowerr.png'
import lineImage from '../../images/line.png'
import exitImage from '../../images/exit.png'
import patunganImage from '../../images/patungan.png'

type AddToCartPanelProps = {
    className?: string
    onClose: () => void
    onOrderClick: () => void
    flowerImages: string[]
    onRemoveHighlightedFlower: (index: number) => void
}

function AddToCartPanel({
    className,
    onClose,
    onOrderClick,
    flowerImages,
    onRemoveHighlightedFlower,
}: AddToCartPanelProps) {
    const hasCartFlowers = flowerImages.length > 0
    const allFlowers = hasCartFlowers ? flowerImages : [flowerImage]
    const [activeFlowerIndex, setActiveFlowerIndex] = useState(Math.max(0, allFlowers.length - 1))
    const previousFlowerCountRef = useRef(allFlowers.length)

    useEffect(() => {
        const previousCount = previousFlowerCountRef.current
        const currentCount = allFlowers.length

        if (currentCount > previousCount) {
            setActiveFlowerIndex(Math.max(0, currentCount - 1))
        } else if (activeFlowerIndex >= currentCount) {
            setActiveFlowerIndex(Math.max(0, currentCount - 1))
        }

        previousFlowerCountRef.current = currentCount
    }, [allFlowers.length])

    const activeFlowerImage = allFlowers[activeFlowerIndex] ?? flowerImage
    const nextFlowerImage = useMemo(() => {
        if (allFlowers.length < 2) {
            return null
        }

        const nextIndex = (activeFlowerIndex + 1) % allFlowers.length
        return allFlowers[nextIndex]
    }, [activeFlowerIndex, allFlowers])

    const showNextFlower = () => {
        if (allFlowers.length < 2) {
            return
        }

        setActiveFlowerIndex((prev) => (prev + 1) % allFlowers.length)
    }

    const handleRemoveHighlightedFlower = () => {
        if (!hasCartFlowers) {
            onClose()
            return
        }

        onRemoveHighlightedFlower(activeFlowerIndex)
    }

    return (
        <section
            className={`add-to-cart-reveal grid h-full w-full grid-cols-1 gap-0 overflow-hidden lg:grid-cols-2 ${className ?? ''}`.trim()}
            style={{ backgroundColor: '#3B2D2D' }}
        >
            <div className="relative flex items-start justify-center pt-6 lg:pt-10">
                <img
                    src={patunganImage}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-[-1%] w-full object-contain opacity-15 mix-blend-screen"
                />
                <button
                    type="button"
                    onClick={handleRemoveHighlightedFlower}
                    aria-label="Remove highlighted flower"
                    className="absolute right-[25%] top-[13%] z-40 transition-opacity hover:opacity-80"
                >
                    <img src={exitImage} alt="Exit" className="h-8 w-8 object-contain sm:h-6 sm:w-6" />
                </button>
                {nextFlowerImage && (
                    <>
                        <button
                            type="button"
                            onClick={showNextFlower}
                            aria-label="Show next flower"
                            className="absolute right-[-25%] top-[30%] z-20 hidden h-[60%] w-[40%] -translate-y-1/2 overflow-hidden opacity-60 transition-opacity hover:opacity-80 lg:block"
                        >
                            <img
                                src={nextFlowerImage}
                                alt="Next flower preview"
                                className="h-full w-full object-cover object-center scale-[1.2]"
                                style={{ clipPath: 'inset(0 50% 0 0)' }}
                            />
                        </button>
                    </>
                )}

                <img
                    key={`${activeFlowerImage}-${activeFlowerIndex}`}
                    src={activeFlowerImage}
                    alt="Flower"
                    className="cart-center-flower-enter relative z-10 w-full max-w-125 object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                />
            </div>
            <div className="flex min-h-80 items-start justify-center pt-4 lg:pt-8">
                <div className="mx-auto w-130 max-w-full pl-30 text-left">
                    <div className="space-y-2">
                        <div className="inline-flex flex-col">
                            <h2 className="font-comforter-brush text-8xl leading-[150%] text-white">Cinderella</h2>
                        </div>
                        <p className="font-buenard max-w-170 text-lg leading-[150%] text-white/80">
                            blablvdlksgkakgkwgkasgkaskgkaskg kaskgaksgkaksfgkaskfgasnbkafsgasf
                            gijgaoksgjiasfgkasfgjaskfgsfgasf gasfg description siya ng flower details dasfgas
                        </p>
                    </div>

                    <img
                        src={lineImage}
                        alt=""
                        aria-hidden="true"
                        className="mt-8 h-auto w-18 object-contain"
                    />

                    <div className="mt-6">
                        <p className="font-cormorant-infant text-4xl leading-[150%] text-white">₱550</p>
                        <p className="font-cormorant-infant text-xl leading-[150%] text-white/80">Medium</p>
                        <p className="font-buenard mt-1 text-sm text-white/70">
                            {flowerImages.length} flower{flowerImages.length === 1 ? '' : 's'} in your cart
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onOrderClick}
                        className="mt-4 rounded-lg bg-[#E2DFE6] opacity-50 px-4 py-1 text-base leading-[150%] text-[#4a3b3b] transition hover:bg-[#ddd2d2]"
                    >
                        Order here
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AddToCartPanel
