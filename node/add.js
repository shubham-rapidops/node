// // weekly.js
// var util = require('util')
// var events = require('events')
// var Job = function Job() {
//   var job = this
//   // We'll use it later to pass 'this' to closures
//   // ...
//   job.process = function() {
//     // ...
//     setTimeout(function(){
//       // Emulate the delay of the job - async!
//       job.emit('done', { completedOn: new Date() })
//     }, 1000)
//   }
//   job.on('start', function(){
//     job.process()
//   })
// }

// util.inherits(Job, events.EventEmitter)
// module.exports = Job


///



// var Job = require('./add.js')
// var job = new Job()

// job.on('done', function(details){
//   console.log('Weekly email job was completed at',
//     details.completedOn)
//   // job.removeAllListeners()

// })


// // job.process()
// job.emit('start')
