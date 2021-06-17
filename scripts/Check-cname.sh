#!/bin/bash

echo "Checking for CNAME"

File="CNAME"
DST="./public"
for i in $(ls ./*); do
    if [ -f "$File"]; then
        cp $File "$DST"
    fi
done
