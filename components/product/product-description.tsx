import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 md:text-5xl text-2xl font-bold mt-4 md:mt-0">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      <div className="mt-10 text-center">
        <h1 className='font-bold'>Want to Place Bulk Order or Customize design?</h1>
        <Link
          href={'https://wa.link/7j6v4e'}
          target="_blank"
          className="rounded-full bg-blue-600 mt-5"
        >
          <h1 className='bg-blue-600 p-2 rounded-full text-white w-1/3 mx-auto mt-3'>Click Here</h1>
        </Link>
      </div>
    </>
  );
}
