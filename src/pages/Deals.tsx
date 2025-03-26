
import DealsBoard from "@/components/DealsBoard";
import Navbar from "@/components/Navbar";

const Deals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="md:ml-64 p-6 pt-16 md:pt-6">
        <DealsBoard />
      </main>
    </div>
  );
};

export default Deals;
