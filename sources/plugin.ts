import type {Plugin, Hooks} from "@yarnpkg/core";

const wrapScriptExecution: Hooks["wrapScriptExecution"] = async (executor, project, locator, scriptName, extra) => {
    return () => {
        console.info(`${scriptName}> ${extra.script}`);
        return executor();
    };
};

export const plugin: Plugin<Hooks> = {
    hooks: {
        wrapScriptExecution
    }
};
