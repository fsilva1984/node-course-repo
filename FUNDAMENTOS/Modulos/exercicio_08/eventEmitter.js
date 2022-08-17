
//importando o core module 
const EventEmitter = require('events')


const eventEmitter = new EventEmitter;

let seg = 0;
eventEmitter.on('start', () => {

  let count=0;
  const time = setInterval(()=>{
   console.log(`iniciando em: ${seg ++}`)

    if(count == 6){
     clearInterval(time)
    }

    count ++
  }, 2000);

});


eventEmitter.emit('start')






