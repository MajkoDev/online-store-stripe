import AppLayout from "@/components/Layout";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }) {
  return (
    <CartProvider cartMode="checkout-session" stripe={stripeKey} currency="USD">
      <AppLayout>
        <Component {...pageProps} />
        <Toaster />
      </AppLayout>
    </CartProvider>
  );
}
