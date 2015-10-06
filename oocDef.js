/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'ooc',
        name: 'ooc',
        mimeTypes: [],
        defaultToken: '',
        lineComment: '//',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        autoClosingPairs: [['{', '}'], ['[', ']'], ['(', ')'], ['"', '"'], ["'", "'"]],
        keywords: [
            '__onheap__', 'this', 'This', 'this', 'virtual', 'override',
            'break', 'continue', 'return', 'func', 'class', 'cover',
            'enum', 'interface', 'from', 'abstract', 'final', 'static',
            'inline', 'extends', 'extern', 'unmangled', 'implements', 'implicit',
            'import', 'include', 'use', 'if', 'else', 'for', 'while', 'match',
            'case', 'as', 'in', 'into', 'proto', 'try', 'catch', 'set', 'get',
            'operator', 'const', 'true', 'false', 'null', 'new', 'version'
        ],
        operators: [
            '+', '+=', '=', '&', '&=', '|', '|=', '^', '^=', '<==>', ':=',
            ':==', '::=', '@', '/', '/=', '==', '**', '**=', '>', '>=',
            '<<', '<<=', '<', '<=', '&&', '||', '%', '*', '*=', '~',
            '!', '!=', '>>', '>>=', '-', '-=', '?', '??', '..', '->'
        ],
        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
        floatsuffix: /[fFlL]?/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                [/[A-Z]+\w*/, 'type.$0'],
                [/[a-zA-Z_]\w*/, { cases: { '@keywords': { token: 'keyword.$0' }, '@default': 'identifier' } }],
                { include: '@whitespace' },
                [/^\s*#\w+/, 'keyword'],
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
                [/[\d*\_]*[\.]?\d+([eE][\-+]?\d+)+[\_+\d]*(@floatsuffix)/, 'number.float'],
                [/0[x][\da-fA-F\_]*[\da-fA-F](@integersuffix)/, 'number.hex'],
                [/0[c][0-7\_]*[0-7](@integersuffix)/, 'number.hex'],
                [/0[b][0-1\_]*[0-1](@integersuffix)/, 'number.hex'],
                [/([\d\-\_]+)/, 'number'],
                [/\d(@integersuffix)/, 'number'],
                [/[;,.]/, 'delimiter'],
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
            comment: [
                [/[^\/*]+/, 'comment'],
                ['\\*/', 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            doccomment: [
                [/[^\/*]+/, 'comment.doc'],
                [/\/\*/, 'comment.doc.invalid'],
                [/\*\//, 'comment.doc', '@pop'],
                [/[\/*]/, 'comment.doc']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
        },
    };
});
