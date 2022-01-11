const AdmZip = require("adm-zip");

async function createZipArchive() {
  const zip = new AdmZip();
  const outputFile = "./dist/index.zip";
  zip.addLocalFolder("./build");
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();
