#include <stdio.h>

int main() {
    char procurarLetra[0], palavra[30];
    int x, t, ca;

    printf("Qual letra devo procurar?: ");
    gets(procurarLetra);
    
    printf("Informe uma palavra: ");
    gets(palavra);

    t = strlen(palavra);
    
    for (x=1; x<=t-1; x++) {
        if (palavra[x] == procurarLetra[0]) {
            ca++;
        }
    }
    printf("A sua palavra contem %d letras %s.", ca, procurarLetra);
}