Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 

Var
// Seção de Declarações das variáveis 
      A, C, P, maior, Con: inteiro
      nome, N: caractere
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      A <- 0
      C <- 0
      Con <- 1
      EscrevaL ("---------------------------")
      EscrevaL ("---Escola Elias de Deuse---")
      EscrevaL ("---------------------------")
      Escreva ("Quantos alunos são?: ")
      Leia (A)
      EscrevaL ("---------------------------")
      Enquanto (C < A) faça
               Se (Con <= A) então
                        EscrevaL("Aluno:",Con)
               FimSe
               Escreva("Nome de alune: ")
               Leia (N)
               Escreva("Pontos de ",N,": ")
               Leia (P)
               EscrevaL("---------------------------")
               C <- C + 1
               Con <- Con + 1
               Se (P > maior) então
               maior <- P
               nome <- N
               Fimse
      FimEnquanto
      Escreva ("O melhor aproveitamento foi de ",nome," com:",maior," Pontos!")
      
      
               

Fimalgoritmo