import { ApplicationForm } from '@/components/ApplicationForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function Apply(){return <main className="apply-page"><header className="sub-header"><Link href="/" className="logo"><span>P4</span>F</Link><Link href="/" className="back"><ArrowLeft/> Zur Startseite</Link></header><section className="apply-intro"><p className="eyebrow"><i/>BEWERBUNG</p><h1>Das ist der Anfang eines Gesprächs.</h1><p>Kein Casting, kein Druck und keine Verpflichtung. Wir melden uns für ein ehrliches Erstgespräch und klären gemeinsam, ob die Zusammenarbeit passt.</p></section><ApplicationForm/></main>}
