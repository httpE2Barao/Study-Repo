Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 14/09/2022
Var
// Seção de Declarações das variáveis 
   NA: real
   NO: real
   ME: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("------------------")
   Escreva ("Escola do Carlinho")
   EscrevaL ("------------------")
   Escreva ("Primeira nota: ")
   leia (NA)
   Escreva ("Segunda nota: ")
   leia (NO)
   EscrevaL ("-----------------------------------------------")
   ME <- (NA + NO) / 2
   Leia (ME)
   EscrevaL ("Sua média: ", ME)
   Se ME < 5 entao
   Escreva ("Nota F")
      Senao
           Se (ME = 5 e ME < 6) entao
              EscrevaL ("Nota E")
           Senao
                Se (ME = 6 e ME < 7) entao
                   Escreva ("Nota D")
                Senao
                     Se (ME = 7 e ME < 8) entao
                        Escreva ("Nota C")
                     Senao
                          Se (ME = 8 e ME < 9)  entao
                             Escreva ("Nota B")
                          Senao
                               Se (ME > 9) entao
                          Escreva ("Nota A")
                          fimse
                     fimse
                fimse
           fimse
   fimSe
   

   

Fimalgoritmo