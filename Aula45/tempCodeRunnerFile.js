try {
    // console.log(a);
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    //! Parte do codigo quando nao ha erros

    try {
        console.log(b);
    } catch(e) {
        console.log('Deu erro');
    } finally {
        console.log('Tambem sou finally')
    }
} catch (e) {
    console.log('Tratando o erro');
    //! Parte do codigo quando ha erros
} finally {
    console.log('FINALLY: Eu sempre sou executado');
    //! Sempre
}