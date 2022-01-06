# react-felux
Front-end library and UX Design System.

* [Maintainers](#maintainers)
* [Usage](#usage)
* [Development](#development)


## <a name="maintainers"></a>Maintainers
* Kirk Wetherill <kwetherill@digitalpharmacist.com>
* Digitial Pharmacist - Product

## <a name="usage"></a>Usage
Application developers that want to consume this component should install the package using npm:

```bash
npm i
npm start
```

## <a name="development"></a>Development

| Script | Description |
|---|---|
| `npm install` | Install the project dependencies; once installed `npm run build` is also executed |
| `npm start` | Start the Storybook server and open ina browser |
| `npm run build` | Compile CSS and Javascript assets |
| `npm run build-storyook` | Compile Storybook documentation and output to /docs |
| `npm run test` | Run unit tests, stylelint, eslint and provide code coverage metrics |
| `npm run test:debug` | Run Jest in a Node process so you can debug within your test suite. This will pass the `--inspect-brk` flag and the `--runInBand` cli option to Jest. Add a `debugger; //eslint-disable-line` statement to the line in the test file you would like to break on. |
| `npm run test:unit` | Run unit tests only. |
| `npm run test:style` | Run linters to verify code meets the configured `eslint` settings |
| `npm run test:coverage` | Run `npm run test:unit` and provide metrics about coverage || `npm run upgrade-interactive` | Run `npm-check` to identify available dependency updates |