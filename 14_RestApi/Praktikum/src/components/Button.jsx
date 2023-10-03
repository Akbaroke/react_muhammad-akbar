import { Loader } from '@mantine/core';
import cn from '../utils/nc';

const Button = ({ type, className, children, isLoading, isDisabled, onClick, icon }) => {
  return (
    <button
      type={type || 'button'}
      disabled={isLoading || isDisabled}
      className={cn('rounded-[10px] shadow-md min-w-[50px] h-[40px] font-bold text-[14px] active:scale-95 active:shadow-none transition-all px-6 capitalize bg-[#34A853] text-white', className, {
        'grid place-items-center opacity-70 shadow-none active:scale-100': isLoading || isDisabled,
        'cursor-not-allowed': isDisabled,
        'cursor-wait': isLoading,
        'flex items-center gap-[5px] [&>svg]:mb-[2px] [&>svg]:text-[19px]': !!icon,
      })}
      onClick={onClick}>
      {isLoading ? <Loader style={{ fill: '#fff' }} variant="dots" size="sm" /> : children}
      {icon}
    </button>
  );
};
export default Button;
