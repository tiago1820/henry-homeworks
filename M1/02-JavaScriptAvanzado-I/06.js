6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//'9px
"$" + 4 + 5//"$45"
"4" - 2//2
"4px" - 2//nan
7 / 0//infinity
{}[0]//el código intenta acceder a un elemento con índice 0 de un objeto vacío, lo cual resulta en undefined.
parseInt("09")//9
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//23
3>2>1//false
[] == ![]//En resumen, la expresión console.log([] == ![]) imprime true. Esto ocurre porque un array vacío es "truthy" y se convierte a una cadena vacía "", mientras que el valor booleano false se convierte a 0. La comparación final es 0 == 0, que es true.