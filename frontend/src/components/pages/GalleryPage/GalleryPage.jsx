import Footer from "../../Footer/Footer";
import GalleryList from "../../GalleryList/GalleryList";
import NavBar from "../../Navbar/NavBar";
import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <>
      <div id="root" className="content">
        <NavBar />
        <GalleryList />
        <Footer />
      </div>
    </>
  );
}
