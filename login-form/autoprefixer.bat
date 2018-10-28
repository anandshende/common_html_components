@echo off
set /p dirname="Enter directory: "

grunt autoprefixer --folder=login-form\%dirname%