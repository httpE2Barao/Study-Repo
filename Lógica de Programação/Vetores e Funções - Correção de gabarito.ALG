Algoritmo "Gabarito"
//  
//  

Var
   C,Co: inteiro
   G,Q:vetor[1..5] de caractere
   NA:vetor[1..5] de caractere
   M:vetor[1..5] de inteiro
   MTot:inteiro
Procedimento VerifGab(var X,Y:caractere)
Inicio
     Se (X = Y) entao
         M[C]<- M[C] + 1
     Fimse
Fimprocedimento
Inicio
      EscrevaL("PASSO 1 - Cadastro do Gabarito")
      EscrevaL("------------------------------")
      Para C <- 1 ate 5 fa�a
           Escreva("Quest�o",C,": ")
           Leia (G[C])
      Fimpara
      Limpatela
      EscrevaL("PASSO 2 - Respostas dadas dos alunos")
      EscrevaL("------------------------------------")
      Para C <- 1 ate 5 fa�a
           Escreva(C,"� Aluno: ")
           Leia (NA[C])
                Para Co <- 1 ate 5 fa�a
                     Escreva("Quest�o",Co,":")
                     Leia(Q[Co])
                     VerifGab(Q[Co],G[Co])
                Fimpara
           Limpatela
      Fimpara
      EscrevaL("RESULTADO FINAL")
      EscrevaL("---------------")
      Para C <- 1 ate 5 fa�a
           M[C]<- M[C]*2
           EscrevaL("A nota de alune ",NA[C]," foi de: ",M[C])
           MTot <- MTot + M[C]
      Fimpara
      EscrevaL("E a m�dia da turma foi", Mtot/5)
Fimalgoritmo