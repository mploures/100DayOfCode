const escola= "Cod3r";

console.log(escola.charAt(4));

console.log(escola.charAt(5));


console.log(escola.charCodeAt(3));


console.log(escola.indexOf(3));



console.log(escola.substring(2,4));


console.log(escola.replace(3,"e"));

console.log("Ana,Maria,Pedro,Paulo".split(","));

const nome="Fernanda";

const template=`
    Ola
    ${nome}!
`

console.log(template)
console.log(typeof(template))

const up= texto=>texto.toUpperCase();

console.log(`Ei... ${up("cuidado")}`)