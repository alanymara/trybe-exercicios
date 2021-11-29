function even_fibonacci_numbers(roof) {
    let sum = 0;
    let num = 0;
    for(let i = 0; i <= roof; i += 1){
        if (i !== roof){
        num = i + (i + 1);
        if(num % 2 == 0){
            sum = sum + num;
        }
      }else if(i % 2 == 0){
            sum = sum + i;
        
      }
    }
return num;
}

console.log(even_fibonacci_numbers(100));
