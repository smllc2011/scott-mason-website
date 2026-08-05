@echo off
REM Run npm commands without admin-installed Node.js
set "NODE_DIR=%USERPROFILE%\nodejs-portable"
set "PATH=%NODE_DIR%;%PATH%"
cd /d "%~dp0"
if "%~1"=="" (
  echo Usage: dev.cmd install ^| dev ^| build ^| start
  exit /b 1
)
if "%~1"=="install" (
  call npm install
) else if "%~1"=="dev" (
  call npm run dev
) else if "%~1"=="build" (
  call npm run build
) else if "%~1"=="start" (
  call npm start
) else (
  call npm %*
)
