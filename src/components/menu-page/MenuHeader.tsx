import logoImage from '../../images/logo.png'
import cartImage from '../../images/cart.png'

type MenuHeaderProps = {
    onHomeClick: () => void
    cartNotificationCount: number
    isCartBouncing: boolean
    onCartClick: () => void
    homeLabel?: string
}

function MenuHeader({
    onHomeClick,
    cartNotificationCount,
    isCartBouncing,
    onCartClick,
    homeLabel = 'Home',
}: MenuHeaderProps) {
    return (
        <header className="menu-pop-in menu-delay-0 flex items-center justify-between px-6 pb-5 pt-0 sm:px-10">
            <img
                src={logoImage}
                alt="Boukeyt logo"
                className="h-12 w-12 object-contain sm:h-30 sm:w-30"
            />

            <nav className="font-buenard flex items-center gap-6 text-base text-white sm:gap-10 sm:text-lg">
                <button
                    type="button"
                    onClick={onHomeClick}
                    className="transition-opacity hover:opacity-80"
                >
                    {homeLabel}
                </button>
                <button
                    type="button"
                    onClick={onCartClick}
                    aria-label="Cart"
                    id="menu-header-cart"
                    className={`relative transition-opacity hover:opacity-80 ${isCartBouncing ? 'menu-cart-bump' : ''}`}
                >
                    <img
                        src={cartImage}
                        alt="Cart"
                        className="h-7 w-7 object-contain sm:h-15 sm:w-15"
                    />
                    {cartNotificationCount > 0 && (
                        <span className="font-buenard absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-red-600 px-1 text-xs leading-none text-white sm:h-6 sm:min-w-6 sm:text-sm">
                            {cartNotificationCount}
                        </span>
                    )}
                </button>
            </nav>
        </header>
    )
}

export default MenuHeader
