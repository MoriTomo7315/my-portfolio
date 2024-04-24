export function GetContent(id: string): Content {
  const content: Content = require("../../../../public/testdata.json");
  return content;
}

export function GetUpdateInfos(id: string): UpdateInfos {
  const content: Content = require("../../../../public/testdata.json");
  const versionDetails: VersionDetail[] = content.versionDetails;
  let updateInfos: { [key: string]: string } = {};
  versionDetails.forEach((versionDetail) => {
    updateInfos[versionDetail.version] = versionDetail.updateReason;
  });
  return updateInfos;
}
