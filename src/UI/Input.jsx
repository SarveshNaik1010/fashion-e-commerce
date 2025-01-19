function Input({
  type,
  value,
  onChange,
  placeholder,
  extraStyles,
  borderType = '',
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-b-2 border-stone-400 outline-none transition-all duration-200 focus:border-stone-900 ${extraStyles}`}
    />
  );
}

export default Input;
