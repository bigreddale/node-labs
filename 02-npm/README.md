# node.js Labs


## Using npm

To get to know `npm`, perform the following:

1. `npm` has many subcommands.
   To list them, type `npm help`.
1. To get the manual page for a subcommand,
   type (for example) `npm help view`.
1. Type `npm view hapi`. Where does it get its information?

### Local vs Global Installs

`npm` can install packages globally or locally.

1. __Install a Package Locally__
   By default, `npm` will install a package locally.
   Install the package `http-server` using `npm install http-server`.
   Where is this package placed?
    1. Local package installs are used when you want to `require()` the module.
    1. In this case though, the package contains a command.
       Try executing `http-server`. Does it run?
       If not, why not?
        - The `http-server` module is different in the sense that it provides a
          command in its `bin` directory, which `npm` links to `node_modules/.bin/`
          when it installs it. You should be able to run it from here:
          `./node_modules/.bin/http-server`.
    1. Uninstall the `http-server` package, with `npm uninstall http-server`.

1. __Install a Package Globally__
   Install the package `http-server` using `npm install http-server -g`.
   - Can you run it directly by typing `http-serevr`?
   - A global package install is used when a package installs a command and
     you want to be able to run it from the command line.
   - Global installs are placed in the node installation directory.
     Run `npm config get prefix` to see what it is.

1. __Configuration__
   `npm` is configured via various files.
   - List any configuration parameters that are changed from the default,
     using `npm config list`.
   - Get just a single configuration parameter,
     use `npm get` to get the value `registry`.
     What does this value represent?
   - To set a single configuration parameter, use `npm set` with the parameter's name
     and its new value.

