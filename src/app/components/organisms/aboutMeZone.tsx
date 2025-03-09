import ProfileIcon from "../atomics/profileIcon";
import { PROFILE_TEXTS } from "@/app/constants/texts";
import { GitHubLink, LinkedInLink } from "../molecules/socialLinks";

export default function AboutMeZone() {
  return (
    <div className="bg-gradient-subtle rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <ProfileIcon />
        <div className="text-center md:text-left space-y-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500">
              {PROFILE_TEXTS.NAME}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {PROFILE_TEXTS.LOCATION}
            </p>
          </div>
          <p className="max-w-md text-gray-600 dark:text-gray-300 leading-relaxed">
            {PROFILE_TEXTS.DESCRIPTION}
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <GitHubLink href="https://github.com/MoriTomo7315" />
            <LinkedInLink href="https://linkedin.com/in/tomoya-mori-027a09190" />
          </div>
        </div>
      </div>
    </div>
  );
}
