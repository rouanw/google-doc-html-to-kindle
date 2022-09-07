#!/bin/sh
set -e

node index
$KINDLEGEN out/*.html
