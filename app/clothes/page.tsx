import Image from "next/image";
import Link from "next/link";

export default function ClothesPage() {
  return (
    <div>
      <div className="mx-auto mb-2 max-w-7xl px-3">
        <div className="px-0 pt-4 md:px-0 md:pt-2">
          <h1 className="mx-4 mb-2 text-3xl font-semibold">Clothing</h1>
          <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link
              href={'/search/t-shirts'}
              className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
            >
              <Image
                src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698193486/Picture1__1_-removebg-preview_dxzoud.png"
                alt="T-shirts"
                width={300}
                height={300}
                unoptimized
                className="h-full w-full object-contain"
              />
              <p className="relative bottom-10 mt-2 text-lg font-bold">T-shirts</p>
            </Link>
            <Link
              href={'/search/sweat-shirt'}
              className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
            >
              <Image
                src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698193532/Picture1__2_-removebg-preview_bhgsme.png"
                alt="Jeans"
                width={300}
                height={300}
                unoptimized
                className="h-full w-full rounded-lg object-contain"
              />
              <p className="relative bottom-10 mt-2 text-lg font-bold">Sweat Shirt</p>
            </Link>
            <Link
              href={'/search/hoodie'}
              className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
            >
              <Image
                src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698193570/75e0480b4c6b8ae7a6ec02d57f519f12__1_-removebg-preview_cfgqmr.png"
                alt="Dresses"
                width={300}
                height={300}
                unoptimized
                className="h-full w-full rounded-lg object-contain"
              />
              <p className="relative bottom-10 mt-2 text-lg font-bold">Hoodie</p>
            </Link>
            <Link
              href={'/search/jackets'}
              className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
            >
              <Image
                src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698193614/c26e5c6392f3881006c7d500839a337c-removebg-preview_mhb7jz.png"
                alt="Shoes"
                width={300}
                height={300}
                unoptimized
                className="h-full w-full rounded-lg object-contain"
              />
              <p className="relative bottom-10 mt-2 text-lg font-bold">Jackets</p>
            </Link>
            <Link
              href={'/search/jean-shirts'}
              className="h-62 cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:h-96 md:hover:scale-105"
            >
              <Image
                src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698193655/1XX-removebg-preview_fzgt90.png"
                alt="Shoes"
                width={300}
                height={300}
                unoptimized
                className="h-full w-full rounded-lg object-contain"
              />
              <p className="relative bottom-10 mt-2 text-lg font-bold">Jean Shirts</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
