
import {Car, Book, Shield, ShieldCheck, Landmark, Fuel} from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Naše Služby</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <ServiceCard
          icon={<Car className="w-8 h-8" />}
          title="Výuka Řízení"
          description="Praktický výcvik s zkušenými instruktory"
        />
        <ServiceCard
          icon={<Book className="w-8 h-8" />}
          title="Teoretická Výuka"
          description="Komplexní příprava na teoretickou zkoušku"
        />
        <ServiceCard
          icon={<Shield className="w-8 h-8" />}
          title="Bezpečnost"
          description="Důraz na bezpečnou jízdu a prevenci nehod"
        />
          <ServiceCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Defenzivni jízda"
              description="Důraz na bezpečnou jízdu a prevenci před nehodami"
          />
          <ServiceCard
              icon={<Fuel className="w-8 h-8" />}
              title="Ekonomická jízda"
              description="Snižování provozních nákladů vozidla"
          />
          <ServiceCard
              icon={<Landmark className="w-8 h-8" />}
              title="Jízda v Praze"
              description="Procvičení řízení v hustém provozu a zvládání křižovatek"
          />
      </div>
    </section>
  );
}