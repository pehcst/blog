---
title: "Desvendando console.log"
datePublished: Fri Jul 07 2023 19:37:53 GMT+0000 (Coordinated Universal Time)
cuid: cljszb8br000a09lb5mjs24zj
slug: desvendando-consolelog
tags: tutorial, javascript, tips, frontend-development

---

Utilizar o console.log() é uma maneira muito básica de diagnosticar e solucionar problemas menores em seu código.  
  
Mas, você sabia que há mais no console do que apenas o log? Neste post, trago para vocês mais duas funcionalidade para imprimir o console em JS.

# **.log()**

O método console.log() é o mais simples e mais conhecido onde gera uma mensagem para o console de seu navegador. A mensagem pode ser uma única string ou pode ser qualquer um ou mais objetos JavaScript.

```javascript
const x = 'Teste'
console.log(x)
```

Neste exemplo temos como retorno 'Teste' no console, bem simples, né?

Também conseguimos incluir múltiplos valores no console, adicione uma string ao inicio para identificar o que está registrando.

```javascript
const x = 'Teste'
console.log("valor", x)
```

Mas e se tivermos diversos valores para mostrar?

```javascript
const x = 'Teste'
const y = 'Super teste'
const z = 'Mega teste'
```

Usaríamos console.log 3 vezes? não! podemos incluir todos em um só e ainda adicionamos uma string para identificar cada um deles.

```javascript
const x = 'Teste'
const y = 'Super teste'
const z = 'Mega teste'
console.log('x:' x, 'y:', y, 'z:', z)
```

Mas isso é muito trabalhoso, para facilitar é só envolver as variaveis dentro de uma chave que transformamos o log em objeto

```javascript
const x = 'Teste'
const y = 'Super teste'
const z = 'Mega teste'
console.log({x,y,z})
```

# **Variações de logs**

Existem outras variações para melhorar a visibilidade no console do navegador

```javascript
console.log('Console log simples')
console.info('Console de informações')
console.debug('Console para debug')
console.warn('Console de aviso')
console.error('Console de error')
```

Cada um desses tem uma interação diferente com o navegador, facilitando na hora do seu debug, adicionando estilos nos logs, por exemplo o warn aparecerá de cor **amarela** e o error de cor **vermelha**.

*Os estilos podem variar de acordo com o seu navegador*

# **.assert()**

Também podemos adicionar condicionais no console do navegador, utilizando o assert() nós conseguimos imprimir o log de acordo com o booleano da informação.

```javascript
const funciona = false
console.assert(funciona, 'Este é o motivo') 
```

Se o primeiro argumento do assert for false, a mensagem irá imprimir no console, mas se retornar true não irá aparecer.

# **.count()**

Sim, é possível realizar um contador dentro do console.

```javascript
for (i = 0; i < 10; i++) {
  console.count()
}
```

Cada interação com o loop irá imprimir um contador no console, nesse caso você verá default: 1 até default: 10, mas se executar o loop novamente ele irá continuar de onde parou, no caso 11 até 20.

Para resetar o contador, podemos usar o **console.countReset()** após o loop.

# **.Time()**

Além de contar, também conseguimos cronometrar, para isso basta utilizarmos o console.time() mas ele sozinho não poderá fazer muita coisa, para exemplificar vamos criar um pequeno intervalo, que simularia uma renderização utilizando o setTimeout(). Dentro desse tempo limite, vamos utilizar o console.timeEnd() para pegar o tempo final de execução.

```javascript
console.time()
setTimeout(() => {
  console.timeEnd()
}, 2000)
```

Executando esse trecho de código, podemos ver que no console irá mostrar o tempo que demorou para realizar a setTimeout().

Também podemos mostrar o tempo que está executando utilizando o timeLog para rotular um temporizador.

```javascript
console.time()
setTimeout(() => {
  console.timeLog()
}, 2000)
```

# **.Table()**

Quer ver seu log como uma tabela? é possível com o .table(), este é um dos usos para melhorar a visualização de alguns objetos.

```javascript
let devices = [
  {
    name: 'iPhone',
    brand: 'Apple'
  },
  {
    name: 'Galaxy',
    brand: 'Samsung'
  },
  {
    name: 'Pixel',
    brand: 'Google'
  },
  {
    name: 'Poco',
    brand: 'Huawei'
  }
]
console.table(devices);
```

![](https://images.prismic.io/pehcst/af4e16f5-9c69-402f-856d-5b8254a66b51_log.jpeg?auto=compress,format align="left")

# **.clear()**

Está tendo dificuldades de achar um log por conta de diversas renderizações que você está fazendo na página? Fica atualizando muito e acaba se perdendo no console do navegador?

Simples, adicione o console.clear() no inicio do seu código e sempre que renderizar você terá console novo.

Só não vá adicionar no final do seu código 🤪🤪🤪

bem, isso é tudo! Obrigado pela leitura e claro existem diversos outros logs que pode utilizar, desbrave a documentação: [https://developer.mozilla.org/pt-BR/docs/Web/API/Console](https://developer.mozilla.org/pt-BR/docs/Web/API/Console)