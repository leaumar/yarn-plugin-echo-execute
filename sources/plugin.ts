import {Plugin, Hooks, MessageName, StreamReport, formatUtils} from "@yarnpkg/core";

const wrapScriptExecution: Hooks["wrapScriptExecution"] = async (executor, project, locator, scriptName, extra) => {
    return async () => {
        await StreamReport.start(
            {
                configuration: project.configuration,
                json: false,
                includeFooter: false,
                stdout: extra.stdout
            },
            async (report) => {
                const name = formatUtils.applyColor(project.configuration, scriptName, formatUtils.Type.NAME);
                const commandLine = formatUtils.applyColor(project.configuration, extra.script, formatUtils.Type.CODE);

                report.reportInfo(MessageName.UNNAMED, `executing [${name}]: ${commandLine}`);
            }
        );

        return executor();
    };
};

export const plugin: Plugin<Hooks> = {
    hooks: {
        wrapScriptExecution
    }
};
