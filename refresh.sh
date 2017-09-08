#!/bin/bash
#requires export of PORT first
#in case node didn't die
trap "killall node; exit 0;" SIGINT SIGTERM


#in case past node command didn't die
killall node
node app.js &
nodeID=$!
sleep 1;
google-chrome http://localhost:$PORT/
#have browser window open
while true; do
    #upon modification
    inotifywait -qq -re modify app.js views/* public/* ;
    #kill old node if it exists
    kill -9 $nodeID
    node app.js &
    nodeID=$!
    #give node some time open
    sleep 1;
    #last open with localhost in name
    browser_window=$(xdotool search --name "localhost:$PORT" | tail -1 )
    current_window=$(xdotool getactivewindow)
    #if found browser window
    if  [[ !  -z  $browser_window  ]]; then
        #to not lose current window
        xdotool windowactivate $browser_window
        #force refresh
        xdotool key 'ctrl+r'
        #return
        xdotool windowactivate $current_window
    fi
done