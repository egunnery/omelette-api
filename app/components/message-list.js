function MessageList(data) {
  function render() {
  return [
    "<h1> The Worlds Greatest Omelette: </h1>",

    data.map(function(messageData) {
      return "<li>" + messageData.ingredient + "</li>"
      console.log(messageData.ingredient)
    }).join(' '),
  ].join(' ')
}

return {
  render: render
  }
}
