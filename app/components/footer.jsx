// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

// @flow strict
function Footer() {
  return (
    <footer className="border-t bg-[#0d1224] border-[#353951] text-white text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} AI Engineer Portfolio by Ajay CK
      </p>
    </footer>
  );
}


export default Footer;