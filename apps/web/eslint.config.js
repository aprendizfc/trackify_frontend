import config from "@trackify/ui-eslint-config";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default config.map((entry) => {
  if (!entry.languageOptions?.parserOptions) {
    return {
      ...entry,
      languageOptions: {
        ...(entry.languageOptions ?? {}),
        parserOptions: {
          ...(entry.languageOptions?.parserOptions ?? {}),
          project: "./tsconfig.app.json",
          tsconfigRootDir: __dirname,
        },
      },
    };
  }
  return entry;
});
