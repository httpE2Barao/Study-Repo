Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/09/2022
Var
   C, N, D: inteiro

Inicio
   C <- 1
   D <- 0
   Escreva ("Digite um número: ")
   Leia (N)
   Repita
         Escreva (C)
         Se (N % C = 0) entao
            D <- D + 1
         FimSe
         C <- C + 1
   Até (C > N)
   EscrevaL (" Ao todo existem", D, " valores divisiveis. ")
   Se (D > 2) entao
      EscrevaL (" O valor ", N, " não é primo!")
   senao
        EscrevaL ("O valor", N, " é primo!")
   FimSe

Fimalgoritmo