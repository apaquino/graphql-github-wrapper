export const _githubUrlSlicer = (url) => {
  const brackIndex = url.indexOf("{");
  return url.slice(0, brackIndex);
};
