var sourceMappedStackTrace: any = require('sourcemapped-stacktrace')

function fixStackTraces() {
    try {
        var traces = document.querySelectorAll('.jasmine-stack-trace');
        [].slice.call(traces).forEach(fixStackTrace);
    }
    catch(e) {
        /* ok, just an unsupported browser */
    }
}

function fixStackTrace(node) {
    sourceMappedStackTrace.mapStackTrace(node.textContent, function(stack) {
        var prevNode = node.previousSibling;
        var prevNodeText = prevNode.getAttribute( 'title' ) || prevNode.textContent;
        node.textContent = prevNodeText + '\n' + stack.join( '\n' );
    });
}

jasmine.getEnv().addReporter(<any>{ jasmineDone: fixStackTraces });

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('.', true, /\.spec\.ts$/));