export const price = (text) => {
    if(text)
        return "$" + (text.length * 1.5).toFixed(2) ;
    else
        return '$56.30';
};
