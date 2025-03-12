
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'PowerTower', href: '#powertower' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Bundle', href: '#bundle' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center px-4 py-4">
        <a href="/" className="text-xl font-bold">
          <span className="text-black">Fit</span>
          <span className="text-[#FFD700]">Anywhere</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[64px] bg-white transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-4 py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black hover:text-[#FFD700] transition-colors py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button className="w-full bg-black text-white hover:bg-black/90 mt-4">
            ORDER NOW
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
