Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 22/09/2022
Var
Mat:vetor[1..3,1..3] de inteiro
l,c:inteiro
Inicio
      Para l <- 1 ate 3 faça
           Para c <- 1 ate 3 faça
                Escreva("Escreva o valor da posição [",l," ][",c," ]:")
                Leia(mat[l,c])
           Fimpara
      Fimpara

      Para l <- 1 ate 3 faça
           Para c <- 1 ate 3 faça
                Se(mat[l,c]%2=0) então
                   Escreva("{",mat[l,c]:2,"}")
                Senao
                   Escreva(mat[l,c]:4)
                Fimse

           Fimpara
           EscrevaL()
      Fimpara
Fimalgoritmo