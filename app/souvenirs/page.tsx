import Image from "next/image";
import Link from "next/link";

export default function SouvenirsPage() {
    return (
      <div>
        <div className="mx-auto mb-2 max-w-7xl px-3">
          <div className="px-0 pt-4 md:px-0 md:pt-2">
            <h1 className="mx-4 mb-0 text-2xl font-semibold">Souvenirs, Stationaries</h1>
            <h1 className="mx-4 mb-2 text-2xl font-semibold">& Gift Items</h1>
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link
                href={'/search/note-pads'}
                className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
              >
                <Image
                  src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698194467/20230927_131639-removebg-preview_wpsffd.png"
                  alt="T-shirts"
                  width={300}
                  height={300}
                  unoptimized
                  className="h-full w-full rounded-lg object-contain"
                />
                <p className="relative bottom-10 mt-2 text-lg font-bold">Note Pads</p>
              </Link>
              <Link
                href={'/search/sketch-pads'}
                className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
              >
                <Image
                  src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698194128/20230927_131920-removebg-preview_rszsnk.png"
                  alt="Jeans"
                  width={300}
                  height={300}
                  unoptimized
                  className="h-full w-full rounded-lg object-contain"
                />
                <p className="relative bottom-10 mt-2 text-lg font-bold">Sketch Pads</p>
              </Link>
              <Link
                href={'/search/gift-boxes'}
                className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
              >
                <Image
                  src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698194160/2XX-removebg-preview_z5tust.png"
                  alt="Dresses"
                  width={300}
                  height={300}
                  unoptimized
                  className="h-full w-full rounded-lg object-contain"
                />
                <p className="relative bottom-10 mt-2 text-lg font-bold">Gift Boxes</p>
              </Link>
              <Link
                href={'/search/bottles'}
                className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
              >
                <Image
                  src="https://legacyatelier.vercel.app/_next/image?url=%2F12.png&w=640&q=75"
                  alt="Shoes"
                  width={300}
                  height={300}
                  unoptimized
                  className="h-full w-full rounded-lg object-contain"
                />
                <p className="relative bottom-10 mt-2 text-lg font-bold">Bottles</p>
              </Link>
              <Link
                href={'/search/mugs'}
                className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
              >
                <Image
                  src="https://legacyatelier.vercel.app/_next/image?url=%2F14.png&w=640&q=75"
                  alt="Shoes"
                  width={300}
                  height={300}
                  unoptimized
                  className="h-full w-full rounded-lg object-contain"
                />
                <p className="relative bottom-10 mt-2 text-lg font-bold">Mugs</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
