
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function JobSeekerLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  );
}
