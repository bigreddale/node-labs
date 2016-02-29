# node.js Labs


1. [01-getting-started](01-getting-started/README.md)
1. [02-npm](02-npm/README.md)
1. [03-debugging](03-debugging/README.md)
1. [04-events](04-events/README.md)
1. [05-eventloop](05-eventloop/README.md)






## Synchronous vs Asynchronous Calls

1. The file `http-read-file-sync.js` reads a file synchronously
   before returning it to a web browser.
   Copy this code to a new file, `http-read-file-async.js`,
   and convert it to make an asynchronous call (`fs.readFile()`)
   instead.


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

## Understanding Streams

1. What are the potential problems with the following code?

        ```
        var fs = require('fs');
    
        fs.readFile('file1.txt', function(err, data) {
            if (err) throw err;
            console.log(data.toString());
        });
        ```

   - Using `fs.createReadStream()`, convert this program to use streams.

2. The `zlib` module comes with node.js.
   - Create a node program that compresses an input file into an output file.
   - What's the maximum size of file that could be compressed using this program?


## Using Pipes

1. Create a program that:
	- creates a Readable stream from a file (see `fs.createReadStream()`), and
	- pipes this stream to `process.stdout`
2. Using pipes, create a program that copies one file to another.

## Consuming a Readable Stream

1. The standard input stream generates `readable` events. How would you
   listen to these events?
   - Write code to do so, displaying the data received.
   - If you see Buffer objects displayed containing hex values,
     look up the `readable.setEncoding()` function.
2. Extend your code to read from standard input and write the data to
   standard output.

## Writing to a Writable Stream

1. Write some text from your program into a file.


# Stretch Tasks

## Creating a Filter

The `through2` module by Rod Vagg enables you to create a function, and pipe through that.
This function 'transforms' its input data. We'll simply transform everything to lowercase.


## Implementing a Readable Stream

1. Implement a Readable stream that generates random numbers.

2. Implement a Readable stream that generates integers in the Fibonacci sequence.

3. Implement a Readable stream that generates the letters of the alphabet. After
   'z' is generated, it should wrap around to 'a'.


## Writing Networking Apps

