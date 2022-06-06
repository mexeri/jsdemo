let users=[
    {surname:"Berger", firstname: "Whitney", age:22},
    {surname:"Nagy", firstname: "Whitney", age:76},
    {surname:"Berger", firstname: "Bence", age:38},
    {surname:"Berg", firstname: "Joey", age:22},
    {surname:"Bruno", firstname: "Frank", age:45},
    {surname:"Rousey", firstname: "Ronda", age:29}
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (htmlElement, parent) => {
    let td = document.createElement("td");
    td.innerHTML=htmlElement;
    parent.appendChild(td);
};

let CreateButtonGroup = parent => {

    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML= "Szerkesztés";

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML= "Törlés";

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users){
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1,tr);
    for( let value of Object.values(users[k])){
        createTD(value,tr)
    }
    CreateButtonGroup(tr);
    tableBody.appendChild(tr);
}

