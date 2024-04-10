#include <stdio.h>

int main() {
    int x, y; 
    int matx[5][2];

    for (x = 0; x <= 4; x++) {
        for (y = 0; y < 2; y++) {
            do {
                printf("Insira um número par para a posição %d, %d: ", x, y);
                scanf("%d", &matx[x][y]);

                if (matx[x][y] % 2 != 0) {
                    printf("Número ímpar! Tente novamente.\n");
                }
            } while (matx[x][y] % 2 != 0);
        }
    }
    
    for (x = 0; x <= 4; x++) {
        for (y = 0; y < 2; y++) {
            printf("%d ", matx[x][y]);
            if (y == 1) {
                printf("\n");
            }
        }
    }

    return 0;
}
