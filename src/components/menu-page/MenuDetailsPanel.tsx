import rectangle from '../../images/Rectangle.png'

function MenuDetailsPanel() {
    return (
        <aside className="menu-pop-in menu-delay-1 font-buenard self-end leading-[150%] lg:mb-10 lg:self-end">
            <p className="font-buenard flex items-center gap-2 text-1xl tracking-wide text-white/80 sm:text-1xl">
                <img src={rectangle} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                <span>Cinderella</span>
            </p>
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
    )
}

export default MenuDetailsPanel
