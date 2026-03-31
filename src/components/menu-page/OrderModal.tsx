import { useState } from 'react'
import groupNine from '../../images/Group 9.png'

type OrderModalProps = {
    isOpen: boolean
    onClose: () => void
}

function OrderModal({ isOpen, onClose }: OrderModalProps) {
    const [quantity, setQuantity] = useState(1)

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1))
    }

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
    }

    if (!isOpen) {
        return null
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-[3px] px-4"
            onClick={onClose}
            role="presentation"
        >
            <div
                className="order-modal-pop relative h-[90vh] w-full max-w-6xl overflow-y-auto overflow-x-hidden rounded-2xl border border-white/35 bg-[#6B5A5A] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.45)] sm:h-[86vh] sm:p-8"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Order modal"
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close order modal"
                    className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/45 bg-white/10 text-white transition hover:bg-white/20"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                            d="M6 6l12 12M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <div className="grid h-full min-h-0 grid-cols-1 gap-6 pt-4 lg:grid-cols-2">
                    <section className="relative grid min-h-120 grid-rows-[auto_1fr_auto] items-start gap-3 rounded-2xl bg-[#7A6767]/50 px-4 pb-5 pt-2">
                        <h2
                            className="font-comforter-brush text-center text-4xl text-white"
                            style={{ lineHeight: '150%' }}
                        >
                            Cinderella
                        </h2>

                        <div className="flex w-full items-center justify-center self-center overflow-hidden">
                            <img
                                src={groupNine}
                                alt="Cinderella flower"
                                className="h-auto max-h-70 w-full max-w-80 object-contain sm:max-h-85"
                            />
                        </div>

                        <div className="font-buenard mt-2 grid w-full grid-cols-2 gap-3">
                            <label className="block text-left text-sm text-white/80">
                                Size
                                <select
                                    defaultValue="medium"
                                    className="mt-1 w-full rounded-lg bg-[#5f4e4e] px-3 py-2 text-sm text-white outline-none transition focus:bg-[#6a5959]"
                                >
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </label>
                            <label className="block text-left text-sm text-white/80">
                                Wrap Color
                                <select className="mt-1 w-full rounded-lg bg-[#5f4e4e] px-3 py-2 text-sm text-white outline-none transition focus:bg-[#6a5959]">
                                    <option value="blush">Blush</option>
                                    <option value="cream">Cream</option>
                                    <option value="sage">Sage</option>
                                </select>
                            </label>
                        </div>

                        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center gap-1">
                            <p className="font-buenard text-base text-white">Quantity</p>
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    type="button"
                                    onClick={decreaseQuantity}
                                    aria-label="Decrease quantity"
                                    className="grid h-8 w-8 place-items-center rounded-full border border-white/60 bg-white/10 text-lg text-white transition hover:bg-white/20"
                                >
                                    -
                                </button>
                                <p className="font-buenard min-w-3 text-center text-xl text-white">{quantity}</p>
                                <button
                                    type="button"
                                    onClick={increaseQuantity}
                                    aria-label="Increase quantity"
                                    className="grid h-8 w-8 place-items-center rounded-full border border-white/60 bg-white/10 text-lg text-white transition hover:bg-white/20"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="font-buenard relative min-h-140 rounded-2xl bg-[#5F4E4E]/50 p-5 pb-16 text-white">
                        <div className="flex h-full flex-col gap-4">
                            <div>
                                <h3 className="text-base text-white/80">GCash Payment Details</h3>
                                <div className="mt-2 rounded-xl bg-white/65 px-4 py-3 text-sm text-[#3b2d2d]">
                                    <p>GCash Number: 0961-147-1064</p>
                                    <p>Account Name: Angela Kate Gumatas</p>
                                </div>
                                <p className="mt-1 text-xs text-red-200">
                                    Send payment first and enter your reference below.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm text-white/80">Details</h4>
                                <div className="mt-2 grid gap-2">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="rounded-xl bg-white/65 px-4 py-2 text-sm text-[#3b2d2d] outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Contact Number"
                                        className="rounded-xl bg-white/65 px-4 py-2 text-sm text-[#3b2d2d] outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="rounded-xl bg-white/65 px-4 py-2 text-sm text-[#3b2d2d] outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Complete Address"
                                        className="rounded-xl bg-white/65 px-4 py-2 text-sm text-[#3b2d2d] outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end">
                                <p className="text-sm text-white/90">Total Amount: ₱350</p>
                            </div>

                            <div>
                                <h4 className="text-sm text-white/80">GCash Payment Proof</h4>
                                <div className="mt-2 rounded-xl bg-white/65 px-4 py-3">
                                    <input
                                        type="text"
                                        placeholder="Your GCash Number"
                                        className="w-full rounded-lg bg-white/85 px-3 py-2 text-sm text-[#3b2d2d] outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="GCash Reference Number"
                                        className="mt-2 w-full rounded-lg bg-white/85 px-3 py-2 text-sm text-[#3b2d2d] outline-none"
                                    />
                                </div>
                                <p className="mt-1 text-xs text-red-200">
                                    Enter the 13-digit reference number from your GCash receipt.
                                </p>
                            </div>

                            <div className="pointer-events-none absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 justify-center">
                                <button
                                    type="button"
                                    className="pointer-events-auto rounded-full bg-white/70 px-6 py-2 text-sm text-[#3b2d2d] shadow-md transition hover:bg-white"
                                >
                                    Submit Order
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default OrderModal
