// React import removed as it's not used in this component

const cars = [
  {
    id: 1,
    name: 'Škoda Octavia',
    year: 2017,
    transmission: 'Manuální',
    engine: '2.0 TDI',
    power: '110 kW',
    features: ['Klimatizace', 'Parkovací senzory', 'parkovací kamera'],
    image: '/src/skodaoctavia.jpg',
  },
];

export function CarPark() {
  return (
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Náš Vozový Park</h2>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 display-flex justify-center">
          {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{car.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700"><span className="font-semibold">Rok výroby:</span> {car.year}</p>
                    <p className="text-gray-700"><span className="font-semibold">Převodovka:</span> {car.transmission}</p>
                    <p className="text-gray-700"><span className="font-semibold">Motor:</span> {car.engine}</p>
                    <p className="text-gray-700"><span className="font-semibold">Výkon:</span> {car.power}</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Výbava:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {car.features.map((feature, index) => (
                          <li key={index} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
}