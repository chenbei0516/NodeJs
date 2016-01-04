var events =require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});

eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});

eventEmitter.emit('someEvent','syt','37du');