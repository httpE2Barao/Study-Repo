Algoritmo "Analizador Strings"

Var
   N: caractere
   C: inteiro
Inicio
      Escreva("Digite seu nome:")
      Leia(N)
      EscrevaL("Total de letras do seu nome: ", Compr(N))
      EscrevaL("Seu nome em maiusculas é ", Maiusc(N))
      EscrevaL("A primeira letra do seu nome é ", Copia(Maiusc(N),1,1))
      EscrevaL("A última letra do seu nome é ", Copia(Maiusc(N),Compr(N),1))
      EscrevaL("Seu nome tem a letra A na posição ", Pos("A",Maiusc(N)))
      Para C <- Compr(N) ate 1 passo -1 faça
           Escreva(Copia((N),C,1))
      FimPara
      


Fimalgoritmo