let orangNote = 'var(--orang-note)';
let vilotNote = 'var(--vilot-note)';
let vilotTextNote = 'var(--vilot-note-text)';
let yellowNote = 'var(--yellow-note)';
let blueNote = 'var(--blue-note)';
var notcolor;
let notesArray = [];

let noteBox = document.getElementById('notes');

console.log("ara ara");


// get old note

if(localStorage.length >= 1){

    createoldnote();

}




let addcont = function(color){
    let inputbox = document.getElementById('inputbox');
    inputbox.style.display = "flex";
    let formnote = document.getElementById('form');
    document.body.style.overflow = "hidden";

    color == "blue"?
    formnote.style.background = blueNote
    :color == "yellow"?
        formnote.style.background = yellowNote
    :color == "vilot"?
        formnote.style.background = vilotNote 
    :formnote.style.background = orangNote ;
    notcolor = color;

}

let add = function(){
    inputbox.style.display = "none";
    document.body.style.overflowY = "unset";
    create()
};


let create =  function () {
    let noteBox = document.getElementById('notes');
    let name = Math.random()*6;


    // create

    let div = document.createElement('div');
    div.classList = 'note';
    
    let disc = document.createElement('p');
    disc.id = "disc";
    disc.classList.add()
    div.appendChild(disc);
    
    let control = document.createElement('div');
    control.classList = 'control';
    div.appendChild(control);


    control.innerHTML =`<button id="dle" onclick="remove(this,${name})"><img src="./del.svg"></button>`;



    noteBox.appendChild(div);

    // add text
    let discContact = document.getElementById('discContact');

    disc.innerText = discContact.value;
    

    // add in localStorage
    let note = {
        namen : name,
        color: notcolor,
        Content : discContact.value
    }

     
    notesArray.push(note);
    localStorage.setItem('notesArray', JSON.stringify(notesArray));
    

    
    
    


    
    // clear contect
    discContact.value = ""
    // color

    
    notcolor == "blue"?
        div.style.background = blueNote
        :notcolor == "yellow"?
            div.style.background = yellowNote
        :notcolor == "vilot"?
            (div.style.background = vilotNote ,
            disc.style.color = vilotTextNote)
        :div.style.background = orangNote ;



}


let remove = function(btn,tok){
    let btnperent = btn.parentElement.parentElement;
    notesArray = JSON.parse(localStorage.getItem('notesArray'));
    
    for (let i = 0; i <= notesArray.length; i++){
        let note = notesArray[i];
       if (note.namen == tok){
            notesArray.splice( i , 1 );
            localStorage.setItem('notesArray', JSON.stringify(notesArray));
            btnperent.remove();
       };

    };
    
    
};



function createoldnote(){

    notesArray = JSON.parse(localStorage.getItem('notesArray'));
    for (let i = 0; i < notesArray.length; i++) {


        let note = notesArray[i];
        

        if (note.Content !=''){


            let noteBox = document.getElementById('notes');
    
    
            // create
        
            let div = document.createElement('div');
            div.classList = 'note';
            
            let disc = document.createElement('p');
            disc.id = "disc";
            div.appendChild(disc);
            
            let control = document.createElement('div');
            control.classList = 'control';
            div.appendChild(control);
        
        
            control.innerHTML =`<button id="dle" onclick="remove(this,${note.namen})"><img src="./del.svg"></button>`;
        
        
        
            noteBox.appendChild(div);
        
            // add text
        
            disc.innerText = note.Content;
    
        
            
            note.color == "blue"?
                div.style.background = blueNote
                :note.color == "yellow"?
                    div.style.background = yellowNote
                :note.color == "vilot"?
                    (div.style.background = vilotNote ,
                    disc.style.color = vilotTextNote)
                :div.style.background = orangNote ;
        
        
    
        };

    
    };
};
