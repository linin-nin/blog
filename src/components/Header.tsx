import Magnetic from "./magnetic"
import Link from "next/link"

const Header = () => {
  return (
    <div className="py-5">
      <ul className="item-center">
        <Magnetic>
          <Link href="/">
            <li>Home</li>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link href="/">
            <li>About Me</li>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link href="/">
            <li>Works</li>
          </Link>
        </Magnetic>
        
      </ul>
    </div>
  )
}

export default Header