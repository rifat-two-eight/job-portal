import { Poppins } from "next/font/google";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
