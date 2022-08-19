
//code async


//function print date
function fnHour() {
  const hour = new Date();
  const h = hour.getHours();
  const m = hour.getMinutes();
  const s = hour.getSeconds();

  console.log(`${h}:${m}:${s}`)
}

//function print hours
function date() {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const fullYear = date.getFullYear();

  console.log(`${day}/${month +1}/${fullYear}`)
}

//call the function fnHour in 2 seg 
setTimeout(()=>{

  fnHour()
}, 2000)

/*
apeser de ser chamada por ultimo esssa function
sera impresa antes do setTimeout
*/
date()






