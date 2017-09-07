// controls and rendering

const tmpData = [
  {id: null,
  title: null,
  url: null
  }
]

function get (url, returnFunction) {
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open("GET", url)
  xmlhttp.send()
  xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200)
      returnFunction(xmlhttp.response)
  }
}

const state = tmpData

function setState(shnArray) {
  const objState = Object.assign(state, shnArray)

  ReactDOM.render(
    React.createElement('div', null,
      HeaderElement,
      React.createElement(Posts, {postIts: objState}),
      FooterElement
    ), document.getElementById('react-app')
  )
}

setState(state)

get("/all", function(response){
  var jsonResponse = JSON.parse(response)
  setState(jsonResponse)
})

setInterval(function() {
  get("/all", function(response) {
    var jsonResponse = JSON.parse(response)
    console.log("Ajax with interval:", jsonResponse)
    setState(jsonResponse)
  })
}, 1000*60*1)