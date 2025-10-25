import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export default function RecruiterLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  );
}
