export default (templateParams) => {
  return `export const BUNDLE_PATHS = ${JSON.stringify(
    templateParams.htmlWebpackPlugin.files.js,
  )};
export const CSS_PATHS= ${JSON.stringify(
    templateParams.htmlWebpackPlugin.files.css,
  )};`;
};
