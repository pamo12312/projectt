
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jan Novák',
    rating: 5,
    text: 'Skvělý přístup instruktorů a profesionální výuka. Díky této autoškole jsem získal řidičák napoprvé!'
  },
  {
    name: 'Marie Svobodová',
    rating: 5,
    text: 'Výborná komunikace, flexibilní rozvrh a trpěliví instruktoři. Vřele doporučuji!'
  },
  {
    name: 'Petr Dvořák',
    rating: 5,
    text: 'Nejlepší autoškola v Praze! Moderní auta a skvělý přístup k výuce.'
  }
];

export function Reviews() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Recenze Našich Studentů</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.name} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{review.text}</p>
            <p className="font-bold">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}