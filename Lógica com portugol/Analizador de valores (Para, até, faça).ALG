Algoritmo "semnome"

Var
   C, N, S, D, X, Spar: inteiro
   M: real
Inicio

      Para C := 1 até 5 faça
           Escreva ("Digite o", C,"º número: ")
           Leia (N)
           Se N>0 entao
              S<- S + N
           Senao
                Se N=0 entao
                   X<- X+1
                Fimse
           Fimse
           Se N%5=0 entao
              D<- D + 1
           Fimse
           Se N%2=0 entao
              Spar<- Spar + N
           Fimse
      Fimpara
      M<- S/5
      EscrevaL ("A soma entre os valores é de:", S)
      EscrevaL ("E a média entre os valores é:", M)
      EscrevaL ("Valores divisiveis por cinco:", D)
      EscrevaL ("Valores nulos:", X)
      EscrevaL ("A soma total dos valores pares é:", Spar)

Fimalgoritmo