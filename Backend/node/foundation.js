/* major components invloved in node.js env:
v8 engine: 
uses JIT(just in time) compilation. 
converts the js to machine language.
It only handles call stack and memory heap.

libUv:
it's a completely C library.
it handles Event Loop, Async I/O, Timers, os, async I/O.
since, js is single threaded. libUv provides the external threads.
node bindings acts as a bridge between js and libUv. */

const fs = require('fs')
const path = require('path')
const os = require('os')

console.log('node:', process.versions.node)  
// process.versions.node shows the versions
console.log("CPU:",os.cpus())