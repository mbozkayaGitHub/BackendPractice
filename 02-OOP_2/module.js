"use strict"

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- *
//? Başka bir JS dosyasını içe aktarma:

require('./module/index')
/* ------------------------------------------------------- *
// Import:
const test = require('./module/')

test()

/* ------------------------------------------------------- *

const [ test1,test2,test3] = require('./module/index.js')

test1(), test2(),test3()

/* ------------------------------------------------------- */
 const { test1, test2, test3, variable } = require('./module/')
 test1(), test2(), test3(),console.log(variable);