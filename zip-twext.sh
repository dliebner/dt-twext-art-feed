#!/bin/bash

# The base directory to zip
BASEDIR="./zip"

# The output zip file name, to be saved in the current directory
ZIPFILE="domotown-twext.zip"

# Store the current directory
CURRENT_DIR=$(pwd)

# Check if the directory exists
if [ -d "$BASEDIR" ]; then
    # Change to BASEDIR, zip the contents directly to the final location
    (
        cd "$BASEDIR"
        zip -r "$CURRENT_DIR/$ZIPFILE" .
    )
    echo "Directory $BASEDIR has been zipped to $CURRENT_DIR/$ZIPFILE"
else
    echo "Error: Directory $BASEDIR does not exist."
fi
