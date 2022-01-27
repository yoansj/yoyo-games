/**
 * Found here https://dev.to/jonrandy/comment/1l98l
 * @param min Inclusive
 * @param max Inclusive
 * @returns nb
 */
const getRandomInt = (min: number, max: number) => ~~(Math.random() * (max - min + 1) + min);

export default getRandomInt;
