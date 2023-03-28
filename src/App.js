import QRCode from "qrcode"

const path = document.querySelector('canvas')
const form = document.forms.form 

const options = {
    dark: '#FFFFFF',
    light: '#0000'
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const info = form.info.value
    
    QRCode.toDataURL(path, info, { color: options }, function (error) {
        if (error) console.error(error)
    })
    
})

QRCode.toDataURL(path, 'github.com/ericneves', { color: options }, function (error) {
    if (error) console.error(error)
})