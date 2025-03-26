
import AIMessageGeneratorWrapper from "@/components/AIMessageGeneratorWrapper";
import Navbar from "@/components/Navbar";

const Messages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="md:ml-64 p-6 pt-16 md:pt-6">
        <AIMessageGeneratorWrapper />
      </main>
    </div>
  );
};

export default Messages;
