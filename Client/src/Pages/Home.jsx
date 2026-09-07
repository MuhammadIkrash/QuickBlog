import Navbar from "../Components/Navbar.jsx";
import Header from "../Components/Header.jsx";
import BlogLists from "../Components/Bloglists.jsx";
import NewsLetter from "../Components/NewsLetter.jsx";
import Footer from "../Components/Footer.jsx";

const Home = () => {
  return <div className="selection:bg-primary/25 selection:text-primary/75">
    <Navbar></Navbar>
    <Header></Header>
    <BlogLists></BlogLists>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
  </div>;
};

export default Home;
