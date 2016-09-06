/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var PDDL = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,11],$V1=[1,14],$V2=[1,15],$V3=[1,16],$V4=[1,21],$V5=[2,5],$V6=[2,15],$V7=[1,24],$V8=[1,23],$V9=[1,41],$Va=[2,22],$Vb=[2,19],$Vc=[1,43],$Vd=[1,44],$Ve=[4,8],$Vf=[8,15,30],$Vg=[2,28],$Vh=[1,64],$Vi=[1,63],$Vj=[1,80],$Vk=[8,39,42],$Vl=[1,83],$Vm=[1,84],$Vn=[4,8,39,42];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"start":3,"LPAREN":4,"DEFINE":5,"DOMAIN":6,"domain_name":7,"RPAREN":8,"domain_definitions":9,"domain_types":10,"domain_body":11,"predicates_def":12,"constants_def":13,"action_def":14,"STRING":15,"definition":16,"REQUIREMENTS":17,"TYPING":18,"STRIPS":19,"types":20,"TYPES":21,"CONSTANTS":22,"constants_list":23,"HYPHEN":24,"PREDICATES":25,"predicate_list":26,"predicate":27,"argument_list":28,"NOT":29,"VARIABLE":30,"ACTION":31,"parameters_action":32,"action_def_body":33,"PARAMETERS":34,"action_preconditions":35,"action_result":36,"PRECONDITION":37,"list_effects":38,"EFFECT":39,"AND":40,"action_effect":41,"OBSERVE":42,"list_fluents":43,"fluent":44,"$accept":0,"$end":1},
terminals_: {2:"error",4:"LPAREN",5:"DEFINE",6:"DOMAIN",8:"RPAREN",15:"STRING",17:"REQUIREMENTS",18:"TYPING",19:"STRIPS",21:"TYPES",22:"CONSTANTS",24:"HYPHEN",25:"PREDICATES",29:"NOT",30:"VARIABLE",31:"ACTION",34:"PARAMETERS",37:"PRECONDITION",39:"EFFECT",40:"AND",41:"action_effect",42:"OBSERVE"},
productions_: [0,[3,10],[11,2],[11,2],[11,2],[11,0],[7,1],[9,3],[16,2],[16,2],[16,2],[16,0],[10,3],[20,2],[20,2],[20,0],[13,4],[23,2],[23,3],[23,0],[12,4],[26,2],[26,0],[27,4],[27,7],[28,2],[28,4],[28,2],[28,0],[14,6],[32,4],[33,2],[35,2],[36,2],[36,5],[36,2],[38,1],[38,3],[38,4],[43,1],[43,2],[44,4],[44,7]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
console.log("Domain: %s\n", $$[$0-5]); console.log("Test: \n", JSON.stringify(actionList)); return [types, constants, predicates, actionList];
break;
case 6: case 31:
this.$ = $$[$0];
break;
case 9:
requirements.push("types");
break;
case 10:
requirements.push("strips");
break;
case 12:
console.log("Parsed types:\n"); console.log(types);
break;
case 14:
types.push($$[$0-1]);
break;
case 17:
 constants.constantsList.push($$[$0-1])
break;
case 18:
 constants.types.push($$[$0-1]);constants.typeIndex.push(constants.constantsList.length);
break;
case 23:
predicates.push(new Predicate($$[$0-2],$$[$0-1]));
break;
case 24:
predicates.push(new Predicate($$[$0-3],$$[$0-2]));
break;
case 25:
 var x = [$$[$0-1]]; x.push(new Argument($$[$0], ""));
    this.$ = $$[$0-1];
break;
case 26:
 var x = [$$[$0-3]]; x.push(new Argument($$[$0-2],$$[$0]));
    this.$=$$[$0-3];
break;
case 27:
 var x = [$$[$0-1]]; x.push(new Argument($$[$0],""));
      this.$=$$[$0-1];
break;
case 29:
actionList.push(new Action($$[$0-3],$$[$0-2],$$[$0-1]));
break;
case 30:
this.$=$$[$0-1];
break;
case 32:
/* Don't care about predconditions */ 
break;
case 33:
 this.$ = $$[$0];
break;
case 34:
 this.$ = $$[$0-1];
break;
case 37: case 38:
this.$ = $$[$0-1];
break;
case 39:
this.$=$$[$0];
break;
case 40:
[$$[$0-1]].push($$[$0]); this.$ = $$[$0-1];
break;
case 41:
 this.$ = new Fluent($$[$0-2], $$[$0-1], false); 
break;
case 42:
 this.$ = new Fluent($$[$0-3], $$[$0-2], true) 
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{4:[1,4]},{6:[1,5]},{7:6,15:[1,7]},{8:[1,8]},{8:[2,6]},{4:[1,10],9:9},{4:[1,12],10:11},{8:$V0,16:13,17:$V1,18:$V2,19:$V3},{4:$V4,8:$V5,11:17,12:18,13:19,14:20},{8:$V6,15:$V7,20:22,21:$V8},{8:[1,25]},{8:$V0,16:26,17:$V1,18:$V2,19:$V3},{8:$V0,16:27,17:$V1,18:$V2,19:$V3},{8:$V0,16:28,17:$V1,18:$V2,19:$V3},{8:[1,29]},{4:$V4,8:$V5,11:30,12:18,13:19,14:20},{4:$V4,8:$V5,11:31,12:18,13:19,14:20},{4:$V4,8:$V5,11:32,12:18,13:19,14:20},{22:[1,34],25:[1,33],31:[1,35]},{8:[1,36]},{8:$V6,15:$V7,20:37,21:$V8},{8:$V6,15:$V7,20:38,21:$V8},{4:[2,7]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{1:[2,1]},{8:[2,2]},{8:[2,3]},{8:[2,4]},{4:$V9,8:$Va,26:39,27:40},{8:$Vb,15:$Vc,23:42,24:$Vd},{15:[1,45]},o($Ve,[2,12]),{8:[2,13]},{8:[2,14]},{8:[1,46]},{4:$V9,8:$Va,26:47,27:40},{15:[1,48],29:[1,49]},{8:[1,50]},{8:$Vb,15:$Vc,23:51,24:$Vd},{15:[1,52]},{32:53,34:[1,54]},o($Ve,[2,20]),{8:[2,21]},o($Vf,$Vg,{28:55}),{4:[1,56]},o($Ve,[2,16]),{8:[2,17]},{8:$Vb,15:$Vc,23:57,24:$Vd},{33:58,35:59,37:[1,60]},{4:[1,61]},{8:[1,62],15:$Vh,30:$Vi},{15:[1,65]},{8:[2,18]},{8:[1,66]},{36:67,39:[1,68],42:[1,69]},{4:[1,72],38:70,44:71},o($Vf,$Vg,{28:73}),o($Ve,[2,23]),o($Vf,[2,25],{24:[1,74]}),o($Vf,[2,27]),o($Vf,$Vg,{28:75}),o($Ve,[2,29]),{8:[2,31]},{4:[1,77],38:76,44:71},{4:$Vj,43:78,44:79},o([39,42],[2,32]),o($Vk,[2,36]),{4:$Vj,15:$Vl,29:$Vm,40:[1,82],43:81,44:79},{8:[1,85],15:$Vh,30:$Vi},{15:[1,86]},{8:[1,87],15:$Vh,30:$Vi},{8:[2,33]},{4:$Vj,15:$Vl,29:$Vm,40:[1,88],43:81,44:79},{4:$Vj,8:[2,35],44:89},o($Ve,[2,39]),{15:$Vl,29:$Vm},{4:$Vj,8:[1,90],44:89},{4:$Vj,43:91,44:79},o($Vf,$Vg,{28:92}),{4:[1,93]},{37:[2,30]},o($Vf,[2,26]),{8:[1,94]},{4:$Vj,41:[1,95],43:91,44:79},o($Ve,[2,40]),o($Vk,[2,37]),{4:$Vj,8:[1,96],44:89},{8:[1,97],15:$Vh,30:$Vi},{15:[1,98]},o($Ve,[2,24]),{8:[1,99]},o($Vk,[2,38]),o($Vn,[2,41]),o($Vf,$Vg,{28:100}),{8:[2,34]},{8:[1,101],15:$Vh,30:$Vi},{8:[1,102]},o($Vn,[2,42])],
defaultActions: {7:[2,6],25:[2,7],26:[2,8],27:[2,9],28:[2,10],29:[2,1],30:[2,2],31:[2,3],32:[2,4],37:[2,13],38:[2,14],47:[2,21],51:[2,17],57:[2,18],67:[2,31],76:[2,33],85:[2,30],99:[2,34]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


var requirements = [];
var types = [];
var parameters = [];

/*list of constants followed by a list of types followed by where in the list
of constants the type was denoted (so I can attach types to constants at a
later stage )*/

function Constant(constantsList, types, typeIndex){
  this.constantsList = constantsList;
  this.types = types;
  this.typeIndex = typeIndex;
}

var constants = new Constant([], [], []);

function Argument(name, type){
  this.name = name;
  this.type = type;
};

/*arguments may be typed*/
function Predicate(name, arguments){
  this.name = name;
  this.arguments = arguments;
};

var predicates = [];

function Action(name, parameters, effects){
  this.name = name;
  this.parameters = parameters;
  this.effects = effects;
}

var actionList = [];

function Effect(effectlist) {
  this.effectlist = effectlist;
}

function Variable(name, type) {
  this.name = name;
  this.type = type;
}

function Fluent(predicate, arguments, negated){
  this.predicate = predicate;
  this.arguments = arguments;
  this.negated = negated;
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* ignore non animation comments */
break;
case 1: return 6;
break;
case 2: return 5;
break;
case 3: return 'PROBLEM';
break;
case 4: return 17;
break;
case 5: return 19;
break;
case 6: return 18;
break;
case 7: return 21;
break;
case 8: return 25;
break;
case 9: return 22;
break;
case 10: return 34;
break;
case 11: return 31;
break;
case 12: return 37;
break;
case 13: return 39;
break;
case 14: return 42;
break;
case 15: return 40;
break;
case 16: return 29;
break;
case 17: return 'WHEN';
break;
case 18:
break;
case 19: return 4; 
break;
case 20: return 8; 
break;
case 21:
break;
case 22:
break;
case 23:return 24;
break;
case 24:return 30;
break;
case 25:return 15; 
break;
}
},
rules: [/^(?:[;;].*)/,/^(?:domain\b)/,/^(?:define\b)/,/^(?:problem\b)/,/^(?::requirements\b)/,/^(?::strips\b)/,/^(?::typing\b)/,/^(?::types\b)/,/^(?::predicates\b)/,/^(?::constants\b)/,/^(?::parameters\b)/,/^(?::action\b)/,/^(?::precondition\b)/,/^(?::effect\b)/,/^(?::observe\b)/,/^(?:and\b)/,/^(?:not\b)/,/^(?:when\b)/,/^(?:.*$)/,/^(?:[(])/,/^(?:[)])/,/^(?:[\t ])/,/^(?:\n)/,/^(?:-)/,/^(?:(([?])+(-|([a-zA-Z_])|([0-9]))*))/,/^(?:(([a-zA-Z_])+(-|([a-zA-Z_])|([0-9]))*))/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = PDDL;
exports.Parser = PDDL.Parser;
exports.parse = function () { return PDDL.parse.apply(PDDL, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}