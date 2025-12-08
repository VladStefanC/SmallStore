import Link from "next/link";
export default function SuccesPage() {
  return (
    <div className="page-container">
      <h2 className="text-large">🎉 Thank you for the purchase 🎉 </h2>
      <Link href={"/"}>
        <button href={"/"}>&larr; Home</button>
      </Link>
    </div>
  );
}
