// debugger;
let sales = prompt('Enter the sales amount: ',0)
let commission = 0;
if (sales <= 5000){
    commission = 0.02 * sales;
}
else{
    if(sales>5000 && sales<=10000){
            commission = 0.05 * sales;
    }
    else{
        if(sales>10000 && sales<=20000){
                commission = 0.07 * sales;
                // console.log(commission)
        }
    else(sales>20000)
            {commission = 0.1 * sales;
        
        }
    }
}
console.log(commission)

