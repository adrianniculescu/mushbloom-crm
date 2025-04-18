
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="md:ml-64 p-6 pt-16 md:pt-6">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
