

const readline = require('readline')


const rl = readline.createInterface({

  input : process.stdin,
  output : process.stdout

})

let response   = ""

rl.question("testSwitchWith: ", ( answer ) => {

  let an = answer

  switch ( an ) {
    case 'a':
      response = 'apple'
      break;
    
    case 'b':
      response = 'bird'
      break;

    case 'c':
      response = 'cat'
      break;

    case 'd':
      response = 'stuff'
      break;
    
    default:
      response = 'stuff'
      break;
  }
    console.log( response )
  rl.close()
})







