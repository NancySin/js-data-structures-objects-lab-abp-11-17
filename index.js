// Write your solution in this file!
const driver= {
  name: 'hairy',};

function updateDriverWithKeyAndValue(object, key, value){
   const newDriver= { ...object}
    newDriver[key] = value
      return newDriver;
}
