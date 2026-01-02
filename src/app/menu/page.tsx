'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Menu() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const menuItems = [
    { name: "Zaatar mit Käse", price: "2,50 €", image: "/menu/Media (1).jpg", category: "Manakish", description: "Knuspriges Fladenbrot mit Zaatar-Gewürzmischung und Akkawi-Käse" },
    { name: "Akkawi Käse", price: "2,50 €", image: "/menu/Media (2).jpg", category: "Manakish", description: "Traditionelles Manakish mit geschmolzenem Akkawi-Käse" },
    { name: "Lahmajin", price: "2,50 €", image: "/menu/Media (3).jpg", category: "Manakish", description: "Dünnes Fladenbrot mit würzigem Lammhackfleisch und Kräutern" },
    { name: "Cola", price: "2,00 €", image: "/menu/Media (4).jpg", category: "Getränke", description: "Klassisches Erfrischungsgetränk" },
    { name: "Fanta", price: "2,00 €", image: "/menu/Media (1).jpg", category: "Getränke", description: "Fruchtig erfrischendes Getränk in verschiedenen Geschmacksrichtungen" },
    { name: "Burger Classic", price: "6,50 €", image: "/menu/Media (2).jpg", category: "Burger", description: "Saftiges Rindfleisch mit Salat, Tomate und hausgemachter Sauce" },
    { name: "Burger Spicy", price: "7,00 €", image: "/menu/Media (3).jpg", category: "Burger", description: "Würziger Burger mit scharfer Chilisauce und frischen Zutaten" },
    { name: "Pizza Margherita", price: "8,00 €", image: "/menu/Media (4).jpg", category: "Pizza", description: "Klassische Pizza mit Tomaten, Mozzarella und frischem Basilikum" },
    { name: "Pizza Salami", price: "8,50 €", image: "/menu/Media (1).jpg", category: "Pizza", description: "Würzige Pizza mit italienischer Salami und schmelzendem Käse" },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
                {items.map((item, idx) => {
                  const itemIndex = menuItems.indexOf(item);
                  const isExpanded = expandedItems[itemIndex];
                  
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <button
                        onClick={() => toggleExpanded(itemIndex)}
                        className="w-full text-left"
                      >
                        <div className="flex flex-col">
                          <div className="relative w-full h-20 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-2 flex-1 flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-xs font-semibold text-amber-900 mb-1">
                                {item.name}
                              </h3>
                              <span className="text-sm font-bold text-amber-600">
                                {item.price}
                              </span>
                            </div>
                            <span className="ml-2 text-amber-600">
                              {isExpanded ? '▼' : '▶'}
                            </span>
                          </div>
                        </div>
                      </button>
                      {isExpanded && (
                        <div className="px-2 pb-2 border-t border-amber-100">
                          <p className="text-xs text-gray-600 mt-2">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
