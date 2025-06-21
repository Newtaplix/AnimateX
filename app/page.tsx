import AnimateX from "@/components/animatex";
import Navbar from "@/components/navbar";
import Previews from "@/components/previews";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import Feedback from "@/components/feedback";
import Creators from "@/components/creators";
import Testimonials from "@/components/testimonials";
import MobileCards from "@/components/cards_mobile";


export default function Home() {
 
  return (
    <>
      <Navbar/>
      <div className="w-full flex items-center justify-center p-5 relative flex-col">
          <div className="w-full p-2 md:p-0 md:w-170 min-h-60 md:h-100 lg:h-100 relative md:mt-20 flex text-center items-center justify-center">
              <AnimateX/>
          </div>
          <span className="text-gray-700 mb-10">What we bring to your site.</span>
          <Cards/>
          <MobileCards/>
      </div>
      <Previews/>
      <Feedback/>
      <Creators/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
