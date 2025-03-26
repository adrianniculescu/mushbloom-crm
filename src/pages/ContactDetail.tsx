
import ContactDetail from "@/components/ContactDetail";
import Navbar from "@/components/Navbar";
import { useParams } from "react-router-dom";

const ContactDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="md:ml-64 p-6 pt-16 md:pt-6">
        <ContactDetail />
      </main>
    </div>
  );
};

export default ContactDetailPage;
