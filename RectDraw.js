let size = prompt('Укажите размер квадрата');
if (size > 200) {
    size = 200;
}

drawRect(450,250,size,size,'black');/