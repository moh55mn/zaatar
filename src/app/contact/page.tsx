export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We'd love to hear from you
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Location</h3>
                  <a
                    href="https://www.google.com/maps/search/Rheinstraße+44-46,+64284+Darmstadt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-800 hover:underline cursor-pointer"
                  >
                    <p className="text-gray-700">
                      Rheinstraße 44-46<br />
                      64284 Darmstadt
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Phone</h3>
                  <p className="text-gray-700">
                    061519679790
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">🕐</div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 11:00 AM - 10:00 PM<br />
                    Saturday - Sunday: 10:00 AM - 11:00 PM
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
