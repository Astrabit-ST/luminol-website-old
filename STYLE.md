# luminol.dev code style guidelines

## Table of contents

1. [Source files](#source-files)
    1. [Encoding](#source_encoding)
    1. [Naming scheme](#source_naming)
        1. [Documentation](#source_naming_doc)
        1. [TypeScript Code](#source_naming_ts)
        1. [TypeScript XML Code](#source_naming_tsx)
1. [ECMAScript Modules](#esmodules)
    1. [Imports](#es_imports)
        1. [File Extensions](#es_imports_ext)
        1. [Duplicate Imports](#es_imports_duplicate)
    1. [Exports](#es_exports)
        1. [Default Exports](#es_exports_default)
        1. [Export Mutability](#es_exports_mut)
1. [Formatting](#fmt)
    1. [Semicolons at the end of lines](#fmt_semicolons)
    1. [Braces in control statements](#fmt_braces)
    1. [Literals](#fmt_literals)
        1. [Arrays](#fmt_literals_objects)
        1. [Classes](#fmt_literal_class)

## Guidelines

<h3 id="source-files">1. Source files</h3>

<a id="source_encoding"></a>

- [1.1](#source_encoding) **Encoding**: All source files in this repository must use UTF-8 encoding.

<a id="source_naming"></a>

- [1.2](#source_naming) **Naming scheme**
    <a id="source_naming_doc"></a>
    - [1.2.1](#source_naming_doc) **Documentation**: Documentation files located in top-level must have an uppercase name. Otherwise, the file should start with an uppercase letter and all spaces (` `) should be replaced with underscores (`_`).
    <a id="source_naming_ts"></a>
    - [1.2.2](#source_naming_ts) **TypeScript Code**: File names should be all lowercase. All spaces (` `) should be replaced with underscores (`_`).
    <a id="source_naming_tsx"></a>
    - [1.2.3](#source_naming_tsx) **TypeScript XML Code**: File names should have an initial character be uppercase. All spaces (` `) should be replaced with underscores (`_`).

<h3 id="esmodules">2. ECMAScript Modules</h3>

<a id="es_imports"></a>
- [1](#es_imports) **Imports**
    <a id="es_imports_ext"></a>
    - [1.1](#es_imports_ext) **File Extensions**: Omit .ts, .tsx, .js and .jsx extensions in `import` statements.
    <a id="es_imports_duplicate"></a>
    - [1.2](#es_imports_duplicate) **Duplicate Imports**: Do not import the same module mulitple times.

<a id="es_exports"></a>
- [2](#es_exports) **Exports**
    <a id="es_exports_default"></a>
    - [2.1](#es_exports_default) **Default Exports**: Do not use default exports. Importing modules must give a name to these values, which can lead to inconsistencies in naming across modules.
    <a id="es_imports_mut"></a>
    - [2.2](#es_imports_mut) **Export Mutability**: Exported variables must not be mutated outside of module initialization.

<a id="fmt"></a>
- [3](#fmt) **Formatting**
    <a id="fmt_indentation"></a>
    - [3.1](#fmt_indentation) **Indentation**: Each time a new statement is opened, the indent increases by 4 spaces. The indent level applies to both code and comments.
    <a id="fmt_semicolons"></a>
    - [3.2](#fmt_semicolons) **Semicolons at the end of line**: In TypeScript files, do not use semicolons at the end of the line.
    <a id="fmt_braces"></a>
    - [3.3](#fmt_braces) **Braces in control statements**: Braces are required in all control statements, even if the body contains only a single statement. The first statement of a non-empty block must begin on it's own line.
        - **Exception**: A simple if statement that can fit entirely on a single line with no wrapping (and that doesn’t have an else) may be kept on a single line with no braces when it improves readability. This is the only case in which a control structure may omit braces and newlines.
    <a id="fmt_literals"></a>
    - [3.4](#fmt_literals) **Literals**
        <a id="fmt_literal_objects"></a>
        - [3.4.1](#fmt_literal_objects) **Arrays and objects**: Any array or object literal may optionally be formatted as if it were a “block-like construct.”
            - **Example**:
            ```ts
                const a = [
                    0,
                    1,
                    2,
                    3,
                    4
                ]

                const a =
                    [0, 1, 2, 3, 4]
            ```
        <a id="fmt_literal_class"></a>
        - [3.4.2](#fmt_literal_class) **Classes**: Any class literal should be formatted as it it were a "block-like" construct.
            - **Example**:
            ```ts
            class Foo {
                constructor() {
                    this.x = 55.12732
                    this.y = 37.8082346
                    this.z = 17.32
                }

                toString(): string {
                    return `${this.x}, ${this.y}, ${this.z}`
                }
            }            
            ```

## Credits
 - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for this document's format
 - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html#source-file-structure) for most rulesets.
