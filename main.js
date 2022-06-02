// Connection Check!
console.log("https://api.github.com/users/mintelc12")

const profilePage = document.querySelector("#profile-page")

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
        // console log the data
        // buildProfile(data)
    })

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
            names.push(repo.name)
        } 
        // equivalent to below:
        // repoData.map(function (repo) {
        //     return repo.name
        
        console.log("names", names)
        elements = names.map(function (name){
            return buildRepoElement(name)
        })
        console.log("elements", elements)
        for (let element of elements) {
            profilePage.appendChild(element)
        }}
//         // create elements and add them to the page. 
//         // profileData is data from the promise
//     }

function buildRepoElement(name) {
    let el = document.createElement("p")
    el.innerText = name 
    return el
}

// returns a new element for a repo, like a customer

let nameElement = document.createElement("h3")
nameElement.classList.add("center")
nameElement.innerText = `${githubUrl.name}`
profilePage.appendChild(nameElement)

// let pictureElement = document.createElement("img")
//     pictureElement.alt = "Chloe Mintel pic"
//     pictureElement.classList.add("git")
//     pictureElement.src = "https://avatars.githubusercontent.com/u/105135531?v=4"
//     pictureElement.appendChild(profilePage)