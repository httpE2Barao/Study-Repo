Algoritmo "Sequencia de Fibonacci"

Var
   C: inteiro
   Fi, Fa, Ft: real
Inicio
Fi <- 0
Fa <- 1
Ft <- 0
      Para C := 0 ate 15 fa�a
           Enquanto (Fi<=1) fa�a
              Escreva (Fi)
              Fi <- Fi+1
              Escreva(Fi)
           FimEnquanto
           Se Fi>= 2 entao
              Ft <- Fi + Fa
              Escreva (Ft)
              Fa <- Fi
              Fi <- Ft
           Fimse
      Fimpara
      EscrevaL ("")
      EscrevaL ("O n�mero aproximado de Fi foi de:", Fi/Fa)

Fimalgoritmo