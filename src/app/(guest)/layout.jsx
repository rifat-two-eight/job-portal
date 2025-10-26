import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function GuestLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* <main className="container mx-auto px-6 max-w-7xl">{children}</main> */}
      {children}
      <Footer />
    </>
  );
}
