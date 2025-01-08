const { db } = require('./data/index.ts'); // Importuj schemat tabeli i bazę danych
const {allergic} = require('./data/schema.ts')

// Pobierz wszystkich użytkowników
const getAllAllergic = async () => {
    return await db.select().from(allergic);
};

// Pobierz użytkownika po ID
const getAllergicById = async (id) => {
    const user = await db.select().from(allergic).where(allergic.id.eq(id)).limit(1);
    if (user.length === 0) {
        throw new Error('User not found');
    }
    return user[0];
};

// Utwórz nowego użytkownika
const createAllergic = async (email) => {
    const [newUser] = await db
        .insert(allergic)
        .values({ email })
        .returning('*');
    return newUser;
};

// Zaktualizuj użytkownika
const updateAllergic = async (id, updates) => {
    const [updatedUser] = await db
        .update(allergic)
        .set(updates)
        .where(allergic.id.eq(id))
        .returning('*');
    if (!updatedUser) {
        throw new Error('User not found');
    }
    return updatedUser;
};

// Usuń użytkownika
const deleteAllergic = async (id) => {
    const deletedCount = await db.delete(allergic).where(allergic.id.eq(id));
    if (deletedCount === 0) {
        throw new Error('User not found');
    }
};

module.exports = {
    getAllAllergic,
    getAllergicById,
    createAllergic,
    updateAllergic,
    deleteAllergic,
};
