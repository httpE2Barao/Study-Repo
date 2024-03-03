Algoritmo "oi"

Var
   CouS: vetor[1..10] de caractere
   C,Tot: inteiro
   Nome: caractere
Função Alto: inteiro
Inicio
      tot <- tot + 1
      CouS[tot] <- nome
      retorne tot
Fimfunção
Inicio
Tot:=0
      Para C := 1 ate 5 faça
           Escreva("Digite seu nome: ")
           Leia(Nome)
           Se (copia(maiusc(Nome),1,1) = "S") entao
              Tot := Alto()
           Senão
                Se (copia(maiusc(Nome),1,1) = "C") entao
                   Tot := Alto()
                Fimse
           Fimse
      Fimpara
      Limpatela
      EscrevaL("LISTAGEM FINAL")
      Para C := 1 ate tot faça
           EscrevaL(cous[C])
      Fimpara
Fimalgoritmo