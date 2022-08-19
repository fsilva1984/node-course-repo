
//importando o core module 
const EventEmitter = require('events')


const eventEmitter = new EventEmitter;

let seg = 0;
eventEmitter.on('start', () => {

  let count=0;
  const time = setInterval(()=>{
   console.log(`iniciando em: ${(seg ++)+1}`)

    if(count == 4){
     clearInterval(time)
     console.log(' ')

      setTimeout(()=>{
       console.log("System Online")
    
      }, 1000)
    }

    count ++
  }, 900);

  
  
});


eventEmitter.emit('start')







