// deno png-dpi-reader.ts https://i.gyazo.com/7127a0c2a987ea50dbba0ebd6455c206.png --allow-net --reload
import {args, Buffer} from 'deno'
import {loadLocalImage, fetchImage} from 'https://scrapbox.io/api/code/daiiz-deno/*png-dpi-reader-writer/share.ts'
import {parsePngFormat} from 'https://scrapbox.io/api/code/daiiz-deno/png-dpi-reader-writer/mod.ts'

const main = async () => {
  if (!args[1]) throw new Error('image url is required.')

  const srcUrl = args[1]
  let buf: Buffer
  if (!/https?:\/\//.test(srcUrl)) {
    buf = await loadLocalImage(srcUrl)
  } else {
    buf = await fetchImage(srcUrl)
  }
  console.log(await parsePngFormat(buf))
}

main()
