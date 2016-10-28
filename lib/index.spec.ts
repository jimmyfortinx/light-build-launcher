import LightBuildLauncher from ".";

describe("LightBuildLauncher", () => {
    describe("getTaskName function", () => {
        it("returns the task name", () => {
            var launcher = new LightBuildLauncher(["test"]);

            expect(launcher.getTaskName()).toBe("test");
        });

        it("returns null if no args", () => {
            var launcher = new LightBuildLauncher([]);

            expect(launcher.getTaskName()).toBe(null);
        });
    })
});