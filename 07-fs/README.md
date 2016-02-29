# node.js Labs


## Using the `path` Module

To get to know the `path` module, answer the following using an interactive `node` session:

1. What is the normalized path of '/usr/lib/../local/lib/cairo/../../bin'?
1. What is the joined path from '/usr', 'lib', '../local', 'share/xml/fontconfig' and 'fonts.dtd'?
    - If you use `path.join()`, does it normalize the resulting path too, or not?
1. What does `path.resolve()` do with '../thing', '/etc/init.d', './foo' and '../bar/../mysqld'?
1. How would you get from `/usr/local/share/xml/` to `/usr/man` using a relative path?
1. Which directory is `/usr/local/share/xml/fontconfig/fonts.dtd` in?


## Accessing the Filesystem

1. Write a single program to perform these three operations:
    1. Make the directory `dirA`
    2. Create a file in `dirA` called `file1.txt` with the contents `This is file 1`
    3. Rename `dirA` to `dirB`

Stretch Tasks

1. __Getting File Details__
   1. Write a new program, using `fs.stat()` to display statistics (in Linux/Mac OS,
      inode details) for the file `dirB/file1.txt`.
      Simply display the stats as a single object using `console.log().`
   2. `fs.stat()` returns a `fs.Stats` object.
      - How would you display whether this is a plain file or a directory?

