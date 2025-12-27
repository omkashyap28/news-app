import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => (
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
    <aside className="grid-flow-col items-center">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a>
        <FaFacebook className="text-2xl" />
      </a>
      <a>
        <FaInstagram className="text-2xl" />
      </a>
    </nav>
  </footer>
);

export default Footer;