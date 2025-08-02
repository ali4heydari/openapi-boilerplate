// eslint-disable-next-line no-unused-vars
import { Config } from "release-it";

/**
 * @type {Config}
 * */
const config = {
  git: {
    commitMessage: "chore(release): bump version to v${version}",
    tagAnnotation: "Release v${version}",
    tagName: "v${version}",
    push: false,
    requireUpstream: false,
    getLatestTagFromAllRefs: true,
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: {
        name: "conventionalcommits",
      },
      infile: "CHANGELOG.md",
    },
    "@j-ulrich/release-it-regex-bumper": {
      out: [
        {
          files: [
            "spec/openapi.yaml",
            "redocly.config.yaml",
            "README.md",
            "README.md",
            "README.md",
          ],
          search: "{{version}}",
          replace: "{{version}}",
        },
      ],
    },
  },
};

export default config;
