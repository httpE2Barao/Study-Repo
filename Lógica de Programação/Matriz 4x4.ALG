Algoritmo "semnome"
//  
//  

Var
M:vetor[1..4,1..4] de inteiro
l,c,Op:inteiro

Procedimento Menu()
Inicio
      EscrevaL("MENU DE OP��ES")
      EscrevaL("==============")
      EscrevaL("[1] Mostrar a Matrix")
      EscrevaL("[2] Diagonal Principal")
      EscrevaL("[3] Triangulo Superior")
      EscrevaL("[4] Triangulo Inferior")
      EscrevaL("[5] Sair")
      Escreva("===== Op��o: ")
      Leia(Op)
Fimprocedimento
///////////////////////////////////////
Procedimento Matrix()
Inicio
      Limpatela
         Para l <- 1 ate 4 fa�a
           Para c <- 1 ate 4 fa�a
                Escreva(M[l,c])
           Fimpara
           EscrevaL()
         Fimpara
      EscrevaL()
Fimprocedimento
///////////////////////////////////////
Procedimento Md()
Inicio
Limpatela
      Para l <- 1 ate 4 fa�a
           Para c <- 1 ate 4 fa�a
               Se (l=c) ent�o
                  Escreva(M[l,c])
               Fimse
               Escreva("  ")
           Fimpara
           EscrevaL()
      Fimpara
EscrevaL()
Fimprocedimento
///////////////////////////////////////
Procedimento Mb()
Inicio
Limpatela
         EscrevaL()
         EscrevaL()
         EscrevaL(M[2,1])
         EscrevaL(M[3,1],M[3,2])
         EscrevaL(M[4,1],M[4,2],M[4,3])
         EscrevaL()
Fimprocedimento
///////////////////////////////////////
Procedimento Mc()
Inicio
Limpatela
         EscrevaL()
         EscrevaL("  ",M[1,2],M[1,3],M[1,4])
         EscrevaL("    ",M[2,3],M[2,4])
         EscrevaL("      ",M[3,4])
         EscrevaL()
         EscrevaL()
Fimprocedimento
///////////////////////////////////////
Inicio
      Para l <- 1 ate 4 fa�a
           Para c <- 1 ate 4 fa�a
               Escreva("Preencha a casa: [",l," ][",c," ]:")
               leia(M[l,c])
           Fimpara
      Fimpara
Limpatela
Repita
      Menu()
      Se (Op=1) ent�o
         Matrix()
      Fimse
      Se (Op=2) ent�o
         Md()
      Fimse
      Se (Op=3) ent�o
         Mc()
      Sen�o
      Se (Op=4) ent�o
         Mb()
      Fimse
      Fimse
At� (Op<>1)e(Op<>2)e(Op<>3)e(Op<>4)ou(Op=5)
Fimalgoritmo