export const getCountOfPages = (total, limit) => {
    return Math.ceil(total / limit);
}

export const getClearID = (posts) => {
    return posts.length ? posts[posts.length - 1].id + 1 : 0;
}

export const getArrayByNumber = (number) => {
    const array = [];

    for (let i = 1; i <= number; i++)
        array.push(i);

    return array;
}

export const timer = async (time) => {
    await new Promise(resolve => setTimeout(resolve, time));
}
