let input = document.querySelector('.input')
let btn = document.querySelector('.btn')

async function result() {
try {
    

  let url = `https://api.weatherapi.com/v1/current.json?key=d90cd40ea0e54c8c9fc82132261303&q=${input.value}`

  let request = await fetch(url)

  let response = await request.json()

  let answers = document.querySelector(".output")
  let img = document.querySelector(".hj")
  let out = document.querySelector(".out")
  out.innerHTML = `<p>${response.current.temp_c} C</p>`
  img.innerHTML = `<img src="${response.current.condition.icon}">`
  
  answers.innerHTML = `${response.current.condition.text}`

  console.log(response)
}catch (error) {
  alert("Enter correct details")  
}
}

btn.addEventListener('click', result)