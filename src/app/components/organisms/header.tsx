import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="transform transition-all duration-200 hover:scale-105"
          >
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500">
              MoriTomo7315
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link
              href="/#app-gallery"
              className="relative group text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
            >
              <span>App Gallery</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/#about-me"
              className="relative group text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
            >
              <span>About Me</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/#contact"
              className="relative group text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
