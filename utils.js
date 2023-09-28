// utils.js
import BookingForm from "./components/BookingForm";

const scrollTo = (BookingForm) => {
    const targetSection = document.getElementById(scrollTo);
  
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  
  export default scrollTo;
  