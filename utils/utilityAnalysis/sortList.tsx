export const sortList = (list: any[], desc: boolean = true) => {
    list.sort((a, b) => {
        return desc ? b.score - a.score : a.score - b.score;
    });
    return list;
};

