import {
  CommandLineIcon,
  CodeBracketIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { TECH_STACK_TEXTS } from "@/app/constants/texts";

interface TechItem {
  name: string;
}

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  skills: TechItem[];
}

export default function TechStackZone() {
  const convertToTechItems = (skills: readonly string[]): TechItem[] => {
    return skills.map(skill => ({ name: skill }));
  };

  const techCategories: TechCategory[] = [
    {
      title: TECH_STACK_TEXTS.FRONTEND.TITLE,
      icon: <CodeBracketIcon className="h-6 w-6" />,
      skills: convertToTechItems(TECH_STACK_TEXTS.FRONTEND.SKILLS),
    },
    {
      title: TECH_STACK_TEXTS.BACKEND.TITLE,
      icon: <ServerIcon className="h-6 w-6" />,
      skills: convertToTechItems(TECH_STACK_TEXTS.BACKEND.SKILLS),
    },
    {
      title: TECH_STACK_TEXTS.PLATFORM.TITLE,
      icon: <CommandLineIcon className="h-6 w-6" />,
      skills: convertToTechItems(TECH_STACK_TEXTS.PLATFORM.SKILLS),
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {techCategories.map((category) => (
        <div
          key={category.title}
          className="group bg-gradient-subtle rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500">
              {category.title}
            </h3>
          </div>
          <ul className="space-y-2">
            {category.skills.map((skill) => (
              <li 
                key={skill.name}
                className="flex items-center space-x-2 text-sm group-hover:translate-x-1 transition-transform duration-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
