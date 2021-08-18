'use strict'; 
    const number=40;
    let game =function(){
        let input=prompt('Угадай число от 1 до 100');
    if (input===null) {return alert('Игра окончена!');}
    if (input > number) {
        alert('Загаданное число меньше');
        game();
    } else if (input < number) {
        alert('Загаданное число больше');
        game();
    } else if (+input === number){ 
        return alert('Вы угадали');
    } 
    else {
        alert('Введите число!'); 
        game();}
    };
    game();

