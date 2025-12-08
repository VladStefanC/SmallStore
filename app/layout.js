import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Small Store",
  description: "A small store for programmers and productivity fiends",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
    <html lang="en">
      <Head />
      <body>

        <div id="portal" />
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={"/"}>
                <h1> Small Store</h1>
              </Link>

              <h5 className="mid-text">- Cool stuff -</h5>
              <Cart />
            </div>
          </header>
          <main>{children}</main>
          <div className="hr" />
          <footer>
            <div className="email-container">
              <h5>Get a sneak peak offers and other stuff</h5>
              <EmailInput />
            </div>
            <div className="links-container">
              <div>
                <h3>VladStefanC</h3>
                <Link target="_blank" href={"/"}>VladStefanCHub</Link>
                <Link target="_blank" href={"/"}>RoadMap</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link target="_blank" href={"/"}>Home</Link>
                <Link target="_blank" href={"/cart"}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link target="_blank" href={"/not-found.js"}>Contact</Link>{" "}
                {/*Create a Contact page */}
                <Link target="_blank" href={"/"}>FAQs</Link> {/*Create a FAQs page*/}
              </div>
            </div>
            <div className="socials">
              <p>
                ©{" "}
                <a href="https://github.com/VladStefanC" target="_blank">
                  VladStefanC
                </a>{" "}
                2025
                <br />
                Built with NextJS &{" "}
                <a target="_blank" href="https://www.fantacss.smoljames.com">
                  FantaCSS
                </a>{" "}
                🔥
              </p>
              <div className="social-links">
                <Link href={"https://github.com/VladStefanC"} target="_blank">
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  href={"https://linkedin.com/in/vlad-ciorescu-2b9197164"}
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
    </ProductsProvider>
  );
}
