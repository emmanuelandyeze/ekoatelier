import Image from 'next/image';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    // <div
    //   className={clsx(
    //     'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black',
    //     {
    //       relative: label,
    //       'border-2 border-blue-600': active,
    //       'border-neutral-200 dark:border-neutral-800': !active
    //     }
    //   )}
    // >
    //   {props.src ? (
    //     // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
    //     <Image
    //       className={clsx('relative h-full w-full object-cover', {
    //         'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
    //       })}
    //       {...props}
    //     />
    //   ) : null}
    //   {label ? (
    //     <Label
    //       title={label.title}
    //       amount={label.amount}
    //       currencyCode={label.currencyCode}
    //       position={label.position}
    //     />
    //   ) : null}
    // </div>
    <div className="rounded-lg bg-white shadow-lg dark:bg-black">
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image {...props} className="object-cover" />
      ) : null}

      {label ? (
        <div className="px-6 pt-40">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{label.title}</h2>
          <p className="mt-2 text-lg text-gray-700 dark:text-white">₦{label.amount}</p>
        </div>
      ) : null}
    </div>
  );
}
