import QRCode from "qrcode"

const path = document.querySelector('canvas')

const info = 'https://github.com/EricNeves/QRCode'

const options = {
    light: '#FFFFFF',
    dark: '#0000'
}

QRCode.toDataURL(path, info, { color: options }, function (error) {
    if (error) console.error(error)
})
