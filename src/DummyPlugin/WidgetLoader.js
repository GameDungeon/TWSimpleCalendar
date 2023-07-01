// https://talk.tiddlywiki.org/t/using-external-js-libraries-in-tw-plugins/5893

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
(function exportPDFWidgetLoader() {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!$tw.browser) {
      return;
    }
    // separate the widget from the exports here, so we can skip the require of react code if `!$tw.browser`. Those ts code will error if loaded in the nodejs side.
    const components = require('$:/plugins/$Author/$Plugin/Example.js');
    const { example } = components;
    
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    exports.example = example;
    exports["example"] = example;
})();