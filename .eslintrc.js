module.exports = {
    root: true,
    plugins: ["react-hooks", "@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    extends: [
        "@gooddata",
        "plugin:react/recommended",
        "prettier",
        "plugin:import/errors",
        "plugin:import/typescript",
    ],
    rules: {
        "react/no-danger": 2,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,

        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 1,

        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "parent", "sibling", "index"],
                "newlines-between": "always",
            },
        ],
        "no-duplicate-imports": 2,
        // Cleanup rules
        "@typescript-eslint/no-explicit-any": 0, // TODO: FET-411 Enable the rule once fixed

        // Fix for new eslint
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true,
                },
            },
        ],
    },
    globals: {
        BACKEND_URL: "readonly",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            alias: {
                map: [
                    ["~components", "./src/components/"],
                    ["~pages", "./src/pages/"],
                    ["~css", "./src/css/"],
                    ["~icons", "./src/icons/"],
                    ["~images", "./src/images/"],
                    ["images", "./src/images/"],
                    ["~styleGuide", "./src/styleGuide/"],
                    ["~constants", "./src/constants/"],
                    ["~utils", "./src/utils/"],
                    ["~contexts", "./src/contexts/"],
                ],
                extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
            },
        },
    },
};
