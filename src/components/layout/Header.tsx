"use client";

import Image from "next/image";

const Header = () => {
  return (
    <header className="mx-auto flex h-20 w-full items-center justify-between rounded-b-2xl bg-white px-5 shadow-md sm:px-8">
      <Image src="/logo.png" alt="Logo" width={131} height={28} />
    </header>
  );
};

export default Header;
