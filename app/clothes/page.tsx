import Image from "next/image";
import Link from "next/link";

export default function ClothesPage() {
  return (
    <div>
      <div className="mx-auto mb-2 max-w-7xl px-3">
        <div className="px-0 pt-4 md:px-0 md:pt-2">
          <h1 className="mx-4 mb-2 text-3xl font-semibold">Clothes</h1>
          <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href={'/search/t-shirts'}>
              <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                <Image
                  src="https://legacyatelier.vercel.app/_next/image?url=%2F9.png&w=640&q=75"
                  alt="T-shirts"
                  width={300}
                  height={300}
                  unoptimized
                />
                <p className="mt-2 text-lg font-bold">T-shirts</p>
              </div>
            </Link>
            <Link href={'/search/sweat-shirt'}>
              <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698098679/Picture1_isvhma.png"
                  alt="Jeans"
                  width={300}
                  height={300}
                  unoptimized
                />
                <p className="mt-2 text-lg font-bold">Sweat Shirt</p>
              </div>
            </Link>
            <Link href={'/search/hoodie'}>
              <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698099004/75e0480b4c6b8ae7a6ec02d57f519f12_ybu5hs.jpg"
                  alt="Dresses"
                  width={300}
                  height={300}
                  unoptimized
                />
                <p className="mt-2 text-lg font-bold">Hoodie</p>
              </div>
            </Link>
            <Link href={'/search/jackets'}>
              <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698099025/c26e5c6392f3881006c7d500839a337c_tfjcms.jpg"
                  alt="Shoes"
                  width={300}
                  height={300}
                  unoptimized
                />
                <p className="mt-2 text-lg font-bold">Jackets</p>
              </div>
            </Link>
            <Link href={'/search/jean-shirts'}>
              <div className="cursor-pointer rounded-lg bg-white text-center shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105">
                <Image
                  src="https://res.cloudinary.com/dkhoomk9a/image/upload/v1698098977/1XX_au2hac.jpg"
                  alt="Shoes"
                  width={300}
                  height={300}
                  unoptimized
                />
                <p className="mt-2 text-lg font-bold">Jean Shirts</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
