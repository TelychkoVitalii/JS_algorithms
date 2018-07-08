navigator.usb.getDevices()
    .then(function (devices) {
        console.log('Devices: ' + devices.length);
        devices.forEach(function (device) {
            console.log("Product name: " + device.productName + ", serial number " + device.serialNumber);
        })
    });