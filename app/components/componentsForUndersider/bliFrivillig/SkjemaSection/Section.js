"use client";
import "./SkjemaSection.css";
import { useState } from "react";

export default function SkjemaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    activity: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📨 Form data:", formData);
    alert("Søknaden er sendt! ✅");
  };

  return (
    <section id="skjema" className="skjema-section">
      <div className="skjema-container">
        <h2 className="skjema-title">Søknadsskjema</h2>
        <p className="skjema-subtitle">
          Fyll ut skjemaet under – så tar vi kontakt.
        </p>

        <form className="skjema-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Fullt navn</label>
              <input
                type="text"
                name="name"
                placeholder="Ola Nordmann"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>E-post</label>
              <input
                type="email"
                name="email"
                placeholder="ola@nordmann.no"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Telefon</label>
              <input
                type="tel"
                name="phone"
                placeholder="+47 400 00 000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Kommune/by</label>
              <input
                type="text"
                name="city"
                placeholder="Hamar"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Ønsket aktivitet</label>
            <select
              name="activity"
              value={formData.activity}
              onChange={handleChange}
            >
              <option value="">Velg aktivitet</option>
              <option>Besøkstjeneste</option>
              <option>Hjelpekorps</option>
              <option>Flyktningguide</option>
              <option>Røde Kors Ungdom</option>
              <option>Leksehjelp</option>
              <option>Ferie for alle</option>
            </select>
          </div>

          <div className="form-group">
            <label>Fortell kort om deg selv</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Hvorfor vil du bli frivillig?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <label className="form-checkbox">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <span>
              Jeg samtykker til at Røde Kors kan kontakte meg om frivillig arbeid.
            </span>
          </label>

          <button type="submit" className="form-button">
            Send søknad
          </button>
        </form>
      </div>
    </section>
  );
}
