


exports.myDateTime = function() {

  const date = new Date()
  const d = date.toLocaleDateString()
  const h = date.toLocaleTimeString()

  return `${d}\n${h}`
}

