# STARTTLS

STARTTLS negotiation for `@xmpp/client-core`.

Included and enabled in `@xmpp/client`.

Supports Node.js.

## Install

```js
npm install @xmpp/plugins
```

## Usage

```js
client.plugin(require('@xmpp/plugins/starttls'))
```

STARTTLS will automatically be negotiated upon TCP connection.

## References

[RFC 6120 XMPP Core](https://xmpp.org/rfcs/rfc6120.html#tls)
