import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const poppins = Poppins({
  weight: "400", // ONLY normal weight first
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Use CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
