const name = "Aki";

function introduction (name) {
    if (name === "Aki"){
    return `Hi, my name is ${name}.`
} else if (name === "Samip"){
    return `Hi, my name is ${name}.`;
}
}

const language = "Ember.js";

function introductionWithLanguage (name, language){
    if (name === "Aki"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
} else if (name === "Samip", language === "React"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
}

function introductionWithLanguageOptional (name = "Gracie", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}