/// <reference path="../declares.d.ts" />
'use strict';
define(['require', 'exports', './oocDef', 'monaco'], function (require, exports, languageDef, monaco) {
    monaco.Modes.registerMonarchDefinition('ooc', languageDef.language);
});
