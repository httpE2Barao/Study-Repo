#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main() {

    char hello[] = "Hello World";
    printf("from main: %d\n", &hello);

    char *hello2 = malloc(sizeof(hello));
    strcpy(hello2, hello);
    printf("hello2: %x\n", hello2);

}