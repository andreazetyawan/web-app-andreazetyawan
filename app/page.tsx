import Welcome from "./welcome";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-16">
      <Navbar />
        <Welcome />
      <Footer/>
    </main>
  );
}
