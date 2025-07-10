let nome = 'Lucas'
for(i = 0; i < 10; i++){

    if(i == 3){
        nome  = 'Daniela'
    }
        if(i == 5 && nome == 'Daniela'){
            console.log('O nome e Daniela, pode parar')
           break
        }
}
console.log(i)