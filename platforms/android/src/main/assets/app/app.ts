/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as app from 'application';
var utilityModule = require("utils/utils");

app.start({ moduleName: 'main-page' });


app.on(app.suspendEvent, function (args: app.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
        utilityModule.GC();
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
