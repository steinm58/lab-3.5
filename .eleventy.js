// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("post", function(image, alt, blurb) {
    return `<div class="individual-post">
<img src="${image}" alt="${alt}">
<p>${blurb}</p>
</div>`
  })
};