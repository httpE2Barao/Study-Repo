Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 14/09/2022
Var
// Se��o de Declara��es das vari�veis 
   NA: real
   NO: real
   ME: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
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
   EscrevaL ("Sua m�dia: ", ME)
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