type VersionInfo = {
  version: string;
  updateReason: string;
  details: string;
  usedTech: string;
  systemDesign: string;
};

type Content = {
  id: string;
  title: string;
  giturl: string;
  versions: string[];
  versionDetails: VersionInfo[];
};
