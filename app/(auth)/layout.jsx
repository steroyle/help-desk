import Link from "next/link";
import Image from "next/image";
import Logo from "../components/help-desk-logo.png";

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Image src={Logo} alt="Help desk logo" width={50} quality={100} />
        <h1>Help Desk</h1>
        <Link href="/signup">Signup</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}

export default AuthLayout;