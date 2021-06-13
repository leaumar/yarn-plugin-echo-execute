import type {Plugin, Hooks} from "@yarnpkg/core";
import {MessageName, StreamReport, formatUtils} from "@yarnpkg/core";

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

const plugin: Plugin = {
    hooks: {wrapScriptExecution}
};

export default plugin;
