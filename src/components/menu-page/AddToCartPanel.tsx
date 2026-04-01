import flowerImage from '../../images/flowerr.png'
import lineImage from '../../images/line.png'
import exitImage from '../../images/exit.png'
import patunganImage from '../../images/patungan.png'

type AddToCartPanelProps = {
    className?: string
    onClose: () => void
}

function AddToCartPanel({ className, onClose }: AddToCartPanelProps) {
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
                    onClick={onClose}
                    aria-label="Close add to cart panel"
                    className="absolute right-[25%] top-[13%] z-10 transition-opacity hover:opacity-80"
                >
                    <img src={exitImage} alt="Exit" className="h-8 w-8 object-contain sm:h-6 sm:w-6" />
                </button>
                <img
                    src={flowerImage}
                    alt="Flower"
                    className="relative z-10 w-full max-w-125 object-contain"
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
                    </div>

                    <button
                        type="button"
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
