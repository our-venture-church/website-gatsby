export const pluralizeString = (word, number, suffix = 's') =>
    number === 1 ? word : word + suffix;
