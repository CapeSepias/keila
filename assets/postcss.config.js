module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require("postcss-easy-import"),
        require("postcss-nested"),
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
    ],
}
