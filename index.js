function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  let name = retrieveEmployeeInformation();
  document.querySelector('.employee-list').append('<li>',name,'</li>');
}

function addNewLiOnClick(){
  addedEmployee = document.querySelector('input[type="submit"]')
 submit.addEventListener('click', addNewElementAsLi())
}