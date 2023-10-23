import { Carousel } from 'components/carousel';
import Footer from 'components/layout/footer';
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
  return (
    <>
      <div>
        <div className="mx-auto mb-2 max-w-7xl px-3">
          <div className="px-0 pt-4 md:px-0 md:pt-2">
            <div className="flex flex-col items-start md:flex-row">
              <div className="w-full md:mr-0 md:w-full">
                <div className="relative h-52 w-full overflow-hidden px-1 py-10 md:h-96">
                  <Image
                    src={
                      'https://legacyatelier.vercel.app/_next/image?url=%2Fbanner1.png&w=640&q=75'
                    }
                    alt={`Slide`}
                    className={`absolute left-0 top-0 h-full w-full rounded-lg object-cover transition-opacity duration-500 md:object-cover`}
                    style={{
                      borderRadius: '8px'
                    }}
                    width={500}
                    height={800}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className="h-full pt-1 md:pt-2">
          <div className="relative mx-auto flex max-w-6xl items-center">
            <div
              id="slider"
              className="scroll scrollbar-hide my-4 h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap py-0 pl-2 md:my-0 md:py-5"
            >
              <div className=" w-8/12 md:w-96">
                <Link href={'/clothes'}>
                  <div
                    style={{
                      borderRadius: '18px',
                      height: '28rem'
                    }}
                    className="relative mx-2 inline-block w-full cursor-pointer bg-slate-100 shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105"
                  >
                    <Image
                      className="mt-16 h-96 w-full object-contain pl-0 md:mt-10"
                      src={'https://legacyatelier.vercel.app/_next/image?url=%2F9.png&w=640&q=75'}
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
                    className="relative  mx-2 inline-block w-full cursor-pointer bg-slate-100 shadow-md duration-300 ease-in-out dark:bg-black md:hover:scale-105"
                  >
                    <Image
                      className="mt-16 h-96 w-full object-contain pl-0 md:mt-16"
                      src={'https://legacyatelier.vercel.app/_next/image?url=%2F8.png&w=640&q=75'}
                      alt="/"
                      style={{
                        borderRadius: '18px'
                      }}
                      width={500}
                      height={500}
                      unoptimized
                    />
                    <div className=" absolute left-3 top-3 md:left-5 md:top-5">
                      <p className="text-4xl font-bold text-slate-800 dark:text-slate-50">
                        Souvenirs
                      </p>
                      <h2 className="text-slate-800 dark:text-slate-50">
                        Quality products for <br /> all events.
                      </h2>
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
                      src={'https://legacyatelier.vercel.app/_next/image?url=%2F5.jpg&w=640&q=75'}
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
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
