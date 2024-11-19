import React from 'react';
import './Contacts.css';

export default function Contacts() {
  return (
    <div className="contacts-container">
      <h1 className="contacts-title">Контакти бібліотеки</h1>
      <section className="contacts-section">
        <p className="contacts-description">
          Національна бібліотека — це провідний науково-дослідний і навчальний центр, який забезпечує студентів і дослідників доступом до сучасної літератури. Бібліотека відіграє важливу роль у підготовці фахівців, забезпечуючи інформаційні ресурси та сприяючи їх професійному розвитку.
        </p>
      </section>
      <section className="contacts-section">
        <h2 className="contacts-subtitle">Контактна інформація</h2>
        <p className="contacts-info"><strong>Адреса:</strong> вул. Просвітницька, 45, м. Київ, Україна</p>
        <p className="contacts-info"><strong>Телефон:</strong> +380 (44) 123 4567</p>
        <p className="contacts-info"><strong>Email:</strong> library@university.ua</p>
        <p className="contacts-info"><strong>Робочий час:</strong> Пн-Пт 09:00 - 18:00</p>
      </section>
      <section className="contacts-mapSection">
        <h2 className="contacts-subtitle">Наше розташування на карті</h2>
        <div className="contacts-mapContainer">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10164.828074069079!2d30.480668899111762!3d50.43724451793718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LLRg9C7LiDQn9GA0L7RgdCy0ZbRgtC90LjRhtGM0LrQsCwgNDUsINC8LiDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LA!5e0!3m2!1sru!2sua!4v1728328478200!5m2!1sru!2sua"
            className="contacts-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
