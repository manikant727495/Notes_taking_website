showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addtxt");
    let addTitle = document.getElementById("Title");
    let addNote ={
         addTxt1 : addTxt.value,
         addTitle1: addTitle.value
    };
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addNote);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    addTitle.value="";
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        console.log(element);
        html += `
    <div class="note-card my-2 mx-3 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.addTitle1}</h5>
            <p class="card-text">${element.addTxt1}</p>
            <button id = "${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
  `;
});
       let notesElm = document.getElementById("notes");
        if (notesobj.length != 0) {
            notesElm.innerHTML = html;
        }
        else{
            console.log("not any note added yet");
            notesElm.innerHTML=`<h5>Not any notes added yet!please add a note</h5>`;
        }
 


}


function deleteNode(index){
    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
}

let search = document.getElementById("search");
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let notecards = document.getElementsByClassName("note-card");
    Array.from(notecards).forEach(function(element){
       let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal))
        {
            element.style.display = "block";
        }
        else{
            element.style.display= "none"
        }
    });

});

