/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  bracketSameLine: false,
  printWidth: 120,
};
