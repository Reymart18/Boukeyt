import { useState } from 'react'
import mainBouquet from '../../images/flower2.png'
import secondBouquet from '../../images/flowerr.png'
import messageBox from '../../images/Frame2.png'
import priceTag from '../../images/pricetag.png'
import leftArrow from '../../images/left.png'
import rightArrow from '../../images/right.png'

function MenuBouquetPanel() {
    const bouquets = [mainBouquet, secondBouquet]
    const [bouquetIndex, setBouquetIndex] = useState(0)

    const showPreviousFlower = () => {
        setBouquetIndex((prev) => (prev - 1 + bouquets.length) % bouquets.length)
    }

    const showNextFlower = () => {
        setBouquetIndex((prev) => (prev + 1) % bouquets.length)
    }

    return (
        <div className="menu-pop-in menu-delay-2 relative flex items-end justify-center lg:mb-10">
            <div className="absolute right-2 top-2 z-30 flex items-center gap-3 sm:right-4 sm:top-4 lg:right-6 lg:top-5">
                <button
                    type="button"
                    aria-label="Previous"
                    className="transition-opacity hover:opacity-80"
                    onClick={showPreviousFlower}
                >
                    <img
                        src={leftArrow}
                        alt="Previous"
                        className="h-5 w-5 object-contain sm:h-7 sm:w-7"
                    />
                </button>
                <button
                    type="button"
                    aria-label="Next"
                    className="transition-opacity hover:opacity-80"
                    onClick={showNextFlower}
                >
                    <img
                        src={rightArrow}
                        alt="Next"
                        className="h-5 w-5 object-contain sm:h-7 sm:w-7"
                    />
                </button>
            </div>
            <div className="absolute left-2 top-2 z-10 sm:left-[-8%] sm:top-3 lg:left-[-8%] lg:top-[8%]">
                <img
                    src={messageBox}
                    alt="Message box"
                    className="h-[30px] w-[200px] drop-shadow-md"
                />
                <p className="font-lateef absolute inset-0 flex items-center justify-center pb-0 text-lg text-white sm:text-xl">
                    12 Stocks left
                </p>
            </div>
            <img
                id="menu-active-flower"
                key={bouquetIndex}
                src={bouquets[bouquetIndex]}
                alt="Tulips bouquet"
                className="flower-swap max-h-[65vh] w-full max-w-[520px] object-contain"
                style={{
                    filter: 'drop-shadow(3px 10px 60px rgba(214,174,180,0.63))',
                }}
            />
            <div className="pricetag-swing pointer-events-none absolute bottom-4 right-3 z-20 w-28 sm:bottom-6 sm:right-7 sm:w-32 lg:bottom-8 lg:right-6 lg:w-36">
                <img
                    src={priceTag}
                    alt="Price tag"
                    className="w-full rotate-0 drop-shadow-xl"
                />
                <p className="font-cormorant-infant absolute inset-0 flex items-center justify-center pt-15 text-lg text-[#2d2327] sm:text-xl lg:text-xl">
                    ₱550
                </p>
                <p className="font-cormorant-infant absolute inset-0 flex items-center justify-center pt-30 text-lg text-[#2d2327] sm:text-xl lg:text-sm">
                    Medium
                </p>
            </div>
        </div>
    )
}

export default MenuBouquetPanel
