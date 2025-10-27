import Image from "next/image";
import anita from "@/public/bilderForUndersider/omOss/kundeservice/1.jpg";
import ellen from "@/public/bilderForUndersider/omOss/kundeservice/2.jpg";
import chris from "@/public/bilderForUndersider/omOss/kundeservice/3.jpg";

const team = [
  { name: "Anita Kristine Roe", role: "Kundemottak", email: "akr@rodekorsforstehjelp.no", img: anita },
  { name: "Ellen Slåtskog", role: "Rådgiver Kundesenter", email: "ellen@rodekorsforstehjelp.no", img: ellen },
  { name: "Chris Andre Ellings", role: "Rådgiver Kundesenter", email: "chris@rodekorsforstehjelp.no", img: chris },
];

export default function Kundeservice() {
  return (
    <div className="kundeservice">
      <div className="kundeservice-header">KUNDESERVICE</div>
      <div className="kundeservice-team">
        {team.map((person) => (
          <div key={person.email} className="team-card">
            <div className="team-photo">
              <Image src={person.img} alt={person.name} width={120} height={120} className="photo" />
            </div>
            <div className="team-info">
              <h4>{person.name}</h4>
              <p>{person.role}</p>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
