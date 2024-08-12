import fs from "fs";
import { Readable, pipeline } from "stream";
import { promisify } from "util";
const pump = promisify(pipeline);

const uploadFile = async (file: File, filePath: string) => {
  // Ensure file is defined
  if (!file) {
    return false;
  }
  const fileStream = file.stream() as unknown as Readable;

  await pump(fileStream, fs.createWriteStream(filePath));
  return true;
};

export default uploadFile;
