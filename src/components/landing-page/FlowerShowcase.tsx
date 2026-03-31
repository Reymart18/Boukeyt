import React from 'react'
import flowerImage from '../../images/flower.png'
import flowerImage2 from '../../images/flower2.png'

const FLOWER_IMAGES = [flowerImage, flowerImage2]
const FLOWER_NAMES = ['Cinderella', 'Snow White']
const BUTTERFLY_STICKER_URL = 'https://media.tenor.com/rpx-uyV0QysAAAAj/butterfly.gif'

const BUTTERFLY_POSITIONS = [
    '-left-6 -top-6 -rotate-12 sm:-left-[-70%] sm:-top-[-8%]',
]

function FlowerShowcase() {
    const [flowerIndex, setFlowerIndex] = React.useState(0)

    React.useEffect(() => {
        const intervalId = window.setInterval(() => {
            setFlowerIndex((prev) => (prev + 1) % FLOWER_IMAGES.length)
        }, 5000)

        return () => {
            window.clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="flex justify-center md:justify-start">
            <div className="relative">
                {BUTTERFLY_POSITIONS.map((positionClass, index) => (
                    <img
                        key={positionClass}
                        src={BUTTERFLY_STICKER_URL}
                        alt="Butterfly sticker"
                        className={`pointer-events-none absolute z-10 h-24 w-24 ${positionClass} ${index % 2 === 0 ? 'animate-bounce' : 'animate-pulse'} sm:h-32 sm:w-32`}
                    />
                ))}
                <div className="relative flex h-[22rem] w-[18rem] items-center justify-center overflow-hidden rounded-[58%_42%_63%_37%/40%_61%_39%_60%] border border-white/0 bg-white/0 p-4 shadow-xl ring-1 ring-white/18 backdrop-blur-md sm:h-[32rem] sm:w-[27rem]">
                    <p className="font-buenard absolute left-1/2 top-[3.25rem] -translate-x-1/2 text-center text-sm font-medium tracking-wide text-[#2f1f26] sm:text-base">
                        {FLOWER_NAMES[flowerIndex]}
                    </p>
                    <img
                        src={FLOWER_IMAGES[flowerIndex]}
                        alt="Flower bouquet"
                        className="h-full w-full object-contain pt-8"
                        style={{
                            filter:
                                'drop-shadow(0 0 34px rgba(214,174,180,0.56)) drop-shadow(0 16px 24px rgba(87,60,64,0.34))',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FlowerShowcase
