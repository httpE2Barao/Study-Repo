Algoritmo "Acentos disponiveis"
//  
//  

Var
   C,aux:inteiro
   L:vetor[1..11] de caractere
   R:caractere
   S:inteiro
Procedimento AcentosDisp()
Inicio
      Para C := 1 até 11 faça
                Se C = 1 então
                   Escreva("[")
                Senão
                     Se C = 11 então
                        EscrevaL("]")
                     Senão
                          Escreva("][")
                     Fimse
                Fimse
                Se L[C]="X" entao
                   Escreva("---")
                Senao
                   Se C <> 11 então
                      Escreva("B",C)
                   Fimse
                Fimse
      Fimpara
Fimprocedimento
Inicio
S<-1
      Repita
            AcentosDisp()
            EscrevaL("___________________________________________________")
            Escreva("Escolha um acento: B")
                     Leia(S)
                     Se L[S]="X" entao
                        EscrevaL("Este acento já está reservado!")
                     Senão
                          EscrevaL("Acento reservado com sucesso!")
                          L[S] := "X"
                     Fimse
                     Escreva("Quer continuar? [S/N]")
                     Leia(R)
                     limpatela
      até (R="N")
Fimalgoritmo