# Proposed solution for Issue 844

    Issue:      [https://github.com/sveltejs/kit/issues/844](https://github.com/sveltejs/kit/issues/844)
    My Comment: [https://github.com/sveltejs/kit/issues/844#issuecomment-841610497](https://github.com/sveltejs/kit/issues/844#issuecomment-841610497)ss

    Issue:      https://github.com/sveltejs/kit/issues/844
    My Comment: https://github.com/sveltejs/kit/issues/844#issuecomment-841610497



In this issue's comments, I had proposed changes which included re-ordering code in the core/dev:


Although my tests worked, I was a bit uncomfortable drastically changing the "mainline" dev code by reordering it.

Instead, I propose the following changes:

## kit/src/core/server/index.js


    Remove the handler from the `get_server` function.
    
    Instead, use a dummy handler that returns a status code 204 (No Content).  This would be needed if there are requests before Vite is ready to process them.

    Add a new exported function `set-handler(handler)`.  Once this is called, the calling function's handler is used instead of the dummy handler.

## kit/src/core/dev/index.js

    Move the call to `get_server` function before calling `vite.createServer`.  This ensures that the -H (or --https) option is available within the `vite.createServer` configuration.

    Remove the handler parameter from the `get server` function call.  The server will use the dummy handler at this time, should any http(s) requests be made.

    Change the configuration setup to check if https should be used.  If it is, set the HMR port to the application server's port, and the server to the application server.  (This is needed, because a secure websocket (wss) with a self-signed certificate will always fail unless it is validation through https.  By 'piggy-backing') onto the application server, when the user approves using the unsigned certificate, future https and wss requests will be authorized)

    Afterward, call the new function `set handler` to replace the dummy handler with the `vite.middlewares` handler.

## kit/src/core/start/index.js

    The 'start' (preview) process also needs to be changed due to the modifications in kit/src/core/server/index.js.  The `return` statement (which returns the created server) needs to be broken out into three steps:

    Call `get_server`, eliminating the handler parameter.

    Call 'set_handler` to replace the dummy handler with the desired handler.

    Return the `server` variable to the calling process.

## My questions

    This is just a suggestion.  I don't have experience with Github (pull, push, branches), and, luckily, I don't have the required access to mess things up.

    And, being new to open source, I'm unfamiliar with the procedures, politics, etc.  This is why I've put this README.md outside of the issue's comments.  I welcome suggestions on whether this is the proper method to suggest changes, or if the 'powers-that-be' prefer coming up with their own solutions and writing their own code.  So, my apologies if I have offended anyone or if you consider this to be intrusive.

    Feel free to contact me via email (jbusillo@yahoo.com) with comments.

    Thank you.
