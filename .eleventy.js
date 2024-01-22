const yaml = require("js-yaml");
const { DateTime } = require("luxon");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc      = require("@11ty/eleventy-plugin-webc");

const htmlmin = require("html-minifier");

const filters = require('./src/js/filters.js');


module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // Enable WebC
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_includes/webc/*.webc",
  });


  eleventyConfig.addAsyncFilter("geoApify", filters.geoApify)

  // human readable date
  eleventyConfig.addFilter("fromIso", (string) => {
    const dateTime = DateTime.fromISO(string, { zone: "utc" });
    return dateTime;
  });

  eleventyConfig.addFilter("getMonth", (dateTime) => {
    if (!DateTime.isDateTime(dateTime)) {
      console.error("getMonth: Invalid input", dateTime);
      return "Invalid Input";
    }
    return dateTime.toFormat("LLL");
  });

  eleventyConfig.addFilter("getLongMonth", (dateTime) => {
    if (!DateTime.isDateTime(dateTime)) {
      console.error("getMonth: Invalid input", dateTime);
      return "Invalid Input";
    }
    return dateTime.toFormat("LLLL");
  });

  eleventyConfig.addFilter("getDay", (dateTime) => {
    if (!DateTime.isDateTime(dateTime)) {
      console.error("getDay: Invalid input", dateTime);
      return "Invalid Input";
    }
    return dateTime.toFormat("dd");
  });

  eleventyConfig.addFilter("getYear", (dateTime) => {
    if (!DateTime.isDateTime(dateTime)) {
      console.error("getDay: Invalid input", dateTime);
      return "Invalid Input";
    }
    return dateTime.toFormat("yyyy");
  });

  eleventyConfig.addFilter("getTime", (dateTime) => {
    if (!DateTime.isDateTime(dateTime)) {
      console.error("getDay: Invalid input", dateTime);
      return "Invalid Input";
    }
    return dateTime.toFormat("HH:mm");
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.load(contents)
  );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
    "./src/static/css/events.css": "./static/css/events.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  eleventyConfig.addPassthroughCopy({"./node_modules/alpinejs/dist/cdn.js": "./static/js/alpine.js"});

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
