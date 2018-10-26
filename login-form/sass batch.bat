@echo off
set /p dirname="Enter directory: "

sass --watch .\%dirname%\index.scss:.\%dirname%\index.css