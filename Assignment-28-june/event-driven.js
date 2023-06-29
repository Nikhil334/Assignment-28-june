const EveEmit = require('events');
const eveemitter = new EveEmit();
eveemitter.on('An-event',(msg)=>{
    console.log(msg);
});

eveemitter.emit('An-event','Hello, How are you');