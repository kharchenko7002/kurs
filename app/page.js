import Image from "next/image";
import Link from "next/link";

export default function Hjemm() {
  return (
    <main className="stor_avdeling">
      <h1 className="tekst">min portfolio</h1>

  
      <div className="bilde1">
        <Image
          src="/jeg.jpg"
          width={250}     
          height={250}    
          className="bilde22"
        />
      </div>


      <div className="avdelinger">
        <Link href='./arbeidserfaring' className="avdeling">Mine prosjekter</Link>
        <Link href='./cv' className="avdeling">Min CV</Link>
        <Link href='./prosjekter' className="avdeling">Min arbeidserfaring</Link>
      </div>
    </main>
  );
}