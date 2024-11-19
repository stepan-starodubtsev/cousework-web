import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmail } from "../../services/AuthService";
import logo from "../../assets/logo.png";
import "./NavBar.css"; // Подключаем файл со стилями

export default function NavBar() {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const res_email = await getEmail();
        if (res_email) {
          setEmail(res_email);
        } else {
          console.log("Email not found");
        }
      } catch (error) {
        console.error("Error fetching email:", error);
      }
    };
    fetchEmail();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setEmail(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <Link to="/" className="navbar-title">
            Національна бібліотека Ревуцького
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/books" className="navbar-link">Книжки</Link>
          <Link to="/gallery" className="navbar-link">Галерея</Link>
          <Link to="/news" className="navbar-link">Новини</Link>
          <Link to="/contacts" className="navbar-link">Контакти</Link>
        </div>
        <div className="navbar-actions">
          {email ? (
            <>
              <span className="navbar-email">Користувач: {email}</span>
              <button onClick={handleLogout} className="navbar-logout">
                Вийти
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="navbar-login">Увійти</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
