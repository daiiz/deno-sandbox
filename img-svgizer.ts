import {fetchImage} from 'https://scrapbox.io/api/code/daiiz-deno/load-image/mod.ts'
import {encode} from 'https://scrapbox.io/api/code/daiiz-deno/base64/mod.ts'
import {createSvg, Options} from 'https://scrapbox.io/api/code/daiiz-deno/img-svgize/mod.ts'

async function demo0 () {
  const srcUrl = 'https://i.gyazo.com/145a118da516e9ba7aa53d3085c4b728.png'
  const buf = await fetchImage(srcUrl)
  const base64img = encode(buf)
  const dataUri = `data:image/png;base64,${base64img}`

  const svgTagText = createSvg(dataUri, {
    width: 43,
    height: 44
  })
  console.log(svgTagText)
}

async function demo1 () {
  const srcUrl = 'https://i.gyazo.com/3221f9b7a16b056d80db62c04e4ddb66.png'

  const style = [
    `.source text {
      fill: #888888;
      font-size: 11px;
      font-weight: 400;
      text-decoration: none;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }`,
    `.source text:hover {
      text-decoration: underline;
      fill: #2962FF;
    }`
  ]

  const options: Options = {
    width: 571,
    height: 506,
    className: 'svg-screenshot',
    dataset: {
      url: 'https://scrapbox.io/daiiz/The_Great_Burgerに行ってきた',
      title: 'The_Great_Burgerに行ってきた - daiiz',
    },
    externals: [
      {
        url: 'https://scrapbox.io/daiiz/パンケーキ',
        x: 53.5,
        y: 79,
        width: 75,
        height: 17,
        text: 'パンケーキ'
      },
      {
        url: 'https://scrapbox.io/daiiz/卵',
        x: 76,
        y: 106,
        width: 15,
        height: 17,
        text: '卵'
      },
      {
        url: 'https://scrapbox.io/daiiz/目玉焼き',
        x: 121,
        y: 160,
        width: 60,
        height: 17,
        text: '目玉焼き'
      },
      {
        url: 'https://gyazo.com/69610bbbbac53717766940df8203de08',
        x: 31,
        y: 325,
        width: 300,
        height: 17
      },
      {
        url: 'https://scrapbox.io/daiiz/The_Great_Burgerに行ってきた',
        x: 4,
        y: 502,
        text: 'The Great Burgerに行ってきた - daiiz - Scrapbox',
        className: 'source'
      },
      {
        url: 'https://gyazo.com/69610bbbbac53717766940df8203de08/thumb/1000',
        x: 31,
        y: 185,
        width: 300,
        height: 300,
        type: 'img'
      }
    ],
    style
  }

  const buf = await fetchImage(srcUrl)
  const base64img = encode(buf)
  const dataUri = `data:image/png;base64,${base64img}`

  console.log(createSvg(dataUri, options))
}

demo0()
