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
      Para C <- 1 ate 5 faça
           Escreva("Questão",C,": ")
           Leia (G[C])
      Fimpara
      Limpatela
      EscrevaL("PASSO 2 - Respostas dadas dos alunos")
      EscrevaL("------------------------------------")
      Para C <- 1 ate 5 faça
           Escreva(C,"º Aluno: ")
           Leia (NA[C])
                Para Co <- 1 ate 5 faça
                     Escreva("Questão",Co,":")
                     Leia(Q[Co])
                     VerifGab(Q[Co],G[Co])
                Fimpara
           Limpatela
      Fimpara
      EscrevaL("RESULTADO FINAL")
      EscrevaL("---------------")
      Para C <- 1 ate 5 faça
           M[C]<- M[C]*2
           EscrevaL("A nota de alune ",NA[C]," foi de: ",M[C])
           MTot <- MTot + M[C]
      Fimpara
      EscrevaL("E a média da turma foi", Mtot/5)
Fimalgoritmo