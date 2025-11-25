import Link from "next/link"
export default function NotFound() {
  return (
    <div>
      <h2>PAGE NOT MADE BECAUSE THE DEV IS LAZY</h2>
      <Link href={'/'}>
        <button href={'/'}>Home</button>
      </Link>
    </div>
  );
}
