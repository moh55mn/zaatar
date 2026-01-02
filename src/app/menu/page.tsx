import Image from 'next/image';

export default function Menu() {
  const menuItems = [
    { name: "Zaatar mit Käse", price: "2,50 €", image: "/menu/Media (1).jpg", category: "Manakish" },
    { name: "Akkawi Käse", price: "2,50 €", image: "/menu/Media (2).jpg", category: "Manakish" },
    { name: "Lahmajin", price: "2,50 €", image: "/menu/Media (3).jpg", category: "Manakish" },
    { name: "Cola", price: "2,00 €", image: "/menu/Media (4).jpg", category: "Getränke" },
    { name: "Fanta", price: "2,00 €", image: "/menu/Media (1).jpg", category: "Getränke" },
    { name: "Burger Classic", price: "6,50 €", image: "/menu/Media (2).jpg", category: "Burger" },
    { name: "Burger Spicy", price: "7,00 €", image: "/menu/Media (3).jpg", category: "Burger" },
    { name: "Pizza Margherita", price: "8,00 €", image: "/menu/Media (4).jpg", category: "Pizza" },
    { name: "Pizza Salami", price: "8,50 €", image: "/menu/Media (1).jpg", category: "Pizza" },
  ];

  // Group items by category
  const groupedItems = menuItems.reduce((acc: Record<string, typeof menuItems>, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 text-center mb-4">
          Unsere Speisekarte
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Entdecken Sie die authentischen Aromen des Nahen Ostens
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h2 className="text-2xl font-bold text-amber-900 border-b-2 border-amber-200 pb-2">
                {category}
              </h2>
              <div className="space-y-2">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="flex flex-col">
                      <div className="relative w-full h-20 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 flex-1">
                        <h3 className="text-xs font-semibold text-amber-900 mb-1">
                          {item.name}
                        </h3>
                        <span className="text-sm font-bold text-amber-600">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
