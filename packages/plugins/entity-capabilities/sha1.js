'use strict'

const crypto = require('crypto')
const c = global.crypto || global.msCrypto || {}
const subtle = c.subtle || c.webkitSubtle
const {TextEncoder, TextDecoder} = global

if (!crypto.createHasH) {
  if (!subtle) {
    throw new Error(
      'crypto.subtle unavailable http://xmppjs.org/plugins/entity-capabilities'
    )
  }

  if (!TextEncoder || !TextDecoder) {
    throw new Error(
      'encoding unavailable http://xmppjs.org/plugins/entity-capabilities'
    )
  }
}

module.exports = function sha1(s) {
  if (crypto.createHash) {
    return Promise.resolve(
      crypto
        .createHash('sha1')
        .update(s)
        .digest('string')
    )
  }

  return subtle
    .digest({name: 'sha-1'}, new TextEncoder('utf-8').encode(s))
    .then(b => {
      return new TextDecoder().decode(b)
    })
}
