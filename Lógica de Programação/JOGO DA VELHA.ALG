Algoritmo "a"

Var
   P:vetor[1..3,1..3] de inteiro
   c,l,con,R,F,V,auxx,auxxx:inteiro
   J:vetor[1..2] de caractere
   Pontos:vetor[1..2] de inteiro
   aux,Resp:caractere
////////////////////////////////////////////
Procedimento Jogo()
Inicio
      Limpatela
      EscrevaL("=================")
      EscrevaL("  JOGO DA VELHA        Pontos: [X]: ",Pontos[1])
      EscrevaL("=================              [O]: ",Pontos[2])
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
////////////////////////////////////////////////////////////
Procedimento Verif()
Inicio
      Para c := 1 ate 3 fa�a
           Para l := 1 ate 3 fa�a
               Se (P[c,l]=10)ou(P[c,l]=0) ent�o
                  Se (P[c,1]=P[c,2])e(P[c,2]=P[c,3]) ent�o
                     F := 10
                  Fimse
                  Se (P[1,c]=P[2,c])e(P[2,c]=P[3,c]) ent�o
                     F := 10
                  Fimse
                  Se (P[1,1]=P[2,2])e(P[2,2]=P[3,3]) ent�o
                     F := 10
                  Fimse
                  Se (P[1,3]=P[2,2])e(P[2,2]=P[3,1]) ent�o
                     F := 10
                  Fimse
               Fimse
           Fimpara
      Fimpara
///////////Verifica��o velha
auxxx <- 0
      Para c := 1 ate 3 fa�a
           Para l := 1 ate 3 fa�a
               Se (P[c,l]=10)ou(P[c,l]=0) ent�o
                  auxxx <- auxxx + 1
                  Se (auxxx=9) ent�o
                     V := 1
                  Fimse
               Fimse
           Fimpara
      Fimpara
Fimprocedimento
////////////////////////////////////////////////////////////
Inicio
J[1]:= "X"
J[2]:= "O"
Repita
///////////Resete das variaveis
auxx:=0
V:=0
F:=0
Para c := 1 ate 3 fa�a
     Para l := 1 ate 3 fa�a
         P[c,l] := 0
     Fimpara
Fimpara
///////////
///////////Criar variavel de 1 a 9 para sele��o
      Para c := 1 ate 3 fa�a
           Para l := 1 ate 3 fa�a
                P[c,l] := P[c,l] + auxx + 1
                auxx := P[c,l]
                Escreva(P[c,l])
           Fimpara
      Fimpara
///////////Inicio
      Repita
      Para Con := 1 at� 2 fa�a
           Jogo()
///////////Verifica��o se deu velha
           Verif()
//////
      Se (F<>10) e (V<>1) ent�o
         auxx := 0
           Escreva("Jogador [",J[Con],"]: ")
           Leia(R)
///////////Verifica��o se j� foi selecionada
           Para c := 1 ate 3 fa�a
                    Para l := 1 ate 3 fa�a
                         Se (P[c,l]=R) ent�o
                            auxx := 1
                         Fimse
                    Fimpara
           Fimpara
           Se (auxx<>1)e(auxxx<>9) ent�o
             Escreva("Este espa�o j� foi ultilizado! Digite outro: ")
             Leia(R)
           Fimse
///////////Selecionar a variavel e trocar por [X,O]
           Se (auxx=1) ent�o
              Se (J[Con]="X") ent�o
                     Para c := 1 ate 3 fa�a
                          Para l := 1 ate 3 fa�a
                               Se (P[c,l] = R) ent�o
                                  P[c,l]:= 0
                                  aux := "X"
                                  Fimse
                          Fimpara
                     Fimpara
              Fimse
              Se (J[Con]="O") ent�o
                 Para c := 1 ate 3 fa�a
                      Para l := 1 ate 3 fa�a
                           Se (P[c,l] = R) ent�o
                              P[c,l]:= 10
                              aux := "O"
                           Fimse
                      Fimpara
                 Fimpara
              Fimse
           Fimse
      Fimse
      Fimpara
///////////Fim variavel jogador
      EscrevaL()
      at� (F=10)ou(V=1)
      Se (F=10) e (R<>0) ent�o
         Se aux="X" ent�o
           Pontos[1]:= Pontos[1]+1
         Sen�o
             Pontos[2]:= Pontos[2]+1
         Fimse
         Limpatela
         Jogo()
        EscrevaL("Partida finalizada!")
        EscrevaL("Jogador [",aux,"] ganhou um ponto!")

      Sen�o
           Limpatela
           Jogo()
           EscrevaL("Jogo finalizado, deu velha! XD")
      Fimse
      EscrevaL()
      Escreva("Deseja continuar? [S,N]: ")
      Leia(Resp)
Ate (Resp="N")
Fimalgoritmo