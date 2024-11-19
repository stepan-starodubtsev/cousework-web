import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/NavBar";
import NewsList from "../../NewsList/NewsList";
import './NewsPage.css';

export default function NewsPage() {
  return (
    <div className="content">
      <NavBar />
      <NewsList />
      <Footer />
    </div>
  );
}
