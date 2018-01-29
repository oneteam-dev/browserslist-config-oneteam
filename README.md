# Oneteam Browserslist Shared Config

This configuration reflects Oneteam's supported browser policy for their suite of web applications.

## Getting started

```bash
yarn add browserslist-config-oneteam
```

## Usage

### package.json

```json
{
  "browserslist": [
    "extends browserslist-config-oneteam"
  ]
}
```

Advanced use:

```json
{
  "browserslist": [
    "extends browserslist-config-oneteam/desktop",
    "extends browserslist-config-oneteam/mobile",
    "extends browserslist-config-oneteam/electron"
  ]
}
```

## License

MIT

© Oneteam Inc.
