import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center', {
        'h-[40px] w-[80px] rounded-xl': !size,
        'h-[30px] w-[30px] rounded-lg': size === 'sm'
      })}
    >
      <LogoIcon
        className={clsx({
          'h-[40px] w-[80px]': !size,
          'h-[28px] w-[28px]': size === 'sm'
        })}
      />
    </div>
  );
}
