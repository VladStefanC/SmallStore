import { fetchProductsFromStripe } from "@/lib/stripeProducts";

export const dynamic = "force-dynamic";
export const revalidate = 0;

//Stripe get request to get the product and filter data
export async function GET() {
  try {
    //fetch Stripe data and send as json
    const combinedData = await fetchProductsFromStripe();

    return Response.json(combinedData)


  } catch (err) {
    console.error("error fetching data from stripe: ", err.message);
    return Response.json({ error: "Failed to fetch data from stripe" });
  }
}
