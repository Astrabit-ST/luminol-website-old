# luminol.dev code style guidelines

This document defines how Luminol's web page's codebase should be structured, formatted and written in a ruleset format.

## Table of contents
1. [Source files](#src)
   1. [Encoding](#src_encoding)
   2. [Naming](#src_naming)
      1. [TypeScript Code](#src_naming_ts)
      2. [TypeScript XML Code](#src_naming_tsx)
      3. [Markdown Documentation Files](#src_naming_md)
2. [Code Conventions](#ts)
   1. [Naming](#ts_ident)
      1. [Class names](#ts_ident_class)
         1. [Property names](#ts_ident_class_property)
      2. [Method names](#ts_ident_method)
      3. [Enumeration names](#ts_ident_enum)
      4. [Constant names](#ts_ident_const)
   2. [Formatting](#ts_fmt)
      1. [Indentation](#ts_fmt_indent)
      2. [Block](#ts_fmt_block)
      3. [Literals](#ts_fmt_literal)
         1. [Array and Object literals](#ts_fmt_literal_objects)
         2. [Classes](#ts_fmt_literal_class)
      4. [Statements](#ts_fmt_stmt)
         1. [Semicolon at the end of the statement](#ts_fmt_stmt_semicolons)
         2. [One statement per line](#ts_fmt_stmt_one_per_line)
         3. [Column limit](#ts_fmt_stmt_column_limit)
         4. [`if`, `else if` and `else`](#ts_fmt_stmt_ifelse)
         5. [`switch`](#ts_fmt_stmt_switch)
         6. [`do` and `with`](#ts_fmt_stmt_do_and_with)
         7. [`try`](#ts_fmt_stmt_try)
   3. [ECMAScript modules](#ts_es)
      1. [Imports](#ts_es_imports)
         1. [File extensions](#ts_es_imports_fileext)
         2. [Duplicate imports](#ts_es_imports_duplicate)
         3. [Standard Library](#ts_es_imports_sl)
      2. [Exports](#ts_es_exports)
         1. [Default exports](#ts_es_exports_default)
         2. [Export mutability](#ts_es_exports_mut)
   4. [Declarations](#ts_decl)
      1. [Variables](#ts_decl_var)
         1. [Declaration before use](#ts_decl_var_use)
         2. [Use of `const` and `let`](#ts_decl_var_const)
      2. [Functions](#ts_decl_fn)
         1. [Inner functions](#ts_decl_fn_inner)

## Guidelines

### [1](#src) **Source files** <a id="src"></a>

This section defines how human-readable, plain-text files should be named, edited and perceived.

- [1.1](#src_encoding) **Encoding**: All source files must be encoded with UTF-8 (without BOM, for the reason why see the official [**Unicode Specification, Section 2.6**](http://www.unicode.org/versions/Unicode5.0.0/ch02.pdf)). <a id="src_encoding"></a>
- [1.2](#src_naming) **Naming** <a id="src_naming"></a>
  - [1.2.1](#src_naming_ts) **TypeScript Code**: TypeScript Code should be stored as `.ts` files. File names are written in lower camel case. <a id="src_naming_ts"></a>
  - [1.2.2](#src_naming_tsx) **TypeScript XML Code**: TypeScript XML Code should be stored as `.tsx` files. File names are written in upper camel case. <a id="src_naming_tsx"></a>
  - [1.2.3](#src_naming_md) **Markdown Documentation Files**: Documentation should be stored as `.md` files. File names are written in uppercase, with underscores to separate parts of the name. <a id="src_naming_md"></a>
  
### [2](#ts) **Code Conventions** <a id="ts"></a>

This section defines how TypeScript and TypeScript XML code should be formatted and written.

- [2.1](#ts_naming) **Naming**: Identifiers use only ASCII letters, digits and underscore characters. Identifiers should not consist of ambiguous abbreviations. <a id="ts_naming"></a>
  - [2.1.1](#ts_naming_class) **Class names**: Class names should be written in upper camel case and should avoid using underscores. <a id="ts_naming_class"></a>
    - [2.1.1.1](#ts_naming_class_property) **Property names**: Class property names should be written in upper camel case and must not use underscores. <a id="ts_naming_class_property"></a>
    - **Example**:
      ```ts
      class Calculator {
         private resultValue: number;

         constructor(firstValue: number, secondValue: number) {
            this.resultValue = firstValue + secondValue
         }

         getResult(): number {
            return this.resultValue
         }
         isResultEven(): boolean {
            return this.resultValue % 2 == 0
         }
      }
      ```
  - [2.1.2](#ts_naming_method) Method names should be written in lower camel case. Getters must be named as `getFoo` (`isFoo` or `hasFoo` if the return/argument value is a boolean) and setters as `setFoo`. <a id="ts_naming_method"></a>
    - **Example**:
      ```ts
      function greet(name: string): void {
         console.log(`Helo, ${name}!`)
      }
      ```
   - [2.1.3](#ts_naming_enum) **Enumeration names**: Enumeration names should be written in upper camel case, similar to classes. <a id="ts_naming_enum"></a>
     - **Example**:
         ```ts
         enum Direction {
            Up = 2,
            Down = 8,
            Left = 4,
            Right = 6
         }
         ```
   - [2.1.4](#ts_naming_const) **Constant names**: Constant names should be written in uppercase, with underscores being used to separate parts of the name. <a id="ts_naming_const"></a>
     - **Definition of "constant**: In the current context, "constant" refers to a module-level `const` declaration containing containing a value which is guranteed to be never mutated.
     - **Example**:
         ```ts
         const GITHUB_ORG_URL = 'https://github.com/Astrabit-ST'

         function getLuminolGitHubLink(): string {
            return `${GITHUB_ORG_URL}/Luminol`
         }
         ```
- [2.2](#ts_fmt) **Formatting** <a id="ts_fmt"></a>
  - [2.2.1](#ts_fmt_indent) **Indentation**: Each time a new statement is opened, the indent increases by 4 spaces. The indent level applies to both code and comments. <a id="ts_fmt_indent"></a>
  - [2.2.2](#ts_fmt_block) **Block**: Code brackets (braces, `{}`) are required in all control statements, even if the body contains only one statement. <a id="ts_fmt_block"></a>
    - **Exception**: A simple `if` statement that can fit entirely on a single line with no wrapping (and that doesn’t have an else) may be kept on a single line with no braces when it improves readability. This is the only case in which a control structure may omit braces and newlines.
  - [2.2.3](#ts_fmt_literal) **Literals** <a id="ts_fmt_literal"></a>
    - [2.2.3.1](#ts_fmt_literal_objects) **Array and Object literals**: Any array or object literal may be optionally constructed to look like a "block". <a id="ts_fmt_literal_objects"></a>
      - **Example**:
         ```ts
         const numbers = [
            0,
            1,
            2,
            3,
            4
         ]

         const contact = {
            'name': 'John',
            'number': '+1 xxx-xxx-xx'
         }
         ```
    - [2.2.3.2](#ts_fmt_literal_class) **Classes**: Any class literal should be formatted as it it were a "block-like" construct. <a id="ts_fmt_literal_class"></a>
      - **Example**:
         ```ts
         class Foo {
            constructor() {}
            isBar(): boolean {
               return false
            }
         }
         ```
  - [2.2.4](#ts_fmt_stmt) **Statements** <a id="ts_fmt_stmt"></a>
    - [2.2.4.1](#ts_fmt_stmt_semicolons) **Semicolon at the end of the statement**: Semicolons at the end of any statement must be omitted. <a id="ts_fmt_stmt_semicolons"></a>
    - [2.2.4.2](#ts_fmt_stmt_one_per_line): **One statement per line**: Each line should contain only one statement. <a id="ts_fmt_stmt_one_per_line"></a>
    - [2.2.4.3](#ts_fmt_stmt_column_limit): **Column limit**: Code lines that contain more than 80 characters must be line wrapped. <a id="ts_fmt_stmt_column_limit"></a>
    - [2.2.4.4](#ts_fmt_stmt_ifelse) **`If`, `else if` and `else`**: Any `if`/`else` statement must not contain a whitespace after an `if` keyword, before and after group parenthesis of the parameter list. However, `if` statements must have one whitespace after the closing group parentheses (`)`). Each new line in brackets must be indented by 4 spaces. <a id="ts_fmt_stmt_ifelse"></a>
      - **Example**:
         ```ts
         const isTrue = true

         if(isTrue) {
            console.log('True!')
         }
         ```
    - [2.2.4.5](#ts_fmt_stmt_switch) **`switch`**: Same rules apply as to the `if` statement. When a new `case` block is opened, the block itself and the code inside of it must be indented by 4 spaces and must end with a `break` keyword. <a id="ts_fmt_stmt_do_and_with"></a>
      - **Example**:
         ```ts
         enum Color {
            Red,
            Green,
            Blue,
            White
         }

         const color = Color.Red

         switch(color) {
            case Color.Red:
               /* ... */
               break
            case Color.Green:
               /* ... */
               break
            case Color.Blue:
               /* ... */
               break
            default:
               /* ... */
         }
         ```
    - [2.2.4.6](#ts_fmt_stmt_do_and_with) **`do` and `with`**: `do` and `with` statements must not be used. <a id="ts_fmt_stmt_do_and_with"></a>
    - [2.2.4.7](#ts_fmt_stmt_try) **`try`**: Any `try` keyword must be separated from the code block by a whitespace. If `catch` is present, it must not contain a whitespace before or after the group parenthesis, the same implies to the inside of the group. Usage of `finally` block is prohibited. <a id="ts_fmt_stmt_try"></a>
      - **Example**:
         ```ts
         try {
            throw 'An exception has occured!'
         } catch(e) {
            console.error(e)
         }
         ```

- [3](#ts_es) **ECMAScript modules** <a id="ts_es"></a>
  - [3.1](#ts_es_imports) **Imports** <a id="ts_es_imports"></a>
    - [3.1.1](#ts_es_imports_fileext) **File extensions**: File extensions in module imports may be omitted, but it's not a requirement. <a id="ts_es_imports_fileext"></a>
      - **Example**:
         ```ts
         import 'node:fs' /* node_modules import */
         import './components/Component' /* local import */
         import './package.json' /* local import, but with a file extension */
         ```
    - [3.1.2](#ts_es_imports_duplicate) **Duplicate imports**: Duplicate imports are prohibited, as they may confuse the reader and are unnecessary. <a id="ts_es_imports_duplicate"></a>
      - **Example**:
         ```ts
         import { readFile } from 'node:fs'
         import { readdir } from 'node:fs' /* unnecessary import, can be merged into the first `node:fs` import */
         ```
    - [3.1.3](#ts_es_imports_sl) **Standard Library**: Imports from the standard Node.JS library must start with a `node:` prefix to clarify that the module is built into the engine. <a id="ts_es_imports_sl"></a>
     - **Example**:
         ```ts 
         import { userInfo, hostname } from 'node:os'

         const userInformation = userInfo()
         const machineName = hostname()

         console.log(`${userInformation.username}@${machineName} ${userInformation.homedir}`)
         ```
  - [3.2](#ts_es_exports) **Exports** <a id="ts_es_exports"></a>
    - [3.2.1](#ts_es_exports_default) **Default exports**: Default exports are prohibited. When importing a module with a default value, it must be named which may create confusion for the readers as to what the imported type is. <a id="ts_es_exports_default"></a>
    - [3.2.2](#ts_es_exports_mut) **Export mutability**: Variables of an exported module must not be mutated directly, but through interfaces that module may provide. <a id="ts_es_exports_mut"></a>

- [4](#ts_decl) **Declarations** <a id="ts_decl"></a>
  - [4.1](#ts_decl_var) **Variables** <a id="ts_decl_var"></a>
    - [4.1.1](#ts_decl_var_use) **Declaration before use**: Variables must be declared before being used. While the JavaScript Specification doesn't require that, doing so will make the project easier to read and detect undeclared variables that may become implied. <a id="ts_decl_var_use"></a>
    - [4.1.2](#ts_decl_var_const) **Use of `const` and `let`**: Variables should be declared as constants by default, unless they need to be reassigned. <a id="ts_decl_var_const"></a>
  - [4.2](#ts_decl_fn) **Functions** <a id="ts_decl_fn"></a>
    - [4.2.1](#ts_decl_fn_inner) **Inner functions**: Inner functions should come after variable declarations as to clarify what variables are included in the outer function's scope.

## Credits
- [**Google's JavaScript Guide**](https://google.github.io/styleguide/jsguide.html) for some rulesets.
- [**Douglas Crockford's Code Conventions for the JavaScript Programming Language**](https://www.crockford.com/code.html) for the rulesets 4.1.1 and 4.2.1.
- [**Airbnb's JavaScript Guide**](https://github.com/airbnb/javascript) for the format of this document.
- [**somedevfox**](https://github.com/somedevfox) for writing this guide.