let getDate = () => {
  let data = new Date()
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let day = data.toLocaleDateString("en-US", options)
  return day
}

exports = {
  getDate : getDate
}
