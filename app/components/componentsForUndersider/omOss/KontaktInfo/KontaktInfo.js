import Link from "next/link";

export default function KontaktInfo() {
  return (
    <div className="kontakt-info">
      <div className="kontakt-item">
        <h3>E-post</h3>
        <p>
          Hvis du ønsker å kontakte oss via e-post, kan du sende en melding til{" "}
          <a href="mailto:post@rodekorsforstehjelp.no">post@rodekorsforstehjelp.no</a>.
        </p>
      </div>

      <div className="kontakt-item">
        <h3>Chat</h3>
        <p>
          For rask respons via vår live-chat-tjeneste kan du kontakte oss <Link href="/chat">her</Link>. Chat besvares
          mandag–fredag kl. 08:00–16:00.
        </p>
      </div>

      <div className="kontakt-item">
        <h3>Telefon</h3>
        <p>
          <a href="tel:+4756123700">+47 5612 3700</a> <br />
          Telefon besvares mandag–fredag kl. 08:00–16:00.
        </p>
      </div>

      <div className="kontakt-item">
        <h3>Sosiale medier</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}
