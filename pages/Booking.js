import BookingForm from '../components/BookingForm';
import { useRouter } from 'next/router';

const QuoteForm = () => {
  const router = useRouter();
  const { query } = router.query;
  // Use the query in the form

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input type="text" name="query" defaultValue={query} required />
      {/* Other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

<div> <h1 text>Booking Form</h1> 
 <BookingForm /> </div> 

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const query = formData.get('query');
    // Send the form data, including the query, via email using your preferred method or API
  };
  



// const BookingPage = () => 
// { return ( 

// ); }; 
// export default BookingPage;
export default QuoteForm;