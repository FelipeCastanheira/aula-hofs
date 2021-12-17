const somar = (a, b) => {
  if (a && b) {
    return a + b;
  }
  return undefined;
};
const criarArray = (...newArray) => newArray;
const criarObjeto = (chave, valor) => ({[chave]: valor});

describe('Testes de exemplo da aula', () => {
  test('Testar a função somar', () => {
    expect(somar(1, 2)).toBe(3);
  })

  test('Verifica se a função somar quando passada sem parametro, retorna undefined', () =>{
    expect(somar()).toBeUndefined();
  })

  test('Testar se a soma funciona com número quebrado', () => {
    const arredondado = somar(0.5, 1.3);
    expect(arredondado).toBeCloseTo(1.8);
  })

  test('Testar a função criarArray', () => {
    expect(typeof criarArray).toBe('function');
    expect(Array.isArray(criarArray('eu', 'tu', 'ele'))).toBeTruthy();
  })

  test('Testar a função criarObjeto', () => {
    const arredondado = false;
    expect(Array.isArray(criarObjeto('nome', 'Thales'))).not.toBeTruthy();
    expect(typeof criarObjeto('nome', 'Thales')).toBe('object');
    // expect(Object.keys())
  })
})

// console.log(`a soma de 2 + 3 é ${somar(2, 3)}`);
// console.log(criarArray(1, 2, 3));
// console.log(criarObjeto('nomeCompleto', 'Thales Paiva'));
// console.log(Array.isArray(criarObjeto('nomeCompleto', 'Thales Paiva')));
// console.log(criarObjeto());

// const retornarTruthy = (name) => {
//   if (!name) {
//     return 'é falsy';
//   }
// };
// console.log(retornarTruthy(false));


