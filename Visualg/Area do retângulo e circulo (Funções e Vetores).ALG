Algoritmo "a"

Var
   R: vetor[1..3] de real
   C: real
   P: caractere
   
Função AreaR: real
Inicio
//área do retângulo = B * H
      retorne R[1] * R[2]
FimFunção

Função AreaC: real
Inicio
//área do circulo = pi * raio ^ 2
      retorne C * pi ^ 2
Fimfunção
Inicio
      escreva("Quer calcular a área de um retãngulo ou de um circulo? [1/2]: ")
      leia(P)
      Se (P="1") entao
         escreva("Digite a base do retângulo: ")
         leia(R[1])
         Escreva("Digite a altura: ")
         Leia(R[2])
         R[3] := AreaR
         Escreva("A área deste retângulo é de: ", R[3])
      Senão
         escreva("Digite o raio do circulo: ")
         leia (C)
         C := AreaC
         escreval("A área deste Circulo é de:", C)
      Fimse
      
Fimalgoritmo