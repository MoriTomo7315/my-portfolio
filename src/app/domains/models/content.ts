type VersionDetail = {
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
  imageUrl: string;
  systemDesignUrl: string;
  versions: string[];
  versionDetails: VersionDetail[];
};

interface UpdateInfos {
  [key: string]: string;
}
