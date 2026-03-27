import logoImage from '../../images/logo.png'

type FloatingLogoProps = {
    logoRef: React.RefObject<HTMLDivElement>
    hidden?: boolean
}

function FloatingLogo({ logoRef, hidden = false }: FloatingLogoProps) {
    return (
        <div ref={logoRef} className={`absolute right-3 top-3 z-30 flex h-20 w-20 items-center justify-center overflow-hidden rounded-[64%_36%_58%_42%/45%_62%_38%_55%] border border-white/45 bg-white/20 shadow-xl ring-1 ring-white/30 backdrop-blur-lg sm:right-8 sm:top-8 sm:h-24 sm:w-24 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
            <div className="pointer-events-none absolute -left-2 -top-2 h-8 w-8 rounded-full bg-white/45 blur-[2px]" />
            <div className="pointer-events-none absolute bottom-1 right-1 h-6 w-6 rounded-full bg-white/30 blur-[1px]" />
            <img
                src={logoImage}
                alt="Boukeyt logo"
                className="relative z-10 h-14 w-14 object-contain sm:h-250 sm:w-250"
            />
        </div>
    )
}

export default FloatingLogo
