
import { Award, Users, Clock, Smile } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Zkušení Instruktoři',
    description: 'Náš tým tvoří certifikovaní instruktoři s mnohaletou praxí.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Individuální Přístup',
    description: 'Výuka přizpůsobená vašim potřebám a tempu učení.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Flexibilní Rozvrh',
    description: 'Možnost výuky i ve večerních hodinách a o víkendech.'
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: '98% Úspěšnost',
    description: 'Vysoká úspěšnost našich studentů u závěrečných zkoušek.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Proč Si Vybrat Nás?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason) => (
          <div key={reason.title} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}