const purgecssOption = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

const plugins = [
  require("tailwindcss"),
  require("autoprefixer"),
  require("@fullhuman/postcss-purgecss")(purgecssOption),
  require("cssnano")({
    preset: "default",
  }),
];

module.exports = {
  plugins: plugins,
};
