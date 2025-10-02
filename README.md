# 🔢 Verificador de Números

Um programa simples em JavaScript que verifica se um número é positivo, negativo ou nulo.

## ✨ Funcionalidades

- Interface interativa com o usuário
- Validação de entrada numérica
- Classificação em positivo, negativo ou nulo
- Execução direta no navegador

## 🚀 Como Usar

### Método 1: Clonando o repositório
```bash
git clone https://github.com/seu-usuario/verificador-numeros.git
```
Abra o arquivo index.html no seu navegador

### Método 2: Execução direta

Crie um arquivo HTML com o seguinte código:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Verificador de Números</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```
## 💻 Código

```javascript
let numero = prompt("Digite um número:");
numero = Number(numero);
if (numero > 0){
    alert('Número positivo');
}
else if (numero < 0){
    alert('Número negativo');
}
else{
    alert('Número nulo');
}
```

## 🎯 Exemplos de Funcionamento
* Entrada: "5" → Saída: "Número positivo"

* Entrada: "-3" → Saída: "Número negativo"

* Entrada: "0" → Saída: "Número nulo"

* Entrada: "12.5" → Saída: "Número positivo"

* Entrada: "-7.2" → Saída: "Número negativo"

## 🔍 Lógica do Programa
1. Coleta de dados: O programa solicita um número ao usuário via prompt()

2. Conversão: Converte a entrada string para tipo numérico usando Number()

3. Verificação:

* Se maior que 0 → "Número positivo"

* Se menor que 0 → "Número negativo"

* Se igual a 0 → "Número nulo"

## ⚠️ Tratamento de Entradas
* Entradas não numéricas são convertidas para NaN

* NaN é tratado como "Número nulo" pela lógica do programa

## 🛠️ Tecnologias Utilizadas
* HTML5

* JavaScript Vanilla

* Funções nativas do navegador (prompt, alert)

## 📁 Estrutura do Projeto
```
verificador-numeros/
│
├── index.html          # Arquivo HTML principal
├── app.js              # Arquivo JavaScript com a lógica
└── README.md           # Documentação
```
## 🤝 Contribuindo
* Contribuições são bem-vindas! Para contribuir:

* Faça um Fork do projeto

* Crie uma Branch para sua feature (git checkout -b feature/AmazingFeature)

* Commit suas mudanças (git commit -m 'Add some AmazingFeature')

* Push para a Branch (git push origin feature/AmazingFeature)

* Abra um Pull Request
