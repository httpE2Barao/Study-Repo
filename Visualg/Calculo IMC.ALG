Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/09/2022
Var
// Seção de Declarações das variáveis 
   M, A, IMC: Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Massa (Kg): ")
   Leia (M)
   Escreva("Altura (m): ")
   Leia (A)
   IMC <- M / (A ^ 2)
   EscrevaL ("IMC: ", IMC:5:2)
   Se (IMC >= 18.5) e (IMC < 25) então
      Escreva ("Parabéns você está no seu peso ideal! :) " )
   Senão
      Escreva ("Você não está na faixa de peso ideal :)" )
   FimSe
Fimalgoritmo