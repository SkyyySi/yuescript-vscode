import type * as TmLanguage from "./types";

const root: TmLanguage.Root<"yue"> = {
	name: "YueScript",
	scopeName: "source.yue",
	fileTypes: [
		"yue",
	],
	patterns: [
		{
			match: "\\A(#!).*$\\n?",
			name: "comment.line.shebang.yue",
			captures: {
				"1": {
					name: "punctuation.definition.comment.yue"
				}
			}
		},
		{
			// Functions
			match: "(\\(.*?\\))?\\s*([=-]>)",
			name: "meta.inline.function.yue",
			captures: {
				"1": {
					name: "variable.parameter.function.yue"
				},
				"2": {
					name: "storage.type.function.yue"
				}
			}
		},
		{
			// Back-calls
			match: "(?<=^|\\bdo\\b|[=-]>)\\s*(\\(.*?\\))?\\s*(<[=-]\\s*(?=[a-zA-Z_]))",
			name: "meta.inline.function.yue",
			captures: {
				"1": {
					name: "variable.parameter.function.yue"
				},
				"2": {
					name: "storage.type.function.yue"
				}
			}
		},
		{
			match: "(\\b[A-Z]\\w*)\\s*",
			name: "entity.name.type.class.yue",
			captures: {
				"1": {
					name: "entity.name.type.class"
				}
			}
		},
		{
			begin: "\\[(=*)\\[",
			beginCaptures: {
				"0": {
					name: "punctuation.definition.string.begin.yue"
				}
			},
			end: "\\]\\1\\]",
			endCaptures: {
				"0": {
					name: "punctuation.definition.string.end.yue"
				}
			},
			name: "string.quoted.other.multiline.yue"
		},
		{
			begin: "(?<!-)--\\[\\[",
			captures: {
				"0": {
					name: "punctuation.definition.comment.yue"
				}
			},
			end: "\\]\\]",
			name: "comment.block.yue",
			patterns: [
				{
					match: "@\\w*",
					name: "storage.type.annotation.yue"
				}
			]
		},
		{
			begin: "(?<!-)--",
			end: "(?:[ \\t]*\\n)",
			name: "comment.line.yue",
			patterns: [
				{
					match: "@\\w*",
					name: "storage.type.annotation.yuescript"
				}
			],
			captures: {
				"0": {
					name: "punctuation.definition.comment.yue"
				}
			}
		},
		{
			match: "(::)\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*(::)",
			name: "string.tag.lua",
			captures: {
				"1": {
					name: "punctuation.section.embedded.begin.yue"
				},
				"2": {
					name: "punctuation.section.embedded.end.yue"
				}
			}
		},
		{
			patterns: [
				{
					match: "<\\b(?:mode|name|add|sub|mul|div|mod|pow|unm|idiv|band|bor|bxor|bnot|shl|shr|concat|len|eq|lt|le|index|newindex|call|metatable|gc|close|tostring|pairs|ipairs)\\b>",
					name: "constant.language.yue"
				},
				{
					match: "<>",
					name: "constant.language.yue"
				},
				{
					match: "<(\"(?:\\\\\"|[^\"])*\")>",
					name: "constant.language.yue",
					captures: {
						"1": {
							name: "string.quoted.double.yue"
						}
					}
				},
				{
					match: "<('(?:\\\\'|[^'])*')>",
					name: "constant.language.yue",
					captures: {
						"1": {
							name: "string.quoted.single.yue"
						}
					}
				},
				{
					match: "<\\w+>",
					name: "invalid.illegal.yue"
				},
			]
		},
		{
			match: "(\\+|\\-|\\*|/|%|\\^|//|\\||\\&|>>|<<|(?<!\\?)\\?{2}(?!\\?)|(?<!\\.)\\.{2}(?!\\.)|\\band|\\bor)=?",
			name: "keyword.operator.yue"
		},
		{
			match: "\\[\\]\\s*=",
			name: "keyword.operator.yue"
		},
		{
			match: "==|~=|\\!=|>|>=|<|<=",
			name: "keyword.operator.yue"
		},
		{
			match: "#|\\-|~|\\?|!",
			name: "keyword.operator.yue"
		},
		{
			match: "\\|>|=|:=|(?<!:):(?!:)|,|\\b_\\b",
			name: "keyword.operator.yue"
		},
		{
			match: "(?<!\\.)\\.{3}(?!\\.)(?!\\w+)",
			name: "constant.language.yue"
		},
		{
			match: "(?x)\\b(?<!\\.|:|::|\\\\|\\$)\\b(?:import|as|from|export|macro|local|global|close|const|class|extends|using)\\b(?!:)",
			name: "keyword.yue"
		},
		{
			match: "(?x)\\b(?<!\\.|:|::|\\\\|\\$)\\b(?:if|then|else|elseif|until|unless|switch|when|with|do|for|while|repeat|return|continue|break|try|catch|goto)\\b(?!:)",
			name: "keyword.control.yue"
		},
		{
			match: "(?x)\\b(?<!\\.|:|::|\\\\|\\$)\\b(?:or|and|in|not)\\b(?!:)",
			//name: "keyword.operator.yue"
			name: "keyword.control.yue"
		},
		{
			match: "(?x)\\b(?<!\\.|:|::|\\\\|\\$)\\b(?:true|false|nil)\\b(?!:)",
			//match: "\\b(?<!\\.)(true|false|nil)(?!\\s*[:=])\\b",
			name: "constant.language.boolean.yue"
		},
		{
			match: "\\b(?<![\\.|:|::|\\\\|\\$])(function|end)(?!:)\\b",
			name: "invalid.illegal.yue"
		},
		{
			match: "((?<!\\.)\\.{4,}(?!\\.))",
			name: "invalid.illegal.yue"
		},
		{
			begin: "(?<=\\s|^)(\\{)(?=.+?\\}\\s+[:=])",
			beginCaptures: {
				"0": {
					name: "keyword.control.yue"
				}
			},
			end: "(\\}\\s*[:=])",
			endCaptures: {
				"0": {
					name: "keyword.control.yue"
				}
			},
			name: "meta.variable.assignment.destructured.object.yue",
			patterns: [
				{
					include: "#expression"
				}
			]
		},
		{
			match: "(?<=[ \t]*)\\b(?:new)\\b(?=:(?:\\s*\\(.*\\))?\\s*=>)",
			name: "variable.language.yue"
		},
		{
			match: "(?x)\n\t\t\t\t(?<=^|\\s)\n\t\t\t\t(?=@?[a-zA-Z\\$_]\\??)\n\t\t\t\t(\n\t\t\t\t\t@?[a-zA-Z\\$_]\\??(\\w|\\$|:|\\.)*\\s*\n\t\t\t\t\t(?=[:=](\\s*\\(.*\\))?\\s*([=-]>))\n\t\t\t\t)\n\t\t\t",
			name: "meta.function.yue",
			captures: {
				"1": {
					name: "entity.name.function.yue"
				},
				"2": {
					name: "entity.name.function.yue"
				},
				"3": {
					name: "variable.parameter.function.yue"
				},
				"4": {
					name: "storage.type.function.yue"
				}
			}
		},
		{
			match: "\\b__(class|base|init|inherited|mode|name|add|sub|mul|div|mod|pow|unm|idiv|band|bor|bxor|bnot|shl|shr|concat|len|eq|lt|le|index|newindex|call|metatable|gc|close|tostring|pairs|ipairs)\\b",
			name: "entity.name.function.yue"
		},
		{
			match: "(?:\\bclass\\b)\\s+(@?[a-zA-Z\\$_][\\w\\.]*)?(?:\\s+(?:\\bextends\\b)\\s+(@?[a-zA-Z\\$\\._][\\w\\.]*))?",
			name: "meta.class.yue",
			captures: {
				"1": {
					name: "storage.type.class.yue"
				},
				"2": {
					name: "entity.name.type.class.yue"
				},
				"3": {
					name: "keyword.control.inheritance.yue"
				},
				"4": {
					name: "entity.other.inherited-class.yue"
				}
			}
		},
		{
			match: "(?x)\\b(?<!\\.|:|::|\\\\|\\$)\\b(?:_ENV|_G|_VERSION|arg)\\b(?!(?:\\s*(?:(?:\\+|\\-|\\*|/|%|\\^|//|\\||\\&|>>|<<|(?<!\\?)\\?{2}(?!\\?)|(?<!\\.)\\.{2}(?!\\.)|\\band|\\bor)?=|:=)\\s*|:))",
			name: "constant.language.yue"
		},
		{
			include: "#expression"
		},
		{
			match: ",[ \\t]*",
			name: "meta.delimiter.object.comma.yue"
		},
		{
			match: "\\.|::|\\\\",
			name: "meta.delimiter.method.yue"
		},
		{
			match: "\\{|\\}",
			name: "meta.brace.curly.yue"
		},
		{
			match: "\\(|\\)",
			name: "meta.brace.round.yue"
		},
		{
			match: "\\[|\\]",
			name: "meta.brace.square.yue"
		}
	],
	repository: {
		expression: {
			patterns: [
				{
					include: "#string"
				},
				{
					include: "#numeric"
				},
				{
					include: "#builtins"
				},
				{
					include: "#variable_name"
				}
			]
		},
		keyword: {
			patterns: [
				{
					match: "\\b(?:import|as|from|export|macro|local|global|close|const|class|extends|using)\\b",
					name: "keyword.yue"
				},
				{
					match: "\\b(?:if|then|else|elseif|until|unless|switch|when|with|do|for|while|repeat|return|continue|break|try|catch|goto)\\b",
					name: "keyword.control.yue"
				},
				{
					match: "\\b(?:or|and|in|not)\\b",
					name: "keyword.operator.yue"
				}
			]
		},
		string: {
			patterns: [
				{
					include: "#single_quoted_string"
				},
				{
					include: "#double_quoted_string"
				}
			]
		},
		string_format_code: {
			patterns: [
				{
					match: "%(%|a|A|c|d|e|E|f|g|G|i|o|p|q|s|u|x|X)",
					name: "constant.character.yue"
				}
			]
		},
		string_escape_sequence: {
			patterns: [
				{
					match: "\\\\([abfnrtvz\\'\"\\\\]|\\d{1,3}|x\\h{2}|u\\{\\h+\\})",
					name: "constant.character.yue"
				},
				{
					match: "\\\\.",
					name: "invalid.illegal.yue"
				}
			]
		},
		double_quoted_string: {
			patterns: [
				{
					begin: "\"",
					beginCaptures: {
						"0": {
							name: "punctuation.definition.string.begin.yue"
						}
					},
					end: "\"",
					endCaptures: {
						"0": {
							name: "punctuation.definition.string.end.yue"
						}
					},
					name: "string.quoted.double.yue",
					patterns: [
						{
							include: "#string_escape_sequence"
						},
						{
							include: "#interpolated_yue"
						},
						{
							include: "#string_format_code"
						}
					]
				}
			]
		},
		single_quoted_string: {
			patterns: [
				{
					begin: "'",
					beginCaptures: {
						"0": {
							name: "punctuation.definition.string.begin.yue"
						}
					},
					end: "'",
					endCaptures: {
						"0": {
							name: "punctuation.definition.string.end.yue"
						}
					},
					name: "string.quoted.single.yue",
					patterns: [
						{
							include: "#string_escape_sequence"
						},
						{
							include: "#string_format_code"
						},
					]
				}
			]
		},
		interpolated_yue: {
			patterns: [
				{
					begin: "\\#\\{",
					captures: {
						"0": {
							name: "punctuation.section.embedded.yue"
						}
					},
					end: "\\}",
					name: "source.yue.embedded.source",
					patterns: [
						{
							include: "$self"
						}
					]
				}
			]
		},
		variable_name: {
			patterns: [
				{
					match: "(?x)\\b(?<!\\.|:|::|\\\\|\\$)(\\b(?:self)\\b)(?!:)\\b",
					name: "invalid.deprecated.yue"
				},
				{
					match: "(?x)\\b(?<!\\.|:|::|\\\\|\\$)\\b(?:super)\\b(?!(?:\\s*(?:(?:\\+|\\-|\\*|/|%|\\^|//|\\||\\&|>>|<<|(?<!\\?)\\?{2}(?!\\?)|(?<!\\.)\\.{2}(?!\\.)|\\band|\\bor)?=|:=)\\s*|:))",
					name: "variable.language.yue"
				},
				{
					match: "(?:\\${2,}|@{3,})(?:(?:\\b[a-zA-Z_]\\w*)?((?:\\.|::|\\\\)\\b[a-zA-Z_]\\w*)*\\b)?",
					name: "invalid.illegal.yue"
				},
				{
					match: "(?<!\\$)\\$\\b[a-zA-Z_]\\w*\\b",
					name: "entity.name.function.preprocessor.yue"
				},
				{
					match: "(?<!\\$)\\$(?!\\$)",
					name: "invalid.illegal.yue"
				},
				{
					match: "(?<![\\$@])@@(?:(?:\\b[a-zA-Z_]\\w*)?((?:\\.|::|\\\\)\\b[a-zA-Z_]\\w*)*\\b)?",
					name: "variable.other.static.yue"
				},
				{
					match: "(?<![\\$@])@(?:(?:\\b[a-zA-Z_]\\w*)?((?:\\.|::|\\\\)\\b[a-zA-Z_]\\w*)*\\b)?",
					name: "variable.other.member.yue"
				},
				{
					match: "(?<![\\$@])\\b[a-zA-Z_]\\w*((?:\\.|::|\\\\)\\b[a-zA-Z_]\\w*\\b)*",
					name: "variable.assignment.yue"
				},
				{
					match: "(?<![\\$@])\\b([a-zA-Z\\$_]\\w*(\\.\\w+)*)\\b",
					name: "variable.assignment.yue",
					captures: {
						"1": {
							name: "variable.assignment.yue"
						}
					}
				}
			]
		},
		numeric: {
			patterns: [
				{
					match: "\\b([\\d_]+(\\.[\\d_]+)?|\\.[\\d_]+)(e[+\\-]?[\\d_]+)?\\b",
					name: "constant.numeric.yue"
				},
				// TODO: Add hexadecimal exponents (`0x...[pP][+\\-]?\\d`)
				{
					match: "\\b0x(((?:\\h|\\h[\\h_]*\\h)(\\.(?:\\h|\\h[\\h_]*\\h))?)|\\.(?:\\h|\\h[\\h_]*\\h))\\b",
					name: "constant.numeric.yue"
				},
				{
					match: "\\b\\d(?:\\w|\\.|:|::|\\\\)+\\b",
					name: "invalid.illegal.yue"
				}
			]
		},
		builtins: {
			// Generated with /src/generate-builtins-patterns.yue
			patterns: [
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*(?:lpeg|lpeglabel)(?:(?:\\.|::|\\\\)(?:B|C|Carg|Cb|Cc|Cf|Cg|Cmt|Cp|Cs|Ct|P|R|S|T|V|locale|match|pcode|ptree|setmaxstack|type|utfR|version))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*(?:re|relabel)(?:(?:\\.|::|\\\\)(?:calcline|compile|find|gsub|match|updatelocale))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*coroutine(?:(?:\\.|::|\\\\)(?:close|create|isyieldable|resume|running|status|wrap|yield))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*debug(?:(?:\\.|::|\\\\)(?:debug|gethook|getinfo|getlocal|getmetatable|getregistry|getupvalue|getuservalue|setcstacklimit|sethook|setlocal|setmetatable|setupvalue|setuservalue|traceback|upvalueid|upvaluejoin))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*io(?:(?:\\.|::|\\\\)(?:close|flush|input|lines|open|output|popen|read|stderr|stdin|stdout|tmpfile|type|write))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*math(?:(?:\\.|::|\\\\)(?:abs|acos|asin|atan|atan2|ceil|cos|cosh|deg|exp|floor|fmod|frexp|huge|ldexp|log|log10|max|maxinteger|min|mininteger|modf|pi|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh|tointeger|type|ult))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*os(?:(?:\\.|::|\\\\)(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*package(?:(?:\\.|::|\\\\)(?:config|cpath|loaded|loadlib|path|preload|searchers|searchpath))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.Date(?:(?:\\.|::|\\\\)(?:Format|Interval|_class|_init|add|cast|catch|class_of|day|diff|hour|is_a|is_weekend|last_day|min|month|month_name|sec|set|toLocal|toUTC|tzone|weekday_name|yday|year))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.List(?:(?:\\.|::|\\\\)(?:_class|_create|_init|_name|append|cast|catch|chop|class_of|clear|clone|concat|contains|count|default_map|default_map_with|extend|filter|foreach|foreachm|get|index|insert|is_a|iter|iterate|join|len|map|map2|mapm|minmax|new|partition|pop|push|put|range|reduce|remove|remove_value|reverse|slice|slice_assign|sort|sorted|splice|split|transform))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.Map(?:(?:\\.|::|\\\\)(?:_class|_init|_name|cast|catch|class_of|get|getvalues|is_a|items|iter|keys|len|set|setdefault|update|values))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.MultiMap(?:(?:\\.|::|\\\\)(?:_base|_class|_init|_name|_parent_with_init|cast|catch|class_of|get|getvalues|is_a|items|iter|keys|len|set|setdefault|update|values))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.OrderedMap(?:(?:\\.|::|\\\\)(?:_base|_class|_init|_name|_parent_with_init|cast|catch|class_of|get|getvalues|insert|is_a|items|iter|keys|len|set|setdefault|sort|update|values))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.Set(?:(?:\\.|::|\\\\)(?:_base|_class|_init|_name|_parent_with_init|cast|catch|class_of|difference|get|getvalues|intersection|is_a|isdisjoint|isempty|issubset|items|iter|keys|len|map|set|setdefault|symmetric_difference|union|update|values))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.app(?:(?:\\.|::|\\\\)(?:appfile|lua|parse_args|platform|require_here|script_name))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.array2d(?:(?:\\.|::|\\\\)(?:column|columns|default_range|extract_cols|extract_rows|flatten|forall|iter|map|map2|move|new|parse_range|product|range|reduce2|reduce_cols|reduce_rows|remove_col|remove_row|reshape|row|rows|set|size|slice|swap_cols|swap_rows|transpose|write))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.class(?:(?:\\.|::|\\\\)(?:properties))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.compat(?:(?:\\.|::|\\\\)(?:dir_separator|execute|getfenv|is_windows|jit|load|lua51|setfenv))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.comprehension(?:(?:\\.|::|\\\\)(?:new))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.config(?:(?:\\.|::|\\\\)(?:lines|read))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.data(?:(?:\\.|::|\\\\)(?:filter|new|query|read|write))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.dir(?:(?:\\.|::|\\\\)(?:clonetree|copyfile|dirtree|filter|fnmatch|getallfiles|getdirectories|getfiles|makepath|movefile|rmtree|walk))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.file(?:(?:\\.|::|\\\\)(?:access_time|copy|creation_time|delete|modified_time|move|read|write))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.func(?:(?:\\.|::|\\\\)(?:And|Args|Eq|Ge|Gt|I|Le|Len|Lt|Nil|Not|Or|PE|Var|_|_0|_1|_2|_3|_4|_5|bind|bind1|collect_values|compose|curry|import|instantiate|isPE|lookup_imported_name|register|repr|tail))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.input(?:(?:\\.|::|\\\\)(?:alltokens|create_getter|fields|numbers|words))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.lapp(?:(?:\\.|::|\\\\)(?:add_type|assert|callback|error|open|process_options_string|quit|show_usage_error))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.lexer(?:(?:\\.|::|\\\\)(?:cpp|expecting|get_keywords|get_separated_list|getline|getrest|insert|lineno|lua|scan|skipws))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.luabalanced(?:(?:\\.|::|\\\\)(?:gsub|match_bracketed|match_explist|match_expression|match_namelist|match_string))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.operator(?:(?:\\.|::|\\\\)(?:add|call|concat|div|eq|ge|gt|index|land|le|len|lnot|lor|lt|match|mod|mul|neq|nop|optable|pow|sub|table|unm))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.path(?:(?:\\.|::|\\\\)(?:abspath|attrib|basename|chdir|common_prefix|currentdir|dir|dirname|dirsep|exists|expanduser|extension|getatime|getctime|getmtime|getsize|is_windows|isabs|isdir|isfile|islink|join|link_attrib|mkdir|normcase|normpath|package_path|relpath|rmdir|sep|splitext|splitpath|tmpname))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.permute(?:(?:\\.|::|\\\\)(?:iter|list_iter|list_table|order_iter|order_table|table))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.pretty(?:(?:\\.|::|\\\\)(?:debug|dump|load|number|read|write))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.seq(?:(?:\\.|::|\\\\)(?:copy|copy2|copy_tuples|count|count_map|enum|equal_to|filter|foreach|greater_than|import|iter|keys|last|less_than|lines|list|map|mapmethod|matching|minmax|printall|random|range|reduce|skip|sort|splice|sum|take|unique|zip))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.sip(?:(?:\\.|::|\\\\)(?:compile|create_pattern|create_spec_fun|custom_pattern|fields|match|match_at_start|pattern|read))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.strict(?:(?:\\.|::|\\\\)(?:closed_module|make_all_strict|module))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.stringio(?:(?:\\.|::|\\\\)(?:create|lines|open))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.stringx(?:(?:\\.|::|\\\\)(?:Template|at|capitalize|center|count|dedent|endswith|expandtabs|fill|format_operator|import|indent|isalnum|isalpha|isdigit|islower|isspace|isupper|join|lfind|lines|ljust|lstrip|partition|quote_string|replace|rfind|rjust|rpartition|rstrip|shorten|split|splitlines|splitv|startswith|strip|title|wrap))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.tablex(?:(?:\\.|::|\\\\)(?:_normalize_slice|clear|compare|compare_no_order|copy|count_map|deepcompare|deepcopy|difference|filter|find|find_if|foreach|foreachi|icopy|imap|imap2|index_by|index_map|insertvalues|intersection|keys|makeset|map|map2|map_named_method|mapn|merge|move|new|pairmap|range|readonly|reduce|removevalues|rfind|search|set|size|sort|sortv|sub|transform|union|update|values|zip))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.template(?:(?:\\.|::|\\\\)(?:compile|substitute))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.test(?:(?:\\.|::|\\\\)(?:asserteq|asserteq2|assertmatch|assertraise|complain|error_handler|timer|tuple))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.text(?:(?:\\.|::|\\\\)(?:Template|at|capitalize|center|count|dedent|endswith|expandtabs|fill|format_operator|import|indent|isalnum|isalpha|isdigit|islower|isspace|isupper|join|lfind|lines|ljust|lstrip|partition|quote_string|replace|rfind|rjust|rpartition|rstrip|shorten|split|splitlines|splitv|startswith|strip|title|wrap))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.types(?:(?:\\.|::|\\\\)(?:is_callable|is_empty|is_indexable|is_integer|is_iterable|is_type|is_writeable|to_bool|type))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.url(?:(?:\\.|::|\\\\)(?:quote|unquote))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.utils(?:(?:\\.|::|\\\\)(?:_VERSION|add_function_factory|array_tostring|assert_arg|assert_string|bind1|bind2|choose|dir_separator|enum|escape|execute|executeex|fprintf|function_arg|getfenv|import|is_type|is_windows|jit|kpairs|load|lua51|memoize|npairs|on_error|pack|patterns|printf|quit|quote_arg|raise|raise_deprecation|readfile|readlines|set_deprecation_func|setfenv|split|splitv|stdmt|string_lambda|unpack|writefile))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*pl\\.xml(?:(?:\\.|::|\\\\)(?:basic_parse|clone|compare|elem|is_tag|new|parse|parsehtml|tags|tostring|walk|xml_escape|xml_unescape))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*string(?:(?:\\.|::|\\\\)(?:byte|char|dump|find|format|gmatch|gsub|len|lower|match|pack|packsize|rep|reverse|sub|unpack|upper))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*table(?:(?:\\.|::|\\\\)(?:concat|insert|move|pack|remove|sort|unpack))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*utf8(?:(?:\\.|::|\\\\)(?:char|charpattern|codepoint|codes|len|offset))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*yue(?:(?:\\.|::|\\\\)(?:check|dofile|file_exist|find_modulepath|format|insert_loader|is_ast|loadfile|loadstring|macro_env|options|p|pcall|read_file|to_ast|to_lua|traceback|version|yue_compiled))?\\b"
				},
				{
					name: "support.function.library.yue",
					match: "\\b(?:_G(?:\\.|:|::|\\\\))*(?:_G|_VERSION|arg|assert|collectgarbage|coroutine|debug|dofile|error|getmetatable|io|ipairs|lfs|load|loadfile|math|next|os|package|pairs|pcall|print|rawequal|rawget|rawlen|rawset|require|select|setmetatable|string|table|tonumber|tostring|type|utf8|warn|xpcall)\\b"
				},
			]
		}
	}
};
