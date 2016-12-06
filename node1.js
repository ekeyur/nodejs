var haiku1 = process.argv[2];
var haiku2 = process.argv[3];
var haikumix = process.argv[4];
var fs = require('fs');

//--------------- Sync.
// var buffer = fs.readFileSync(file1);
// console.log(buffer.toString().toUpperCase());

//----------------Async.

// fs.readFile(file1,function(err,buffer){
//   if(err){
//     console.log("Error Reading File",Error.stack);
//     return;
//   }
//   var contents = buffer.toString().toUpperCase();
//   fs.writeFile(file2,contents,function(err){
//     if(err){
//       console.log("Error Writing to File",Error.stack);
//       return;
//     }
//     console.log("success");
//   });
// });

//-----------------------------------------


fs.readFile(haiku1,function(err,buffer){
  if(err){
    console.error("Problem reading from",haiku1,err.stack);
    return;
  }else
  var haiku1contents = buffer.toString().split('\n');
  var haiku2contents = '';
  fs.readFile(haiku2,function(err,buffer){
    if(err){
      console.error("Problem reading from",haiku2,err.stack);
      return;
    }else
    haiku2contents = buffer.toString().split('\n');
    var haikucontents = [];
    for (var i=0;i<haiku1contents.length-1;i++){
      haikucontents.push(haiku1contents[i]);
      haikucontents.push(haiku2contents[i]);
    }
    haikucontents = haikucontents.join('\n');
    console.log(haikucontents);

    fs.writeFile(haikumix,haikucontents,function(err){
      if(err){
        console.log("error writing file contents");
        return;
      }else
      console.log("contents written to a new file.");
    });

  });
});
