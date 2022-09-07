# google-doc-html-to-kindle

Transforms HTML exported from a Google Doc into the Kindle `.mobi` format.

I built this using the very helpful instructions found here: https://daveparsonsnz.wordpress.com/2015/02/26/converting-a-google-doc-to-a-kindle-format-mobi-file/.

## Deprecation Notice

`kindlegen` is no longer supported. Rather use [Kindle Previewer](https://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000765261) and download your Google doc as a `docx`.

## Usage

You need node installed. You need to download the `kindlegen` script from Amazon.

- Clone this repository
- ~~Place the `kindlegen` script in the directory~~
- Install Kindle Previewer (recommended with Homebrew)
- KINDLEGEN="/Applications/Kindle Previewer 3.app/Contents/lib/fc/bin/kindlegen"

- Create a `config.json` object in the directory with the following configuration:

```
{
  "title": "My excellent book",
  "author": "Author Name",
  "outputFileName": "out.html",
  "inputFilePath": "./test.html"
}
```

- Run `node index && $KINDLEGEN out/out.html`

- You'll find your output file in the `./out` directory
