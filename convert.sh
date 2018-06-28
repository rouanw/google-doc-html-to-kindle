#!/bin/sh
set -e

node index
./kindlegen out/*.html
