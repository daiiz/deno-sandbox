import {Buffer} from 'deno'
import {encode, decode} from 'https://scrapbox.io/api/code/daiiz-deno/base64/mod.ts'

const ui8 = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])
const encodedStr = encode(new Buffer(ui8))
console.log('encoded:', encodedStr)
console.log('decoded:', decode(encodedStr))
