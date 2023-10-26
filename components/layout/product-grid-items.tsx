import Grid from 'components/grid';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            {/* <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            /> */}
            <div
              style={{
                borderRadius: '18px',
                // height: '24rem'
              }}
              className="mx-0 my-4 inline-block w-full cursor-pointer bg-white shadow-md duration-300 ease-in-out dark:bg-black"
            >
              <Image
                className="h-48 w-full object-cover pl-0 md:mt-0 md:h-80 rounded-t-lg"
                src={product.featuredImage?.url}
                alt="/"
                width={500}
                height={500}
                unoptimized
              />
              <div className="px-4 py-2">
                <p className="text-lg font-bold text-slate-800 dark:text-slate-50 truncate">
                  {product.title}
                </p>
                <h2 className="text-slate-800 dark:text-slate-50">
                  ₦{product.priceRange.maxVariantPrice.amount}
                </h2>
              </div>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
