import Image from "next/image";
export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Image src="/icon0.svg" alt="Logo" width={100} height={100} />
    </div>
  );
};
