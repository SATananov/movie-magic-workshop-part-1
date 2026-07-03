const prisma = require('../lib/prisma');

async function getAll(filter = {}) {
    const excludeIds = Array.isArray(filter.excludeIds) ? filter.excludeIds : [];

    return prisma.cast.findMany({
        where: {
            id: {
                notIn: excludeIds,
            },
        },
        orderBy: {
            id: 'desc',
        },
    });
}

async function create(castData) {
    return prisma.cast.create({
        data: castData,
    });
}

module.exports = {
    getAll,
    create,
};
