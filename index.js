var printable_json = {
  arrayToString :function (array){
    var printable = "["
    for(var i = 0; i <array.length ;++i){
      if(typeof(array[i]) === 'object'){
        printable += " "+this.simpleObjectToString(array[i])
      }else{
        if(typeof(array[i]) === 'string'){
          printable += " \x1b[33m'"+array[i]+"'\x1b[0m" 
        }else{
          printable += " \x1b[96m"+array[i]+"\x1b[0m"
        }
      }
      
      if(i != array.length-1){
        printable += ","
      }
    }
    printable += " ]"
    return printable
  }
  ,
  matrixToString: function (matrix){
    var printable = ""
    for(var i = 0; i <matrix.length ;++i){
      for(var j = 0; j <matrix[i].length ;++j){
        printable += " "+matrix[i][j]
      }
      printable += "\n"
    }
    return printable
  }
  ,
  repeatString : function (str,n){
    var printable = ""
    for(var i = 0; i < n; ++i){
        printable += str
    }
    return printable
  }
  ,
  simpleObjectToString: function (obj){
    var size = this.objectSize(obj)
    var counter = 0 
    var printable = "{"
    for(prop in obj){
      if(typeof(obj[prop]) === 'string'){
          printable += " "+"\x1b[90m"+prop+"\x1b[0m"+": \x1b[33m'"+ obj[prop]+"'\x1b[0m"
        }else{
          printable += " "+"\x1b[90m"+prop+"\x1b[0m"+": \x1b[96m"+ obj[prop] +"\x1b[0m"
        }
      
      if(counter != size-1){
        printable += ","
      }
    }
    printable += " }"
    return printable
  }
  ,

  objectToStringRecursive: function (depth,propLength,obj){
    var size = this.objectSize(obj)
    var counter = 0 
    ++depth
    var printable = "{\n"
    for(prop in obj){
      
      for(var i = 0; i < depth+propLength; ++i){
        printable += " "
      }
      if(typeof(obj[prop]) === 'object'){
          if(obj[prop] != null && obj[prop].constructor === Array){
            printable += "\x1b[90m"+prop+"\x1b[0m"+": "+ this.arrayToString(obj[prop])
          }else{
            printable += "\x1b[90m"+prop+"\x1b[0m"+": "+ this.objectToStringRecursive(depth,propLength+prop.length+3,obj[prop])
          }

      }else{
        if(typeof(obj[prop]) === 'string'){
          printable += "\x1b[90m"+prop+"\x1b[0m"+": \x1b[33m'"+ obj[prop]+"'\x1b[0m"
        }else{
          printable += "\x1b[90m"+prop+"\x1b[0m"+": \x1b[96m"+ obj[prop] +"\x1b[0m"
        }
      }
      if(counter != size-1){
        printable += ",\n"
      }else{
        printable += "\n"
      }
      ++counter
    }
    for(var i = 0; i < depth+propLength-2; ++i){
        printable += " "
    }
    printable += "}"

    return printable
  }
  ,
  objectSize: function (obj) {
      var size = 0;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      return size;
  }
  ,
  toString : function(obj){
    try {
        JSON.stringify(obj);
    }
    catch(err) {
        if(err.toString().indexOf("circular") > -1){
          return "\x1b[31mCan't convert circular object!\x1b[0m"
        }else{
          return err
        }
    }
    if (obj.constructor === Array){
      return this.arrayToString(obj)
    }else if(typeof(obj) === 'object'){
      return this.objectToStringRecursive(0,0,obj)
    }else if(typeof(obj) === 'string'){
      return "\x1b[33m'"+ obj+"'\x1b[0m"
    }else{
      return "\x1b[96m"+ obj+"\x1b[0m"
    }
  }

}


module.exports = printable_json

//var printable3 = new printable3()
/*
var obj = { a: "A", b:{a2:"A2", b2: [1,{a3:"A3"},3,"4"], c2: {a3: "A3",b3: {a4: "A4"}}}, c: 143}
console.log(printable2.toString(obj))
var arr = [1,2,3,4,5,6,'5',{a:'hello'}]
console.log(printable2.toString(arr))
console.log(printable2.toString("hello world"))
console.log(printable2.toString(1243))
*/