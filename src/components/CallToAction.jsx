import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate(); // ✅ hook from react-router-dom

  const handleClick = () => {
    navigate("/booking"); // ✅ redirect to booking page
  };

  return (
    <section>
      <h1>Welcome to Little Lemon</h1>
      <p>Reserve a table and enjoy delicious food!</p>
      <button onClick={handleClick}>Book Now</button>
    </section>
  );
}

export default CallToAction;
