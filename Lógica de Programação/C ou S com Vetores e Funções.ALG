Algoritmo "oi"

Var
   CouS: vetor[1..10] de caractere
   C,Tot: inteiro
   Nome: caractere
Fun��o Alto: inteiro
Inicio
      tot <- tot + 1
      CouS[tot] <- nome
      retorne tot
Fimfun��o
Inicio
Tot:=0
      Para C := 1 ate 5 fa�a
           Escreva("Digite seu nome: ")
           Leia(Nome)
           Se (copia(maiusc(Nome),1,1) = "S") entao
              Tot := Alto()
           Sen�o
                Se (copia(maiusc(Nome),1,1) = "C") entao
                   Tot := Alto()
                Fimse
           Fimse
      Fimpara
      Limpatela
      EscrevaL("LISTAGEM FINAL")
      Para C := 1 ate tot fa�a
           EscrevaL(cous[C])
      Fimpara
Fimalgoritmo