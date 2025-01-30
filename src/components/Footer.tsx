const Footer = () => {
  const links = {
    SHOP: ["New Arrivals", "Best Sellers", "Collections", "Sale"],
    HELP: ["Shipping", "Returns", "Sizing", "Contact Us"],
    ABOUT: ["Our Story", "Careers", "Press", "Sustainability"],
    LEGAL: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
  };

  return (
    <footer className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Soul 7 Apparel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;