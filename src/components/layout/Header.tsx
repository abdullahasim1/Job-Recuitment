"use client";

import Image from "next/image";

const Header = () => {
  return (
    <header className="mx-auto flex h-20 w-full items-center justify-between rounded-b-2xl bg-white/85 px-5 shadow-sm backdrop-blur-md sm:px-8">
      <Image src="/logo.svg" alt="UpMatch" width={131} height={28} />
    </header>
  );
};

export default Header;
