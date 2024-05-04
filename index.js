const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "cols-fit": (value) => ({
          "grid-template-columns": `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
        "cols-fill": (value) => ({
          "grid-template-columns": `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
      },
      { values: theme("itemWidth") },
    );

    matchUtilities(
      {
        "rows-fit": (value) => ({
          "grid-template-rows": `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
        "rows-fill": (value) => ({
          "grid-template-rows": `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
      },
      { values: theme("itemHeight") },
    );
  },
  {
    theme: {
      extend: {
        itemWidth: ({ theme }) => ({
          ...theme("width"),
        }),
        itemHeight: ({ theme }) => ({
          ...theme("height"),
        }),
      },
    },
  },
);
