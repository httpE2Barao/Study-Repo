Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/09/2022
Var
// Se��o de Declara��es das vari�veis 
   M, A, IMC: Real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva("Massa (Kg): ")
   Leia (M)
   Escreva("Altura (m): ")
   Leia (A)
   IMC <- M / (A ^ 2)
   EscrevaL ("IMC: ", IMC:5:2)
   Se (IMC >= 18.5) e (IMC < 25) ent�o
      Escreva ("Parab�ns voc� est� no seu peso ideal! :) " )
   Sen�o
      Escreva ("Voc� n�o est� na faixa de peso ideal :)" )
   FimSe
Fimalgoritmo