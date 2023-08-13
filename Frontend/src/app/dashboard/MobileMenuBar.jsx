import React from 'react'
import Link from 'next/link'

export default function MobileMenuBar({ setter }) {
    return (
        <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-black flex [&>*]:my-auto px-2">
            <img src="https://github.com/Hilton-Borah/dummyImageforUrbanGuys/assets/103739534/cd977c0a-ab0d-4060-8f8e-adc3e6d0608a" className="text-4xl flex text-black"
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
            />
            <Link href="/" className="mx-auto">
                {/*eslint-disable-next-line*/}
                <img
                    // src={logo.src}
                    alt="Company Logo"
                    width={50}
                    height={50}
                />
            </Link>
            <Link
                className="text-3xl flex text-white"
                href="/login"
            >
              wdwefer  {/* <FaUser /> */}
            </Link>
        </nav>
    )
}