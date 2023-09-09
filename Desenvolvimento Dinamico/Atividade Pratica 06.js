let bebida = "leite";
let valor;
    switch(bebida){
         case "leite":
             valor = 3.00.toFixed(2);
             console.log(`Você escolheu ${bebida}, que custa R$${valor} Reais`);
             break;

         case "cha":
             valor = 4.00.toFixed(2);
             console.log(`Você escolheu ${bebida}, que custa R$${valor} Reais`);
             break;

         case "cafe":
             valor = 2.00.toFixed(2);
             console.log(`Você escolheu ${bebida}, que custa R$${valor} Reais`);
             break;

         default:
             console.log("Escolha entre Leite, café ou chá");
             break;

}