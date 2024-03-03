Algoritmo "semnome"

Var
   I, C, TF, TM: inteiro
   S, R: Caractere

Inicio
   TM <- 0
   TF <- 0

   Repita
         Escreval ("======================")
         Escreval ("--SELETOR DE PESSOAS--")
         Escreval ("======================")
         Escreva ("Qual o Sexo? [M/F] ")
         Leia (S)
         Escreva ("Qual a Idade? ")
         Leia (I)
         EscrevaL ("Qual a cor do cabelo? ")
         EscrevaL ("---------------------")
         EscrevaL ("[1] Preto")
         EscrevaL ("[2] Castanho")
         EscrevaL ("[3] Loiro")
         EscrevaL ("[4] Ruivo")
         Leia (C)
         Se (S = "M") e (I >= 18) e (C = 2) entao
            TM <- TM + 1
         Senao
              Se (S = "F") e (I >= 25) e (I < 30) e (C = 3) entao
                 TF <- TF + 1
              Fimse
         Fimse
         Escreva ("Vai querer continuar? [S/N] ")
         Leia (R)
         LimpaTela
ate (R = "N")
   EscrevaL ("======================")
   EscrevaL ("---RESULTADO FINAL----")
   EscrevaL ("======================")
   EscrevaL ("Total de homens com mais de 18 e cabelos castanhos: ", TM)
   EscrevaL ("Total de mulheres entre 25 e 30 e cabelos loiros: ", TF)
Fimalgoritmo