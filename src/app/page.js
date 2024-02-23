import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 style={{color: "red", backgroundColor:"green"}}>My First App</h1>

    <Link href="/about">Go to about page</Link>
    </>

  );
}
