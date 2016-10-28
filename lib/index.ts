class LightBuildLauncher {
    // Can be constructed like that:
    // new LightBuildLauncher(process.argv.slice(2))
    constructor(private _args: string[]) {
    }

    getTaskName() {
        return this._args.length ? this._args[0] : null;
    }
}

export default LightBuildLauncher;