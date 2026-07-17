/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "import", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    tailwindcss: {
      callees: ["cn", "clsx", "cva"]
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^@clerk/nextjs$", "^next-intl/server$", "^next-intl/plugin$", "^uploadthing/next$"]
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ]
  },
  ignorePatterns: ["**/dist/**", "**/.next/**", "**/build/**"]
};
