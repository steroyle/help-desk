import Image from "next/image";
import Link from "next/link";
import Logo from "./help-desk-logo.png";

const NavBar = () => {
  return (
    <nav>
      <Image src={Logo} alt="Help desk logo" width={50} quality={100} />
      <h1>Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default NavBar;