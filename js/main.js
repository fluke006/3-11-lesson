var elForm = document.querySelector('.form');

var userVerb = document.querySelector('.user__verb');

var userName = document.querySelector('.user__name');

var elList = document.querySelector('.list');

var todo = [];

elForm.addEventListener('submit' , function (evt){

   evt.preventDefault();

   var userVerbValue = userVerb.value.trim();

   userVerb.value = null;

   var userNameValue = userName.value.trim();

   userName.value = null;

   elList.innerHTML = null

   var todos = {
      verb: userVerbValue,
      name: userNameValue
   };

   todo.push(todos);

   for (const itemTodos of todo) {
      var listItem = document.createElement('li');
      listItem.setAttribute('class', 'list__item');
      listItem.textContent = itemTodos.verb + ' ';

      var itemStrong  = document.createElement('strong');
      itemStrong.setAttribute('class', 'item__strong');
      itemStrong.textContent = ' ' + itemTodos.name;

      var itemButton = document.createElement('button');
      itemButton.setAttribute('class', 'btn btn__item');
      itemButton.textContent = `o'chirish`

      listItem.appendChild(itemStrong);
      listItem.appendChild(itemButton);

      elList.appendChild(listItem);
   }




});
