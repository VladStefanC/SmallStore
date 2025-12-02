import Stripe from "stripe";
import "../../../envConfig.js";

const API_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(API_KEY);

//Stripe get request to get the product and filter data
export async function GET() {
  try {
    //fetch all the products
    const products = await stripe.products.list({ active: true });

    //fetch all the prices
    const prices = await stripe.prices.list({ active: true });

    //combine products and their coresponding prices
    const combinedData = products.data.map((product) => {
      const productPrices = prices.data.filter((price) => {
        return price.product === product.id;
      });

      return {
        ...product,
        prices: productPrices.map((price) => {
          return {
            id: price.id,
            unit_amount: price.unit_amount,
            currency: price.currency,
            recurring: price.recurring
          };
        }),
      };
    });

    //send the combined data as json

    return Response.json(combinedData)


  } catch (err) {
    console.error("error fetching data from stripe: ", err.message);
    return Response.json({ error: "Failed to fetch data from stripe" });
  }
}
