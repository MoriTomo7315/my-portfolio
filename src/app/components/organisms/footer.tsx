import { FOOTER_TEXTS } from "@/app/constants/texts";
import { GitHubLink, LinkedInLink } from "../molecules/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500">
            MoriTomo7315
          </div>
          
          <div className="flex items-center space-x-6">
            <GitHubLink 
              href="https://github.com/MoriTomo7315"
              className="text-gray-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors duration-200"
            />
            <LinkedInLink 
              href="https://linkedin.com/in/tomoya-mori-027a09190"
              className="text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-400 transition-colors duration-200"
            />
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            {FOOTER_TEXTS.COPYRIGHT}
          </div>
        </div>
      </div>
    </footer>
  );
}
