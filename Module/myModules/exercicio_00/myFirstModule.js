
const exit = document.querySelector("#exit");
const bt = document.querySelector("#bt");

function setDate(){

  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();


  function zero(param) {

    if( param < 10 ) {
      return "0"+''+param
    }
    return param
  }

  const patterDate = `${zero(h)}:${zero(m)}.${zero(s)}`

  setInterval(function() {
    exit.innerHTML = patterDate
  }, 1000)
}


bt.addEventListener("click", setDate)
















