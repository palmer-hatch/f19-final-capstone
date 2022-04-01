

console.log('connection bb')


const btn = document.querySelector('button')
const urlContainer = document.querySelector('section')
const subURL = document.querySelector('#create-form')
const allUrl = document.querySelector("#all")
const newUrlName = document.querySelector('#channel-input')
const newYoutuberName = document.querySelector('#name-input')
const searchForm = document.querySelector('#search-form')
const searchName = document.querySelector('#name-search')


const baseURL = `http://localhost:80`

function  urlCreate(url) {
    let newUrl = document.createElement('div')
    newUrl.innerHTML = `<h3><a href='${url.urlName}'>${url.urlName}</a> ${url.youtuberName}</h3>`
    

urlContainer.appendChild(newUrl)
}

function clearUrls(){
    urlContainer.innerHTML = ``
}

function getAllUrls (){
    clearUrls()

    axios.get(`${baseURL}/youtubers`)
    .then(function(res){
        for(let i = 0; i <res.data.length; i++){
            urlCreate(res.data[i])
        }
    })
    .catch(err => console.log(err))
}

function createNewURL(event) {
    event.preventDefault()
  
    clearUrls()
   
    let body = {
      urlName: newUrlName.value, 
      youtuberName: newYoutuberName.value 
      
    }
  
    axios.post(`${baseURL}/youtuber`, body) 
      .then(function(res) {
        for (let i = 0; i < res.data.length; i++) {
          urlCreate(res.data[i])
        }
      })
    
      newUrlName.value = ''
      newYoutuberName.value  = ''
   
  }


  function getSpecificYoutuber(event) {
    event.preventDefault()
  
    clearUrls()
  
    axios.get(`${baseURL}/youtuber/?name=${searchName.value}`)
      .then(function(res) {
        for (let i = 0; i < res.data.length; i++) {
            urlCreate(res.data[i])
        }
      })
  
    searchName.value = ''
  }


allUrl.addEventListener('click', getAllUrls )
subURL.addEventListener('submit', createNewURL)
searchForm.addEventListener('submit', getSpecificYoutuber)