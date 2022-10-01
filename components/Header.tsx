import Tab from "./Tab";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex-shrink-0">
      <nav className="flex flex-wrap items-center justify-center space-x-2 p-6">
        <Tab text="Home" href="/" />
        <Tab text="Blob" href="/experiments/blob" />
        <Tab text="Rolling" href="/experiments/rolling" />
      </nav>
    </header>
  );
};

export default Header;
