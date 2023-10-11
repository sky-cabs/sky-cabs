import Header from "../components/header";
import HomeScreen from "../screens/HomeScreen";
import SectionService from "../components/sectionservice";
import ServicesSection from "../components/ServicesSection";
import SectionTwoHomePage from "../components/sectiontwohomepage";
import SectionThereHomePage from "../components/sectiontherehomepage";
import BookingScreen from '../screens/BookingScreen';
import MenuButton from "../components/MenuButton";
//  import BookingPage from "./Booking";
//  import SectionOneHomePage from "../components/sectiononehomepage";

   
export default function Home() {
  return (
    <div>
      <Header /> 
      <HomeScreen />
      <SectionService />
      <MenuButton />
      <ServicesSection />
      
      <SectionTwoHomePage />
      <SectionThereHomePage />
      
     
      {/* <SectionOneHomePage /> */}
      {/* <BookingScreen /> */}
       {/* <BookingPage /> */}

      
      
    </div>
  );
}
