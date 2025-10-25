import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function GuestLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  );
}
