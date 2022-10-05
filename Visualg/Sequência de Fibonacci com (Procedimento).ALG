Algoritmo "Sequencia de Fibonacci com procedimento"

Var
   C, TA, TB, TC: inteiro

Procedimento ProxF(var A, B: inteiro)
var C: inteiro
Inicio
      C := A + B
      Escreva (C)
      A := B
      B := C
FimProcedimento
Inicio
      TA <- 0
      Escreva(TA)
      TB <- 1
      Escreva(TB)
      Para C := 1 ate 10 faça
           ProxF(TA,TB)
      FimPara
Fimalgoritmo