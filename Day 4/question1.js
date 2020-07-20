console.log("question1");


console.log(i);
for(i = 1;i<=100;i++){
    if(i%3 == 0 && i%5==0){
        prt1 = "fizzbuzz";
        console.log(i,prt1);
    }
    if(i%5 == 0){
        prt2 = "buzz";
        console.log(i,prt2);
    }
    if(i%3==0){
        prt3 = "fizz";
        console.log(i,prt3);
    }
}