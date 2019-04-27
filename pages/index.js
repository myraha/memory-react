import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link href="/signin">
      <a>Sign In</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index