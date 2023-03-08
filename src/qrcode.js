import QRCode from "qrcode"

const path = document.querySelector('canvas')

const info = 'https://github.com/ericneves'

const options = { 
        dark: '#FFFFFF',  
        light: '#0000' 
    }

QRCode.toDataURL(path, info, { color: options }, function (error) {
    if (error) console.error(error)
})