#include <stdio.h>

int main() {
    float Celsius, Fahrenheit;

    printf("Digite os graus em Celsius: ");
    scanf("%f", &Celsius); // Read Celsius as a float

    // Calculate Fahrenheit using the conversion formula
    Fahrenheit = (Celsius * 9.0f / 5.0f) + 32.0f;

    printf("Graus Fahrenheit: %.2f\n", Fahrenheit); // Print Fahrenheit with 2 decimal places

    return 0;
}