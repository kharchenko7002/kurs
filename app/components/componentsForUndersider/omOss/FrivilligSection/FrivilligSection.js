import Image from "next/image";
import Link from "next/link";


export default function FrivilligSection() {
return (
<section className="frivillig-section">
<div className="frivillig-text">
<h2>Hva betyr det å være frivillig?</h2>
<p>
Her kan du lese mer om de syv prinsippene som veileder Røde Kors sine
frivillige.
</p>
<Link href="/bli-frivillig" className="btn-frivillig">
Bli frivillig
</Link>
</div>


<div className="frivillig-img">
<Image
src="/illustrations/volunteer.png"
alt="Illustrasjon av frivillig"
width={400}
height={300}
className="illustration"
/>
</div>
</section>
);
}