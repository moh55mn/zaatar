import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero/Media.jpg"
          alt="Zaatar Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Zaatar
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Authentic Middle Eastern Cuisine
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/menu" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              View Menu
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-white transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
