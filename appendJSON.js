const fs = require('fs')
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

jsonReader('./customer.json', (err, customer) => {
    if (err) {
        console.log('Error reading file:',err)
        return
    }

// increase customer order count by 1
    customer.order_count += 1
	
fs.writeFile('./customer.json', JSON.stringify(customer, null, 2), (err) => {
        if (err) console.log('Error writing file:', err)
    })
})