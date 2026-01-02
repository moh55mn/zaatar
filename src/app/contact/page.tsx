export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 text-center mb-4">
          Kontaktieren Sie uns
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Wir freuen uns, von Ihnen zu hören
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
              Nehmen Sie Kontakt auf
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Adresse</h3>
                  <a
                    href="https://www.google.com/maps/search/Darmstadt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-800 hover:underline cursor-pointer"
                  >
                    <p className="text-gray-700">
                      Darmstadt
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Telefon</h3>
                  {/* Mobile: Clickable */}
                  <a
                    href="tel:99999999999"
                    className="md:hidden text-amber-600 hover:text-amber-800 hover:underline cursor-pointer"
                  >
                    <p className="text-gray-700">
                      99999999999
                    </p>
                  </a>
                  {/* Desktop: Non-clickable */}
                  <p className="hidden md:block text-gray-700">
                    99999999999
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">🕐</div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Öffnungszeiten</h3>
                  <p className="text-gray-700">
                    Montag - Freitag: 11:00 - 22:00 Uhr<br />
                    Samstag - Sonntag: 10:00 - 23:00 Uhr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
