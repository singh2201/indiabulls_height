@echo off
setlocal enabledelayedexpansion

REM Set starting number
set counter=1

REM Loop through all matching files
for %%f in (Gemini_Generated*) do (
    REM Get file extension
    set "ext=%%~xf"

    REM Rename to gemini_image{n}.{ext}
    ren "%%f" "image!counter!%%~xf"
    
    REM Increment counter
    set /a counter+=1
)

echo Done renaming files.
pause
