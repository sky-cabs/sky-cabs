import Header from "../components/header";
import HomeScreen from "../screens/HomeScreen";
import SectionService from "../components/sectionservice";
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
      <MenuButton />
      <SectionTwoHomePage />
      <SectionThereHomePage />
      <SectionService />
      {/* <SectionOneHomePage /> */}
      {/* <BookingScreen /> */}
       {/* <BookingPage /> */}

      
      
    </div>
  );
}
