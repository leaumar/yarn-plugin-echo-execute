import type {Plugin, Hooks} from "@yarnpkg/core";

const plugin: Plugin<Hooks> = {
    hooks: {
        wrapScriptExecution: async (executor, project, locator, scriptName, extra) => {
            return () => {
                const command = extra.script.startsWith("yarn ") ? extra.script : `yarn ${extra.script}`;
                console.info(`${scriptName}> ${command}`);
                return executor();
            };
        }
    }
};

export default plugin;
