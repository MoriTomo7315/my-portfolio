import { GitHubIcon, LinkedInIcon } from "../atomics/socialIcons";

interface SocialLinkProps {
  href: string;
  className?: string;
}

export function GitHubLink({ href, className = "text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-400 transition-colors duration-200" }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <GitHubIcon />
    </a>
  );
}

export function LinkedInLink({ href, className = "text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-400 transition-colors duration-200" }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <LinkedInIcon />
    </a>
  );
} 