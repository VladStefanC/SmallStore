import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  const res = await fetch(`${baseURL}api/products`);
  const data = await res.json()

  return data ;
}

export default async function Home() {
  const products = await getProducts();

  let planner = null
  let stickers = []

  for ( let product of products) {
    if (product.name === 'Medieval Dragon Planner.png'){
      planner = product
      continue
    }

    stickers.push(product)

  }


  return (
    <>
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
