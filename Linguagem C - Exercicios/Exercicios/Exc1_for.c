#include <stdio.h>

int main() {
    int x, tam;
    char palavra[10];
    printf("Digite alguma coisa: ");
    fgets(palavra, sizeof(palavra), stdin);
    tam = strlen(palavra);

    for (x=0; x<=tam; x++) {
        printf("\n%s", palavra);
        printf("\n\n");
    }
    
    return 0;
}