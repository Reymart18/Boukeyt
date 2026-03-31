import previewA from '../../images/bloom.jpg'
import previewB from '../../images/drop.jpg'
import borderFrame from '../../images/border.png'
import cartIcon from '../../images/cart.png'

type MenuInfoPanelProps = {
    onOrderClick: () => void
    onCartClick: () => void
}

function MenuInfoPanel({ onOrderClick, onCartClick }: MenuInfoPanelProps) {
    return (
        <aside className="menu-pop-in menu-delay-3 font-buenard flex flex-col gap-5 self-start leading-[150%] lg:self-start">
            <div className="grid grid-cols-2 gap-3">
                <img
                    src={previewA}
                    alt="Bouquet preview one"
                    className="h-28 w-full rounded object-cover sm:h-36"
                />
                <img
                    src={previewB}
                    alt="Bouquet preview two"
                    className="h-28 w-full rounded object-cover sm:h-36"
                />
            </div>

            <div>
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-[150%] text-white">Observe its beauty of tulips </h3>
                    <p className="text-2xl tracking-[0.4em] text-white/60">•••</p>
                </div>
                <p className="mt-3 text-sm text-white/75 sm:text-base">
                    Delicate petals and playful tones create a bouquet that
                    feels fresh, elegant, and full of life for special gifts
                    and everyday moments.
                </p>
            </div>

            <div className="mt-1 flex items-center gap-2">
                <button
                    type="button"
                    onClick={onCartClick}
                    aria-label="Cart"
                    className="relative shrink-0 transition-opacity hover:opacity-80"
                >
                    <img src={cartIcon} alt="Cart" className="h-7 w-7 object-contain sm:h-16 sm:w-16" />
                </button>
                <button
                    type="button"
                    onClick={onOrderClick}
                    className="font-lateef relative h-14 flex-1 overflow-hidden text-base font-regular text-white transition hover:opacity-90 sm:h-16 sm:text-xl"
                >
                    <img
                        src={borderFrame}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full object-fill"
                    />
                    <span className="relative z-10 flex h-full items-center justify-center">
                        <span>ORDER HERE</span>
                    </span>
                </button>
            </div>
        </aside>
    )
}

export default MenuInfoPanel
