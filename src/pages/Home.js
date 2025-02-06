import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FortuneMessage from "../components/FortuneMessage";
import CategoryButtons from "../components/CategoryButtons";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Header />
      <FortuneMessage />
      <CategoryButtons navigate={navigate} />
    </div>
  );
}

export default Home;