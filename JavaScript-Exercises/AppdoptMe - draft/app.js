window.addEventListener("load", solve);

function solve() {
  function solve() {  
    let animalType = document.getElementById('type');
    let animalAge = document.getElementById('age');
    let animalGender = document.getElementById('gender');
    let adoptButton = document.getElementById('adopt-btn');
    let ulElementInfo = document.getElementById('adoption-info');
    let adoptedList = document.getElementById('adopted-list');
    
    adoptButton.addEventListener('click', () => {
      if (animalAge.value.trim() !== "" && animalType.value.trim() !== "" && animalGender.value.trim() !== "") {
        let liElement = addLiData();
        let divButtons = document.createElement('div');
        divButtons.classList.add('buttons');
        let editButton = document.createElement('button');
        let doneButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        doneButton.classList.add('done-btn');
        editButton.textContent = 'Edit';
        doneButton.textContent = 'Done';
        divButtons.appendChild(editButton);
        divButtons.appendChild(doneButton);
        liElement.appendChild(divButtons);
        ulElementInfo.appendChild(liElement);
        let typePlaceholder = animalType.value;
        animalType.value = "";
        let genderPlaceholder = animalGender.value;
        animalGender.value = "";
        let agePlaceholder = animalAge.value;
        animalAge.value = "";
        adoptButton.disabled = true;

        editButton.addEventListener('click', () => {
          adoptButton.disabled = false;
          animalType.value = typePlaceholder;
          animalGender.value = genderPlaceholder;
          animalAge.value = agePlaceholder;
          ulElementInfo.removeChild(liElement);
        });

        doneButton.addEventListener('click', () => {
          adoptButton.disabled = false;
          ulElementInfo.removeChild(liElement);
          animalType.value = typePlaceholder;
          animalGender.value = genderPlaceholder;
          animalAge.value = agePlaceholder;
          let adoptedLiElement = addLiData();
          let buttonClear = document.createElement('button');
          buttonClear.classList.add('clear-btn');
          buttonClear.textContent = 'Clear';
          adoptedLiElement.appendChild(buttonClear);
          adoptedList.appendChild(adoptedLiElement);
          animalType.value = "";
          animalGender.value = "";
          animalAge.value = "";

          buttonClear.addEventListener('click', () => {
            adoptedList.removeChild(adoptedLiElement);
          })
        })
      }
    });

    function addLiData() {
      let liElement = document.createElement('li');
      let articleElement = document.createElement('article');
      let typePElement = document.createElement('p');
      let agePElement = document.createElement('p');
      let genderPElement = document.createElement('p');
      typePElement.textContent = `Pet:${animalType.value}`;
      genderPElement.textContent = `Gender:${animalGender.value}`;
      agePElement.textContent = `Age:${animalAge.value}`;
      articleElement.appendChild(typePElement);
      articleElement.appendChild(genderPElement);
      articleElement.appendChild(agePElement);
      liElement.appendChild(articleElement);
      return liElement;
    }
  }
  
  }
  