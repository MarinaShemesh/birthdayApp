'use strict'

angular.module('birthdayApp', [])
.controller('birthdayAddController', birthdayAdd)
.controller('birthdayShowController', birthShow)
.service('birthListService', birthListService);

birthdayAdd.$inject =['birthListService'];
function birthdayAdd(birthListService){
  const birthAdder = this;
  
  birthAdder.birthName = "";
  birthAdder.birthSurname = "";
  birthAdder.birthDate = "";

  birthAdder.addBirthday = function(){
    birthListService.addBirthday(birthAdder.birthName, 
                                 birthAdder.birthSurname, 
                                 birthAdder.birthDate);
  }
}

birthShow.$inject=['birthListService'];
function birthShow(birthListService){

  const birthList = this;

  birthList.items = birthListService.getBirthday();

  birthList.removeBirth = function(itemIndex){
    birthListService.removeBirth(itemIndex);

  };
}


function birthListService(){
  const service = this;

  const dates = [];

  service.addBirthday = function(name, surname, date) {
    const list = {
      name: name,
      surname: surname,
      date: date
    };

    dates.push(list);
  };

  service.getBirthday = function(){
    return dates;
  }

  service.removeBirth = function(itemIndex){
    dates.splice(itemIndex, 1);
  };
}
