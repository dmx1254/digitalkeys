import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="w-full flex flex-col font-lato">
      <Hero />
      <SearchBar /> 
      <Products />
    </main>
  );
}
