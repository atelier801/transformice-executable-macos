# Transformice MacOS Standalone
Since Adobe has announced that it will stop distributing Flash Player on browsers after December 2020, we're in the process to move everyone to standalone. The old MacOS standalone is a 32-bit app and as such MacOS 10.13.4+ won't support it.

The standalone is built upon [Electron](https://www.electronjs.org) v10.x as it supports loading 64-bit Pepper Flash.

## Usage
### Installing build dependencies
```bash
git clone https://github.com/atelier801/transformice-executable-mac
cd transformice-executable-mac
npm install
```

### Basic usage
```bash
npm start
```

### Build
```bash
npm run-script make
```
This utilizes [Electron Forge](https://www.electronforge.io/) to create ZIP and DMG packages in the `out` directory, ready for distribution.
