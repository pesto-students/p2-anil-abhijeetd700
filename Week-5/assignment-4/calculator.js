const mathOperations = {
    sum: function(a,b) {
        if(Number.isInteger(a) && Number.isInteger(b)){
            return a + b;
        }
        else{
            return 'Only integer values are accepted';
        }
    },
    diff: function(a,b) {
        return a - b;
    },
    product: function(a,b) {
        return a * b
    }
}
module.exports = mathOperations