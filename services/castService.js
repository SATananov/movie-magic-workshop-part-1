const castRepository = require('../repositories/castRepository');

function normalizeCastData(castData) {
    return {
        name: castData.name?.trim(),
        age: Number(castData.age),
        born: castData.born?.trim(),
        nameInMovie: castData.nameInMovie?.trim(),
        imageUrl: castData.imageUrl?.trim(),
    };
}

async function getAll(filter) {
    return castRepository.getAll(filter);
}

async function create(castData) {
    const normalizedCastData = normalizeCastData(castData);
    return castRepository.create(normalizedCastData);
}

module.exports = {
    getAll,
    create,
};
