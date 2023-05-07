    var firstname = prompt("Введите вашу Фамилию");
    var name = prompt("Введите ваше Имя");
    var surname = prompt("Ведите ваше Отчество");
      do {
        var ageS = prompt("Введите ваш возраст:");
        var age = parseInt(ageS);
      } while (isNaN(age));
        var male = confirm("Ваш пол мужской?");

      var ageDay = age * 365;
      var age5year = age + 5;
      if (male === true) {
        pol = "Мужской";
      } else {
        pol = "Женский";
      }

      if (male === true)
        if (age > 63) {
          pens = "да";
        } else {
          pens = "нет";
        }
      else if (male === false)
        if (age > 58) {
          pens = "да";
        } else {
          pens = "нет";
        }

      var result = `Ваше ФИО: ${firstname + " " + name + " " + surname}
                    Ваш возраст в годах: ${age}
                    Ваш возраст в днях: ${ageDay}
                    Через 5 лет вам будет: ${age5year}
                    Ваш пол: ${pol}
                    Вы на пенсии: ${pens}`;
      alert(result);