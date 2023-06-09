import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"

export default function Header(options) {
    return (
        <div className="flex justify-between mx-2 max-w-6xl items-center py-6 sm:mx-auto ">
            <div className="flex">
                <MenuItem title="Home" address="/" Icon={ AiFillHome} />
                <MenuItem title="About" address="/about" Icon={ BsFillInfoCircleFill } />
            </div>
            <div className="">
                <Link href="/">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb </span>
                        <span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}   