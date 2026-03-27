import logoImage from '../../images/logo.png'
import mainBouquet from '../../images/flower2.png'
import previewA from '../../images/bloom.jpg'
import previewB from '../../images/drop.jpg'

function MenuPage() {
    return (
        <main className="min-h-screen bg-[#3B2D2D]">
            <header className="menu-pop-in menu-delay-0 flex items-center justify-between px-6 pb-5 pt-0 sm:px-10">
                <img
                    src={logoImage}
                    alt="Boukeyt logo"
                    className="h-12 w-12 object-contain sm:h-30 sm:w-30"
                />

                <nav className="font-buenard flex items-center gap-6 text-base text-white sm:gap-15 sm:text-lg">
                    <a href="#" className="transition-opacity hover:opacity-80">Contact Us</a>
                    <a href="#" className="transition-opacity hover:opacity-80">About</a>
                    <a href="#" className="transition-opacity hover:opacity-80">Order</a>
                </nav>
            </header>

            <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-10 pt-2 text-white lg:grid-cols-[1fr_1.35fr_1fr] lg:gap-10">
                <aside className="menu-pop-in menu-delay-1 font-buenard self-end leading-[150%] lg:mb-10 lg:self-end">
                    <p className="font-buenard text-1xl tracking-wide text-white/80 sm:text-1xl">☐ Cinderella</p>
                    <h2 className="font-birthstone-bounce mt-2 text-7xl leading-[150%] text-white sm:text-9xl">
                        Tulips
                    </h2>
                    <div className="mt-1 h-[1px] w-32 bg-[#767676]" />

                    <p className="mt-6 max-w-xs text-sm text-white/80 sm:text-base">
                        Handpicked blooms wrapped with care. A soft spring palette
                        designed to brighten moments and gift heartfelt beauty.
                    </p>

                    <div className="mt-8 grid max-w-sm grid-cols-2 gap-6 text-sm sm:text-base">
                        <div>
                            <h3 className="font-semibold text-white">Sizes</h3>
                            <p className="mt-2 text-white/80">Small, Medium</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Colors (Wrap)</h3>
                            <p className="mt-2 text-white/80">Yellow, White, Pink, Red, Black</p>
                        </div>
                    </div>


                </aside>

                <div className="menu-pop-in menu-delay-2 relative flex items-end justify-center lg:mb-10">
                    <div className="absolute left-6 top-2 sm:left-[-10%] sm:top-4">
                        <svg
                            viewBox="0 0 180 74"
                            className="h-[74px] w-[180px] drop-shadow-md"
                            aria-hidden="true"
                        >
                            <path
                                d="M16 8 H160 C168 8 174 14 174 22 V45 C174 53 168 59 160 59 H132 L146 69 L141 59 H16 C8 59 2 53 2 45 V22 C2 14 8 8 16 8 Z"
                                fill="rgba(255,255,255,0.22)"
                                stroke="rgba(255,255,255,0.35)"
                            />
                        </svg>
                        <p className="font-buenard absolute left-5 top-[22px] text-sm text-white sm:text-base">
                            Stocks left: 12
                        </p>
                    </div>
                    <img
                        src={mainBouquet}
                        alt="Tulips bouquet"
                        className="max-h-[65vh] w-full max-w-[520px] object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
                    />
                </div>

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

                    <button className="mt-1 h-12 w-full bg-white/35 text-base font-semibold text-white transition hover:bg-white/45 sm:h-14 sm:text-lg">
                        View Detail
                    </button>
                </aside>
            </section>
        </main>
    )
}

export default MenuPage
