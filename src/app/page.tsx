import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-amber-900 mb-6">
            Resturant
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Authentische Nahostküche
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/menu" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Speisekarte anzeigen
            </Link>
            <Link 
              href="/contact" 
              className="bg-amber-900 hover:bg-amber-950 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Kontaktieren Sie uns
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
