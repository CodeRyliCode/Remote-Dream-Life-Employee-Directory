fetch('https://randomuser.me/api/?format=json')
.then(response => response.json)
.then(data => console.log(data))
