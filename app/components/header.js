import Link from "next/link";
import { MdSmartButton } from "react-icons/md";
export default function Header({className='header'}){
    return(
<header className={className}>
<Link href='' className="Kostiantyn">Kostiantyn portfolio</Link>
<div className="header_avdeling">
<nav className="nav">
    <button className='knappen' type='button'>
<MdSmartButton />
    </button>
    <ul className="ul_nav">
<li className='li_nav'><Link href='../prosjekter'>Prosjekter</Link></li>
<li className='li_nav'><Link href='../cv'>Cv</Link></li>
<li className='li_nav'><Link href='../arbeidserfaring'>Arbeidserfaring</Link></li>
    </ul>
</nav>
</div>


</header>
    );
}
