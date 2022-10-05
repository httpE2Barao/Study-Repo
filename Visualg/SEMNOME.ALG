Algoritmo "a"

Var
   P:vetor[1..3,1..3] de inteiro
   c,l,con,R:inteiro
   J:vetor[1..2] de caractere
   Pontos:vetor[1..2] de inteiro
   aux:inteiro

Procedimento Jogo()
Inicio
      Limpatela
      EscrevaL("=================")
      EscrevaL("  JOGO DA VELHA  ")
      EscrevaL("=================")
      EscrevaL()
      Para c := 1 ate 3 faça
           Para l := 1 ate 3 faça
                Se (P[c,l]=0) então
                   Escreva("  ","X"," |")
                Fimse
                Se (P[c,l]=10) então
                   Escreva("  ","O"," |")
                Fimse
                Se (P[c,l]<>0)e(P[c,l]<>10) então
                   Escreva(" ",P[c,l]," |")
                Fimse
                Se (l<>1)e(l<>2) então
                   EscrevaL()
                   EscrevaL(" ---  ---  ---")
                Fimse
           Fimpara
           EscrevaL()
      Fimpara
      EscrevaL()
Fimprocedimento
Procedimento Verif()
Inicio
aux <- 0
      Para c <- 1 ate 3 faça
           Para l <- 1 ate 3 faça
                Se (P[c,l]=10) então
                   Para con <- 1 ate 3 faça
                        Se (P[con,1]=P[con,2])e(P[con,2]=P[con,3]) então
                           R := 10
                        Fimse
                        Se (P[1,con]=P[2,con])e(P[2,con]=P[3,con]) então
                           R := 10
                        Fimse
                   Fimpara
                Fimse
                Se (P[c,l]=0) então
                   Para con <- 1 ate 3 faça
                        Se (P[con,1]=P[con,2])e(P[con,2]=P[con,3]) então
                           Copia(P[con,1]:Compr(P[con,1]):2)
                           R := 10
                        Fimse
                        Se (P[1,con]=P[2,con])e(P[2,con]=P[3,con]) então
                           R := 10
                        Fimse
                   Fimpara
                Fimse
           Fimpara
      Fimpara
Fimprocedimento
Inicio
J[1]:= "X"
J[2]:= "O"
      Para c := 1 ate 3 faça
           Para l := 1 ate 3 faça
                Se c = 1 então
                  P[c,l] := l
                Senão
                     Se c = 2 então
                       P[c,l] := l + c + 1
                Senão
                     Se c = 3 então
                     P[c,l] := l + c + 3
                     Fimse
                     Fimse
                Fimse
           Escreva(P[c,l])
           Fimpara
      Fimpara
      Repita
      Para Con := 1 até 2 faça
           Jogo()
           Escreva("Jogador [",J[Con],"]: ")
           Leia(R)
           Se (J[Con]="X") então
             Para c := 1 ate 3 faça
                  Para l := 1 ate 3 faça
                       Se (P[c,l] = R) então
                          P[c,l]:= 0
                       Fimse
                  Fimpara
             Fimpara
           Fimse
           Se (J[Con]="O") então
             Para c := 1 ate 3 faça
                  Para l := 1 ate 3 faça
                       Se (P[c,l] = R) então
                          P[c,l]:= 10
                       Fimse
                  Fimpara
             Fimpara
           Fimse
           Verif()
      Fimpara
      EscrevaL("Digite 10 para sair.")
      até R=10
Fimalgoritmo