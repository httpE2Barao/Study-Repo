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
      Para c := 1 ate 3 fa�a
           Para l := 1 ate 3 fa�a
                Se (P[c,l]=0) ent�o
                   Escreva("  ","X"," |")
                Fimse
                Se (P[c,l]=10) ent�o
                   Escreva("  ","O"," |")
                Fimse
                Se (P[c,l]<>0)e(P[c,l]<>10) ent�o
                   Escreva(" ",P[c,l]," |")
                Fimse
                Se (l<>1)e(l<>2) ent�o
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
      Para c <- 1 ate 3 fa�a
           Para l <- 1 ate 3 fa�a
                Se (P[c,l]=10) ent�o
                   Para con <- 1 ate 3 fa�a
                        Se (P[con,1]=P[con,2])e(P[con,2]=P[con,3]) ent�o
                           R := 10
                        Fimse
                        Se (P[1,con]=P[2,con])e(P[2,con]=P[3,con]) ent�o
                           R := 10
                        Fimse
                   Fimpara
                Fimse
                Se (P[c,l]=0) ent�o
                   Para con <- 1 ate 3 fa�a
                        Se (P[con,1]=P[con,2])e(P[con,2]=P[con,3]) ent�o
                           Copia(P[con,1]:Compr(P[con,1]):2)
                           R := 10
                        Fimse
                        Se (P[1,con]=P[2,con])e(P[2,con]=P[3,con]) ent�o
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
      Para c := 1 ate 3 fa�a
           Para l := 1 ate 3 fa�a
                Se c = 1 ent�o
                  P[c,l] := l
                Sen�o
                     Se c = 2 ent�o
                       P[c,l] := l + c + 1
                Sen�o
                     Se c = 3 ent�o
                     P[c,l] := l + c + 3
                     Fimse
                     Fimse
                Fimse
           Escreva(P[c,l])
           Fimpara
      Fimpara
      Repita
      Para Con := 1 at� 2 fa�a
           Jogo()
           Escreva("Jogador [",J[Con],"]: ")
           Leia(R)
           Se (J[Con]="X") ent�o
             Para c := 1 ate 3 fa�a
                  Para l := 1 ate 3 fa�a
                       Se (P[c,l] = R) ent�o
                          P[c,l]:= 0
                       Fimse
                  Fimpara
             Fimpara
           Fimse
           Se (J[Con]="O") ent�o
             Para c := 1 ate 3 fa�a
                  Para l := 1 ate 3 fa�a
                       Se (P[c,l] = R) ent�o
                          P[c,l]:= 10
                       Fimse
                  Fimpara
             Fimpara
           Fimse
           Verif()
      Fimpara
      EscrevaL("Digite 10 para sair.")
      at� R=10
Fimalgoritmo