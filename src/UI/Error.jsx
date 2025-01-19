function Error({ children }) {
  return (
    <div className="flex h-[80lvh] items-center justify-center">
      <div className="title-font text-center text-[24px] md:text-[48px]">
        {children}
      </div>
    </div>
  );
}

export default Error;
