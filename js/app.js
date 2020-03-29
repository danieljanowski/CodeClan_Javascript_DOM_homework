document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-airplane-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

    const airplaneList = document.querySelector('#airplane-list');
    const airplaneListItem = createAirplaneListItem(event.target);
    airplaneList.appendChild(airplaneListItem);

    event.target.reset();
}

const createAirplaneListItem = function (form) {
    const airplaneListItem = document.createElement('tr');
    airplaneListItem.classList.add('airplane-list-item');

    const type = document.createElement('td');
    type.textContent = form.type.value;
    airplaneListItem.appendChild(type);

    
    const name = document.createElement('td');
    console.log(name);
    name.textContent = form.name.value;
    airplaneListItem.appendChild(name);
    
    const engines = document.createElement('td');
    engines.textContent = form.engines.value;
    airplaneListItem.appendChild(engines);
    
    const distance = document.createElement('td');
    distance.textContent = form.distance.value + " km";
    airplaneListItem.appendChild(distance);
    
    const altitude = document.createElement('td');
    altitude.textContent = form.altitude.value + " ft";
    airplaneListItem.appendChild(altitude);

    return airplaneListItem;
}

const handleDeleteAllClick = function(){
    const airplaneListItem = document.querySelector('#airplane-list');
    airplaneListItem.innerHTML = '<tr><th>Type</th><th>Name</th><th>Engines</th><th>Distance</th><th>Altitude</th></tr>';

    // while(airplaneListItem.firstChild){
    //     airplaneListItem.removeChild(airplaneListItem.firstChild);
    // }
  }