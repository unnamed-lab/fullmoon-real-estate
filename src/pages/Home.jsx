import { Hero, Service } from "../components/home";
import bgImg from "../assets/img/banner01.png";
import { SearchField } from "../components/forms";

function Home() {
  return (
    <>
      <Hero bgImg={bgImg}>
        <h1>Build your dream home on the finest property</h1>
        <SearchField />
      </Hero>
      <Service />
    </>
  );
}

export default Home;
