//accessor properties

let obj = {
    get propName() {
      // геттер, срабатывает при чтении obj.propName
    },
  
    set propName(value) {
      // сеттер, срабатывает при записи obj.propName = value
    }
  };

  //Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set.
  //get – функция без аргументов, которая сработает при чтении свойства,
  //set – функция, принимающая один аргумент, вызываемая при присвоении свойства,