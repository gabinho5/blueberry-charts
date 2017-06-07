var jsonfile = require('jsonfile')

var inputdate = process.argv[2]

var newdate = jsonfile.readFileSync(`../../../PythonParsing/parsed_json/${inputdate}.json`)

var currentnameproject = jsonfile.readFileSync('./global.json')

currentnameproject[inputdate] = newdate[inputdate]
jsonfile.writeFileSync('./global.json', currentnameproject, {spaces:1})
