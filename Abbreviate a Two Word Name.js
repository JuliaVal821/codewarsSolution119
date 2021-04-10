https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

    function abbrevName(name){
        let space = name.indexOf(' ');
        return (name[0] + '.' + name[space + 1]).toUpperCase();
    }