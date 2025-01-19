# JavaScript Null vs. Undefined Handling Bug

This repository demonstrates a common, subtle bug in JavaScript related to how `null` and `undefined` are handled. The provided code intends to check for both `null` and `undefined` values and return 0 accordingly.  However, it only explicitly checks for `null`, leading to unexpected behavior when passed an `undefined` value.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected version.

This example highlights the importance of being explicit when handling potentially null or undefined values in JavaScript.