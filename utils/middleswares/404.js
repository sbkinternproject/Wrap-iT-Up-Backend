module.exports = function (request, response) {
    // console.log(__dirname);
    var directory = __dirname;
    var directoryArray = directory.split('/');
    // console.log(directoryArray);
    // console.log(directoryArray.length);
    directoryArray.pop();
    directoryArray.pop();
    // console.log(directoryArray);
    // var pathFinal = directoryArray.toString();
    var pathFinal = "";
    for(var i = 0 ;i < directoryArray.length;i++){
      pathFinal = pathFinal + directoryArray.at(i)+"/";
    }
    
    // console.log(pathFinal);
    response.sendFile(pathFinal+"public/404.html");
};