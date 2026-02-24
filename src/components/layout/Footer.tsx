"use client";

const Footer = () => {
  return (
    <footer className="text-muted mt-auto flex w-full flex-col items-center justify-center gap-2 bg-transparent px-4 py-4 text-center text-[13px] sm:flex-row sm:justify-between sm:gap-0 sm:px-[30px] sm:text-left sm:text-[15px]">
      <div>© Copyright</div>
      <nav className="flex gap-3 sm:gap-5">
        <a href="#privacy" className="hover:text-primary transition">
          Privacy
        </a>
        <a href="#terms" className="hover:text-primary transition">
          Terms of Policy
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
