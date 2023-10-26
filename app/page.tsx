import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const { sortKey, reverse } = defaultSort;
  const products = await getCollectionProducts({ collection: 'new-arrivals', sortKey, reverse });
  const images = [
    'https://legacyatelier.vercel.app/_next/image?url=%2Fbanner1.png&w=640&q=75',
    'https://legacyatelier.vercel.app/_next/image?url=%2Fbanner2.png&w=640&q=75',
  ];
  return (
    <>
      <div>
        <div className="mx-auto mb-2 max-w-7xl px-3">
          <div className="px-0 pt-4 md:px-0 md:pt-2">
            <div className="flex flex-col items-start md:flex-row">
              <div className="w-full md:mr-0 md:w-full">
                <div className="relative w-full overflow-hidden">
                  <div className="carousel flex">
                    {images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <img src={image} alt={`Image ${index}`} className="w-full rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className="h-full pt-1 md:pt-2">
          <div className="scrollbar-hide relative mx-auto flex max-w-6xl items-center">
            <div
              id="slider"
              className="scroll no-scrollbar my-4 h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap py-0 pl-2 md:my-0 md:py-5"
            >
              <div className=" w-8/12 md:w-96">
                <Link href={'/clothes'}>
                  <div
                    style={{
                      borderRadius: '18px',
                      height: '28rem'
                    }}
                    className="relative mx-2 inline-block w-full cursor-pointer bg-white shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105"
                  >
                    <Image
                      className="mt-16 h-96 w-full object-contain pl-0 md:mt-10"
                      src={
                        'https://res.cloudinary.com/dkhoomk9a/image/upload/v1698193486/Picture1__1_-removebg-preview_dxzoud.png'
                      }
                      alt="/"
                      width={500}
                      height={500}
                      unoptimized
                    />
                    <div className=" absolute left-3 top-3 md:left-5 md:top-5">
                      <p className="text-4xl font-bold text-slate-800 dark:text-slate-50">
                        Clothes
                      </p>
                      <h2 className="text-slate-800 dark:text-slate-50">
                        Get the best and <br /> beyond.
                      </h2>
                    </div>
                  </div>
                </Link>
                <Link href={'/souvenirs'}>
                  <div
                    style={{
                      borderRadius: '18px',
                      height: '28rem'
                    }}
                    className="relative  mx-2 inline-block w-full cursor-pointer bg-white shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105"
                  >
                    <Image
                      className="mt-24 h-80 w-full object-contain pl-0 md:mt-28"
                      src={
                        'https://res.cloudinary.com/dkhoomk9a/image/upload/v1698194128/20230927_131920-removebg-preview_rszsnk.png'
                      }
                      alt="/"
                      style={{
                        borderRadius: '18px'
                      }}
                      width={400}
                      height={400}
                      unoptimized
                    />
                    <div className=" absolute left-3 top-3 md:left-5 md:top-5">
                      <p className="text-2xl font-bold text-slate-800 dark:text-slate-50">
                        Souvenirs,
                      </p>
                      <p className="text-2xl font-bold text-slate-800 dark:text-slate-50">
                        Stationaries
                      </p>
                      <p className="text-2xl font-bold text-slate-800 dark:text-slate-50">
                        & Gift Items
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={'/search/interior-decor'}>
                  <div
                    style={{
                      borderRadius: '18px'
                    }}
                    className="relative mx-2 inline-block w-full cursor-pointer bg-white shadow-md duration-300 ease-in-out md:w-80 md:hover:scale-105"
                  >
                    <Image
                      className="w-full object-cover"
                      src={
                        'https://res.cloudinary.com/dkhoomk9a/image/upload/v1698194990/20230809_225814_qcymio.jpg'
                      }
                      alt="/"
                      style={{
                        borderRadius: '18px',
                        height: '28rem'
                      }}
                      width={500}
                      height={500}
                      unoptimized
                    />
                    <div className=" absolute left-3 top-3 md:left-5 md:top-5">
                      <p
                        className="text-3xl font-bold text-white"
                        // style={{ color: '#E78917' }}
                      >
                        Interior Decor
                      </p>
                      <h2
                        // style={{ color: '#0D1017' }}
                        className="text-white"
                      >
                        According to your <br /> taste.
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense>
        <div className="mx-auto mb-10 max-w-6xl px-3">
          <h1 className="mx-4 mb-4 text-3xl font-semibold">New Arrivals</h1>
          <div className="mx-auto mb-2 max-w-7xl px-3">
            {products.length === 0 ? (
              <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
              <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                <ProductGridItems products={products} />
              </Grid>
            )}
          </div>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
