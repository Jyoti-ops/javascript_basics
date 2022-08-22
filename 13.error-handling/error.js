// try{
//     console.log("This is try block")
//     var output=getMessage()
// }catch(ex)
// {
//     console.log("This is catch block")
//     console.log(ex.name)
//     console.log(ex.message)
// }finally{
//     console.log("This is finally block")
// }

try{
    eval("alert('Hey')")
}catch(ex){
    console.log(ex.name)
    console.log(ex.message)
}

