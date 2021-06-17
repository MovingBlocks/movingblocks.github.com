#!/bin/bash

echo "Checking for CNAME"

File="CNAME"
DST="./public"
fileFound=0
for i in $(ls ./*); do
    if [ -f "$File" ]; then
        cp $File "$DST"
        fileFound=fileFound+1
    fi
done

if [ fileFound==0 ]; then
    echo "$File not Found"
fi
