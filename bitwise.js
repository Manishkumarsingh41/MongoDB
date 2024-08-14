db.createCollection("Devices")

db.Devices.insertMany([{ name: "Device A", status: 5 },{ name: "Device B", status: 3 },{ name: "Device C", status: 12 },{ name: "Device E", status: 7 }])

//$bitsAnySet (Find documents where any of the bits are set)
db.Devices.find({status: { $bitsAllSet: [0, 2] }}).pretty()

//$bitsAllClear (Find documents where all bits are clear)
db.Devices.find({status: { $bitsAnySet: [1] }}).pretty()

//$bitsAllClear (Find documents where all bits are clear)
db.Devices.find({status: { $bitsAllClear: [1, 3] }}).pretty()

//$bitsAnyClear (Find documents where any of the bits are clear)
db.Devices.find({status: { $bitsAnyClear: [0] }}).pretty()