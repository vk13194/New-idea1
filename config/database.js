if(process.env.NODE_ENV==='production'){
 module.exports={
     mongoURI:'mongodb+srv://my-db:vijay12@cluster0-ve5ms.mongodb.net/test?retryWrites=true&w=majority'
 }
}
else{
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}