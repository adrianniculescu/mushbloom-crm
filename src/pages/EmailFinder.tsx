
import EmailFinder from "@/components/EmailFinder";
import Navbar from "@/components/Navbar";

const EmailFinderPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="md:ml-64 p-6 pt-16 md:pt-6">
        <EmailFinder />
      </main>
    </div>
  );
};

export default EmailFinderPage;
