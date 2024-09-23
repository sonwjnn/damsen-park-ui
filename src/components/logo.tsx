export const Logo = () => {
  return (
    <div className="flex flex-col gap-y-1 w-[180px] items-center justify-center">
      <img src="/public/logo2.png" className="object-cover" />
      <img
        src="/public/logo1.png"
        className="object-cover"
        width={85}
        height={68}
      />
    </div>
  );
};
