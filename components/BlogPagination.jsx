import React from "react";
import Link from "next/link";

export default function App() {
    return (
        <div className="flex justify-center ">
            <ul className="list-style-none flex border border-5 border-slate-500 max-w-[16rem] justify-center items-center shadow-2xl">
                <li>
                    <Link
                        className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 "
                        href="#!"
                    >
                        Previous
                    </Link>
                </li>
                <li>
                    <Link
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
                        href="#!"
                    >
                        1
                    </Link>
                </li>
                <li aria-current="page">
                    <Link
                        className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                        href="#!"
                    >
                        2
                        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                            (current)
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
                        href="#!"
                    >
                        3
                    </Link>
                </li>
                <li>
                    <Link
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                        href="#!"
                    >
                        Next
                    </Link>
                </li>
            </ul>
        </div>
    );
}