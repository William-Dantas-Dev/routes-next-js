import Link from "next/link";

export default function Home(){
  return <>
    <h1>Welcome Home Page!</h1>
    <Link href="/login"><p>Login</p></Link>
    <Link href="/about"><p>About</p></Link>
    <Link href="/blog"><p>Blog</p></Link>
    <Link href="/dashboard"><p>Dashboard</p></Link>
    <Link href="/docs"><p>Docs</p></Link>
    <Link href="/order-products"><p>Order Product</p></Link>
    <Link href="/products"><p>Products</p></Link>
    <Link href="/profile"><p>Profile</p></Link>
  </>
}