import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = res.json()

  return data 
}

export default async function Home() {
  const products = await getProducts();
  console.log(products)
  return (
    <>
      <ImageBanner />
      <section>
        <Products />
      </section>
    </>
  );
}
