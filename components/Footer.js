import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>@Woodify <b>2019</b></a>
    </Link>
  </div>
)

export default Header