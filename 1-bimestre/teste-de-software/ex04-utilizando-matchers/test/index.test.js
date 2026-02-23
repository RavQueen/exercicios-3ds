test("5 é maior que 3", () => {
    expect(5).toBeGreaterThan(3)
})

test("A frase 'Teste de Software contém a palavra 'Software'", () => {
    const frase = "Teste de Software"
    expect(frase).toContain('Software')
})

test("O aluno foi apovado", () => {
    const aluno = { aprovado: true }
    expect(aluno.aprovado).toBeTruthy()
})