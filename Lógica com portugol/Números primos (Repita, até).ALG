Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/09/2022
Var
   C, N, D: inteiro

Inicio
   C <- 1
   D <- 0
   Escreva ("Digite um n�mero: ")
   Leia (N)
   Repita
         Escreva (C)
         Se (N % C = 0) entao
            D <- D + 1
         FimSe
         C <- C + 1
   At� (C > N)
   EscrevaL (" Ao todo existem", D, " valores divisiveis. ")
   Se (D > 2) entao
      EscrevaL (" O valor ", N, " n�o � primo!")
   senao
        EscrevaL ("O valor", N, " � primo!")
   FimSe

Fimalgoritmo