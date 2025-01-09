let arraypalabras: string[] = ['JavaScript', 'TypeScript', 'Node', 'React', 'Angular'];

function findIndexWord(words: string[], word: string): string {
    if (words.indexOf(word) !== -1) {
        return words.indexOf(word).toString();
    } else {
        return "la palabra no está";
    }
}

console.log(findIndexWord(arraypalabras, "React"));