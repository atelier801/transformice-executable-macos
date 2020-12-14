# Transformice MacOS Standalone
Since Flash on browser is dying, we're in the process to move everyone to standalone. The old MacOS standalone is a 32-bit app and as such MacOS 10.13.4+ won't support it.

## Usage
The standalone is built using electron v10.1.5 as it supports the flash pepper.<br/>
Basic usage:
```bash
git clone https://github.com/atelier801/transformice-executable-mac
cd transformice-executable-mac
npm install
npm start
```
Distribution instructions can be found in the electron documentation [(here)](https://www.electronjs.org/docs/tutorial/application-distribution). We recommend the [v10.1.5 binaries](https://github.com/electron/electron/releases/tag/v10.1.5).

## Build
```bash
npx @electron-forge/cli@latest import
npm run start
```
