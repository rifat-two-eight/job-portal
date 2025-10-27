import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function JobSeekerLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
