
import ContactsList from "@/components/ContactsList";
import Navbar from "@/components/Navbar";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="md:ml-64 p-6 pt-16 md:pt-6">
        <ContactsList />
      </main>
    </div>
  );
};

export default Contacts;
