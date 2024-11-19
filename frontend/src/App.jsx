import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.css";
import NewsPage from "./components/pages/NewsPage/NewsPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import ContactsPage from "./components/pages/ContactsPage/ContactsPage";
import BookPage from "./components/pages/BookPage/BookPage";
import GalleryPage from "./components/pages/GalleryPage/GalleryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/books" element={<BookPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
