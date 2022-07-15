// [
//     {
//         "name": "Michael Holz",
//         "data_created": "04/10/2013",
//         "role": "Admin",
//         "image": "face-portrait.jpg",
//         "status": "Active",
//         "address": "Chicago City",
//         "marital_status": "Single",
//         "sex": "Male",
//         "position": "Engineer"
//     },
//     {
//         "name": "Paula Wilson",
//         "data_created": "04/08/2014",
//         "role": "Publisher",
//         "image": "women.webp",
//         "status": "Active",
//         "address": "New York City",
//         "marital_status": "Single",
//         "sex": "Female",
//         "position": "Physicist"
//     },
//     {
//         "name": "Antonio Moreno",
//         "data_created": "04/10/2013",
//         "role": "Publisher",
//         "image": "face-portrait.jpg",
//         "status": "Suspended",
//         "address": "Camberra City",
//         "marital_status": "Married",
//         "sex": "Male",
//         "position": "Veterinarian"
//     },
//     {
//         "name": "Mary Saveley",
//         "data_created": "04/04/2015",
//         "role": "Reviewer",
//         "image": "women.webp",
//         "status": "Active",
//         "address": "London City",
//         "marital_status": "Single",
//         "sex": "Female",
//         "position": "Manager"
//     },
//     {
//         "name": "Charles Foster",
//         "data_created": "04/10/2013",
//         "role": "Moderator",
//         "image": "face-portrait.jpg",
//         "status": "Inactive",
//         "address": "Ottava City",
//         "marital_status": "Married",
//         "sex": "Male",
//         "position": "Carpenter"
//     },
//     {
//         "name": "Martin Sommer",
//         "data_created": "08/08/2015",
//         "role": "Reviewer",
//         "image": "face-portrait.jpg",
//         "status": "Suspended",
//         "address": "Capetown City",
//         "marital_status": "Single",
//         "sex": "Male",
//         "position": "Miner"
//     },
//     {
//         "name": "John Smith",
//         "data_created": "04/10/2017",
//         "role": "Publisher",
//         "image": "face-portrait.jpg",
//         "status": "Active",
//         "address": "Las Vegas City",
//         "marital_status": "Single",
//         "sex": "Transgender",
//         "position": "Designer"
//     },
//     {
//         "name": "Dick Dickson",
//         "data_created": "04/10/2017",
//         "role": "Moderator",
//         "image": "face-portrait.jpg",
//         "status": "Inactive",
//         "address": "Chicago City",
//         "marital_status": "Married",
//         "sex": "Male",
//         "position": "Psycologist"
//     }
// ]

let Data = [];

const Screenn = () => {
    $.ajax({
        url: "http://myjson.dit.upm.es/api/bins/c4kf",
        type: "GET",
        success: (value) => {
            Data = value;
            mapping(Data)
        }
    })
}
Screenn()

function mapping(value) {
    value.map((v, i) => {
        let col = `
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card p-2 text-center">
            <div class="text-center">
                <img id="C_image" src="${v.image}" alt="">
            </div>
            <div class="chucle">
                <h4 class="text-primary">${v.name}</h4>
                <h5>${v.role}</h5>
            </div>
                <button onclick="Add(${i})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" class="btn btn-success mb-2 mx-4">Add to user list</button>
                <button type="button" class="btn btn-primary mx-3" onclick="More(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        More information
                </button>
        </div>
    </div>
        `
        $(".row").append(col)
    });
}

function More(index) {
    $("#Modalling").html("")
    console.log(index);
    let M = `
   
    <div class="row">
    <div class="col-lg-5 col-md-4 col-sm-12">
        <img class="img-fluid" src="${Data[index].image}" alt="">
    </div>
    <div class="col-lg-7 col-md-8 col-sm-12">
        <h5 class="text-primary mb-2">Personal information</h5>
        <p class="mb-1">Full name:  ${Data[index].name}</p>
        <p class="mb-1">Data joined:  ${Data[index].data_created}</p>
        <p class="mb-1">Role:  ${Data[index].role}</p>
        <p class="mb-1">Status:  ${Data[index].status}</p>
        <p class="mb-1">Sex:  ${Data[index].sex}</p>
        <p class="mb-1">Marital status:  ${Data[index].marital_status}</p>
        <p class="mb-1">Position:  ${Data[index].position}</p>
        <p class="mb-1">Address:  ${Data[index].address}</p>

    </div>
  </div>
    `
    $("#Modalling").append(M)
}

let Newdata = [];

function Add(index) {
    Newdata.push(Data[index]);

    $("#offcanvas").html("")
    Newdata.map((v, i) => {

        let k = `
        <p>${v.name}</p>
        `
        $("#offcanvas").append(k)
    })

}


