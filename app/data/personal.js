import fs from 'fs/promises';

export async function getStoredPersonal() {
    const rawFileContent = await fs.readFile('personal.json', { encoding: 'utf-8'});
    const data = JSON.parse(rawFileContent);
    const getStoredPersonal = data.personal ?? [];
    return storedPersonal;
}

export function storedPersonal(personal){
    return fs.writeFile('personal.json', JSON.stringify({personal: personal || []}));
}