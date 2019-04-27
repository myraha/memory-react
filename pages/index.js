import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link href="/signin">
      <a>Sign In</a>
    </Link>
    {/* <div className={css.example}>Hello World!</div> */}
  </div>
)

export default Index