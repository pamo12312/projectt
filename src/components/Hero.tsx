

export function Hero() {
  return (
    <header className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070")'
    }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Kondiční jízdy Moravec</h1>
          <p className="text-xl text-gray-200">Získejte jistotu za volantem</p>
        </div>
      </div>
    </header>
  );
}