#include <stdio.h>

void main () {
    int y = 0;

    for (int x=0; x<101; x++) {
        y += x;
        printf("%d\n", y);
    }

    printf("A soma progressiva dos 100 numeros inteiros eh: %d\n", y);
}