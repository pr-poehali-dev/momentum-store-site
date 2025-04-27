import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-momentum-white border-b border-momentum-black/10 fixed top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-momentum-black">
            <div className="logo-mmm text-3xl tracking-widest">MMM</div>
            <div className="text-xs tracking-wider mt-[-4px]">MOMENTUM</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 text-sm font-medium hover:text-momentum-accent/80 transition-colors">
                  Главная
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/catalog" className="px-4 py-2 text-sm font-medium hover:text-momentum-accent/80 transition-colors">
                  Каталог
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/promotions" className="px-4 py-2 text-sm font-medium hover:text-momentum-accent/80 transition-colors">
                  Акции
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contacts" className="px-4 py-2 text-sm font-medium hover:text-momentum-accent/80 transition-colors">
                  Контакты
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="flex items-center">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-2 text-sm hidden md:inline">Корзина</span>
          </Link>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-momentum-white pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out z-40",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6">
          <Link 
            to="/" 
            className="text-xl font-medium py-2 border-b border-momentum-black/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Главная
          </Link>
          <Link 
            to="/catalog" 
            className="text-xl font-medium py-2 border-b border-momentum-black/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Каталог
          </Link>
          <Link 
            to="/promotions" 
            className="text-xl font-medium py-2 border-b border-momentum-black/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Акции
          </Link>
          <Link 
            to="/contacts" 
            className="text-xl font-medium py-2 border-b border-momentum-black/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Контакты
          </Link>
          <Link 
            to="/cart" 
            className="text-xl font-medium py-2 border-b border-momentum-black/10 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Корзина
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
