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
      Para C := 1 at� 11 fa�a
                Se C = 1 ent�o
                   Escreva("[")
                Sen�o
                     Se C = 11 ent�o
                        EscrevaL("]")
                     Sen�o
                          Escreva("][")
                     Fimse
                Fimse
                Se L[C]="X" entao
                   Escreva("---")
                Senao
                   Se C <> 11 ent�o
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
                        EscrevaL("Este acento j� est� reservado!")
                     Sen�o
                          EscrevaL("Acento reservado com sucesso!")
                          L[S] := "X"
                     Fimse
                     Escreva("Quer continuar? [S/N]")
                     Leia(R)
                     limpatela
      at� (R="N")
Fimalgoritmo