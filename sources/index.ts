import type {Plugin, Hooks} from "@yarnpkg/core";

const plugin: Plugin<Hooks> = {
    hooks: {
        wrapScriptExecution: async (executor, project, locator, scriptName, extra) => {
            return () => {
                console.info(`${scriptName}> yarn ${extra.script}`);
                return executor();
            };
        }
    }
};

export default plugin;
