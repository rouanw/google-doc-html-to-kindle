# google-doc-html-to-kindle

Transforms HTML exported from a Google Doc into the Kindle `.mobi` format.

I built this using the very helpful instructions found here: https://daveparsonsnz.wordpress.com/2015/02/26/converting-a-google-doc-to-a-kindle-format-mobi-file/.

## Usage

You need node installed. You need to download the `kindlegen` script from Amazon.

- Clone this repository

- Place the `kindlegen` script in the directory

- Create a `config.json` object in the directory with the following configuration:

```
{
  "title": "My excellent book",
  "author": "Author Name",
  "outputFileName": "out.html",
  "inputFilePath": "./test.html"
}
```

- Run `sh convert.sh`

- You'll find your output file in the `./out` directory
