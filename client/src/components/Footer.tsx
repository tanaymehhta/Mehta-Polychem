// Assuming this is within a Footer component
const Footer = ({ links }) => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {links.map((link) => (
            <Link href={link.href} className="hover:text-primary mx-4" key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Example usage (assuming you have a Link component from a library like Next.js)
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const App = () => {
  return (
    <div>
      {/* ... rest of your app ... */}
      <Footer links={links} />
    </div>
  );
};

export default App;