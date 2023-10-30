export function splitFileName(fileName: string): [string, string] {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return [fileName, ''];
  }
  return [
    fileName.substring(0, lastDotIndex),
    fileName.substring(lastDotIndex + 1)
  ];
}
