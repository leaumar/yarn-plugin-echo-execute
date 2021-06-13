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
                report.reportInfo(
                    MessageName.UNNAMED,
                    formatUtils.applyColor(
                        project.configuration,
                        `[${scriptName}] ${extra.script}`,
                        formatUtils.Type.NO_HINT
                    )
                );
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
