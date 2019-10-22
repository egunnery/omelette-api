let appElement = document.getElementById('app')

window.addEventListener('load', function() {
  $.get("http://localhost:9292/api/cookbook", function(messageData) {
  console.log(messageData)
    let parsedData = JSON.parse(messageData)
    console.log(parsedData)
    appElement.innerHTML = new MessageList(parsedData).render()
    console.log(appElement.innerHTML)
  })
});
