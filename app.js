const arr = [1,2,3,4,5,6,7,8,9,10,11]

const myFunc = (element) => {
    console.log(element);
};
// collback bu funksiyani parametrida funkisya kelishi

arr.forEach(myFunc());
// funksiya parametrida funskiya kelsa va return da funskiya qaytarsa high orter funstion boladi
