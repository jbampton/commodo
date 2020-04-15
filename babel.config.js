module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "8.10"
                }
            }
        ],
        "@babel/preset-flow"
    ],
    plugins: [
        ["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: true }],
        ["@babel/plugin-transform-runtime", { useESModules: false }]
    ]
};
