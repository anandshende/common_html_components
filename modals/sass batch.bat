@echo off
set /p dirname="Enter directory: "

sass --watch .\%dirname%:.\css\%dirname%