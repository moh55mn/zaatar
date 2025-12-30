import Image from 'next/image';

export default function Menu() {
  const menuItems = [
    { name: "Zaatar mit Käse", price: "2,50 €", image: "/menu/Media (1).jpg" },
    { name: "Akkawi Käse", price: "2,50 €", image: "/menu/Media (2).jpg" },
    { name: "Lahmajin", price: "2,50 €", image: "/menu/Media (3).jpg" },
    { name: "Salami", price: "2,50 €", image: "/menu/Media (4).jpg" },
    { name: "Oliven mit Käse", price: "2,50 €", image: "/menu/Media (1).jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 text-center mb-4">
          Our Menu
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Discover the authentic flavors of the Middle East
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center p-6 flex-1">
                    <h3 className="text-xl font-semibold text-amber-900">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-amber-600 ml-4">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
