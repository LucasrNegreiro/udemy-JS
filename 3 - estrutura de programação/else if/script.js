let nome ='LUCAS'

if(nome != undefined){
    console.log('Nome está definido!')
}else if(nome == 'Lucas' && nome.length > 3){
    console.log(`seu nome tem ${nome.length} letras`)
}else{
    console.log(`Seu nome não é ${nome}`)
}