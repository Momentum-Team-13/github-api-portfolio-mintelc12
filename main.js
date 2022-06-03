// Connection Check!
console.log("https://api.github.com/users/mintelc12")

const repoSection = document.querySelector("#repo-section")
const profileSection = document.querySelector("#profile-section")

// fetching profile information
let githubUrl = "https://api.github.com/users/mintelc12"
fetch(githubUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
})
    .then(function(response) {
        // the response is the promised data
        return response.json()
        // put the response in JSON format
    })
    .then(function (data){
        // data refers to what the above promise returned (reponse.json())
        console.log("Response from GitHub API: ", data.name)

        // Profile Name
        let nameElement = document.createElement("h3")
        nameElement.classList.add("header")
        nameElement.innerText = data.name
        profileSection.appendChild(nameElement)

        // Profile Picture
        let imageElement = document.createElement("img")
        imageElement.classList.add("header")
        imageElement.src = data.avatar_url
        profileSection.appendChild(imageElement)

        // Username
        let usernameElement = document.createElement("a")
        usernameElement.classList.add("username")
        usernameElement.href = data.html_url
        usernameElement.innerText = `GitHub Username: ${data.login}`
        profileSection.appendChild(usernameElement)

        // Bio
        let bioElement = document.createElement("bio")
        bioElement.classList.add("biostuff")
        bioElement.innerText = `Bio: ${data.bio}`
        profileSection.appendChild(bioElement)

        // My Location
        let locationElement = document.createElement("profile")
        locationElement.classList.add("location")
        locationElement.innerText = `Location: ${data.location}`
        profileSection.appendChild(locationElement)
        // console log the data
        // buildProfile(data)
    })


    // fetching repos
let githubRepoUrl = "https://api.github.com/users/mintelc12/repos"
fetch(githubRepoUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
})
    .then(function(response) {
        return response.json()
    })
    .then(function (repoArray){
        console.log("Response from GitHub API: ", repoArray)
    buildRepos(repoArray)
    })

    function buildRepos(repoData) {
        let names = []
        for (let repo of repoData) {
            buildRepoElement(repo)
            names.push(repo.name)
        }} 

function buildRepoElement(repo) {
    let el = document.createElement("a")
    el.href = repo.html_url
    el.innerText = repo.name 
    repoSection.appendChild(el)
    return el
}


// returns a new element for a repo, like a customer

        // equivalent to below:
        // repoData.map(function (repo) {
        //     return repo.name
        
        // console.log("names", names)
        // elements = names.map(function (name){
        //     return buildRepoElement(name)
        // })
        // console.log("elements", elements)
        // for (let element of elements) {
        //     repoSection.appendChild(element)
        // }}
//         // create elements and add them to the page. 
//         // profileData is data from the promise
//   
