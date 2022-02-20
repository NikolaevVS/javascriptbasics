let target = Math.round(Math.random() * 10);
let variant;
do {
  variant = prompt('Укажите число');
  	if (variant > target) {
      console.log('Число ' + variant + ' больше, чем загаданное');
    }
  		else if (variant < target) {
          console.log('Число ' + variant + ' меньше, чем загаданное');
        }
}
	while(variant != target);
console.log('Вы угадали число: ' + target);