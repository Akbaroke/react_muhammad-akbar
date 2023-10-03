export default function Navbar() {
  return (
    <nav className="fixed z-40 right-0 left-0 top-0 h-[60px] flex items-center justify-between px-[20px] bg-black/30 backdrop-blur-lg">
      <a href="" className="text-white tracking-[2px]">
        <h1>WEBSITE LOGO</h1>
      </a>
      <ul className="flex items-center gap-[30px] [&>li>a]:text-white [&>li>a]:tracking-[1px]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
