import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";
import { fetchProductsFromStripe } from "@/lib/stripeProducts";

export async function getProducts() {
  return fetchProductsFromStripe();
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
