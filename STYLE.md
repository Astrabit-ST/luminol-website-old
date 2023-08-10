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
    - [2.2](#es_imports_mut) **Export Mutability**: Exported variables must not be mutated outside of module initialization.

## Credits
 - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for this document's format
 - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html#source-file-structure) for most rulesets.