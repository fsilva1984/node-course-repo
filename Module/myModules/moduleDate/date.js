
const bt = document.querySelector("#bt")

bt.addEventListener("click", () => {
  const exit = document.querySelector("#exit")


  setInterval(() => {
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

   exit.innerHTML = `${zero(h)}:${zero(m)}.${zero(s)}`
  }, 1000)

})


