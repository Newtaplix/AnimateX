
import Previews from "@/components/main/previews";
import Footer from "@/components/main/footer";
import Feedback from "@/components/main/feedback";
import Hero from "@/components/main/hero";
import Features from "@/components/main/features";
import Customise from "@/components/main/custumise";
import Community from "@/components/main/community";
import Testimonials from "@/components/main/testimonials";
import Navbar from "@/components/main/navbar";
import { Fade } from "@/components/ui/fade";

export default function Home() {
 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Fade amounty={20}>
          <Previews/>
      </Fade>
      <Features/>
      <Customise/>
      <Community/>
      <Feedback/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
