Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 

Var
// Se��o de Declara��es das vari�veis 
      A, C, P, maior, Con: inteiro
      nome, N: caractere
Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
      A <- 0
      C <- 0
      Con <- 1
      EscrevaL ("---------------------------")
      EscrevaL ("---Escola Elias de Deuse---")
      EscrevaL ("---------------------------")
      Escreva ("Quantos alunos s�o?: ")
      Leia (A)
      EscrevaL ("---------------------------")
      Enquanto (C < A) fa�a
               Se (Con <= A) ent�o
                        EscrevaL("Aluno:",Con)
               FimSe
               Escreva("Nome de alune: ")
               Leia (N)
               Escreva("Pontos de ",N,": ")
               Leia (P)
               EscrevaL("---------------------------")
               C <- C + 1
               Con <- Con + 1
               Se (P > maior) ent�o
               maior <- P
               nome <- N
               Fimse
      FimEnquanto
      Escreva ("O melhor aproveitamento foi de ",nome," com:",maior," Pontos!")
      
      
               

Fimalgoritmo