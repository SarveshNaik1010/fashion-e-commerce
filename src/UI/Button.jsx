function Button({
  type = 'button',
  onClick,
  variant = 'primary',
  disabled = false,
  extraStyles = '',
  children,
}) {
  const baseStyles =
    'px-2 py-1 md:px-4 md:py-2 transition-all duration-200';
  const variants = {
    primary:
      'bg-stone-900 text-stone-50 border-2 border-stone-900 hover:text-stone-900 hover:bg-stone-50',
    secondary:
      'text-stone-900 border-b-2 border-stone-900 hover:border-[#fff00000] hover:font-semibold',

    iconButton:
      'text-[28px] cursor-pointer border-2 border-[#fff00000] hover:border-stone-900',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${baseStyles} ${variants[variant]} ${extraStyles} ${
        disabled ? disabledStyles : ''
      }`}
      // className=""
    >
      {children}
    </button>
  );
}

export default Button;
