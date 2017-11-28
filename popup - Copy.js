
maps = [
    ['kh', 'x'],
    ['c(?!h)', 'k'],
    ['q', 'k'],
    ['tr', 'c'],
    ['ch', 'c'],
    ['d', 'z'],
    ['gi', 'z'],
    ['r', 'z'],
    ['\u0111', 'd'],
    ['ph', 'f'],
    ['ngh?', 'q'],
    ['gh', 'g'],
    ['th', 'w'],
    ['nh', 'n\'']
],
capitalize = function(a) {
    return '' + a.charAt(0).toUpperCase() + a.slice(1)
},
convert = function(a, b) {
    return a.replace(new RegExp(b[0], 'g'), b[1]).replace(new RegExp(capitalize(b[0]), 'g'), capitalize(b[1]))
};
tieqViet= function(a) {
    if ('string' != typeof a) 
        throw new TypeError('Expected a string, got ' + ('undefined' == typeof a ? 'undefined' : _typeof(a)));
    return maps.forEach(function(b) {
        a = convert(a, b)
    }), a
};
 convertTieqViet = function(){
    var text = document.getElementById('text').value;
    var result = tieqViet(text);
    document.getElementById("result").value = result;
 }