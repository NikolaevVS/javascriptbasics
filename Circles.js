let target = Math.round(Math.random() * 10);
let variant;
do {
  variant = prompt('������� �����');
  	if (variant > target) {
      console.log('����� ' + variant + ' ������, ��� ����������');
    }
  		else if (variant < target) {
          console.log('����� ' + variant + ' ������, ��� ����������');
        }
}
	while(variant != target);
console.log('�� ������� �����: ' + target);