import Image from "next/image";
import Link from "next/link";

export default function SouvenirsPage() {
    return (
      <div>
        <div className="mx-auto mb-2 max-w-7xl px-3">
          <div className="px-0 pt-4 md:px-0 md:pt-2">
            <h1 className="mx-4 mb-2 text-3xl font-semibold">Souvenirs | Stationaries</h1>
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link href={'/search/note-pads'}>
                <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                  <Image
                    src="https://legacyatelier.vercel.app/_next/image?url=%2F8.png&w=640&q=75"
                    alt="T-shirts"
                    width={300}
                    height={300}
                    unoptimized
                  />
                  <p className="mt-2 text-lg font-bold">Note Pads</p>
                </div>
              </Link>
              <Link href={'/search/sketch-pads'}>
                <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                  <Image
                    src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698103395/20230927_131920_kp1m2f.jpg"
                    alt="Jeans"
                    width={300}
                    height={300}
                    unoptimized
                  />
                  <p className="mt-2 text-lg font-bold">Sketch Pads</p>
                </div>
              </Link>
              <Link href={'/search/gift-boxes'}>
                <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                  <Image
                    src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698103414/1XX_ur9wjx.jpg"
                    alt="Dresses"
                    width={300}
                    height={300}
                    unoptimized
                  />
                  <p className="mt-2 text-lg font-bold">Gift Boxes</p>
                </div>
              </Link>
              <Link href={'/search/bottles'}>
                <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                  <Image
                    src="https://legacyatelier.vercel.app/_next/image?url=%2F12.png&w=640&q=75"
                    alt="Shoes"
                    width={300}
                    height={300}
                    unoptimized
                  />
                  <p className="mt-2 text-lg font-bold">Bottles</p>
                </div>
              </Link>
              <Link href={'/search/mugs'}>
                <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                  <Image
                    src="https://legacyatelier.vercel.app/_next/image?url=%2F14.png&w=640&q=75"
                    alt="Shoes"
                    width={300}
                    height={300}
                    unoptimized
                  />
                  <p className="mt-2 text-lg font-bold">Mugs</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
