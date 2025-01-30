const Footer = () => {
  const links = {
    Shop: ["New Arrivals", "Best Sellers", "Collections", "Sale"],
    Help: ["Shipping", "Returns", "Sizing", "Contact Us"],
    About: ["Our Story", "Careers", "Press", "Sustainability"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {category}
              </h3>
              <ul className="mt-4 space-y-4">
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
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Soul 7 Apparel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;