@echo off
setlocal EnableDelayedExpansion

xcopy shuttle-canstrap.js .samples\node_modules\shuttle-canstrap\shuttle-canstrap.js /Y

set exclude=/.git/.samples/node_modules/
for /F "delims=" %%a in ('DIR /A:d /B "."') do (
   if "!exclude:/%%a/=!" equ "%exclude%" xcopy %%a\. .samples\node_modules\shuttle-canstrap\%%a /Y /I |find /v "File(s) copied"
)