/// <reference path="../declares.d.ts" />
'use strict';
define(['require', 'exports', './oocDef', 'vscode'], function (require, exports, oocDef, vscode_1) {
    function activate(subscriptions) {
        subscriptions.push(vscode_1.Modes.registerMonarchDefinition('ooc', oocDef.language));
    }
    exports.activate = activate;
});
