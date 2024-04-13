#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void MostrarNaTela(char str[]) {
    printf(str);
}

void main () {
    char mensagem[12] = "Hello world";
    MostrarNaTela(mensagem);
}
