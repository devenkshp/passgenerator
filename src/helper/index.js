export default function generatePass(length, include) {
    const charsetToInclude = include.length;
    let strength = 0;

    if (charsetToInclude == 0) return {
        password: "",
        strength: 0
    };

    const charset = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]ˆ_`{|}˜"
    }

    
    let chooseFrom = [];
    
    for (let i = 0; i < charsetToInclude; i++) {
        chooseFrom.push(charset[include[i]]);
    }

    const totalCharsetLength = 94; // 26 upper + 26 lower + 10 numbers + 32 symbols
    const chooseFromCharsetLength = chooseFrom.join("").length;
    
    // Calculate password strength
    const pwEntropy = Math.log2(Math.pow(chooseFromCharsetLength, length));
    const pwStrength  = pwEntropy < 36 ? 0 : pwEntropy < 60 ? 1 : pwEntropy < 120 ? 2 : 3;
    
    let password = "";

    while (length > 0) {
        for (let i = 0; i < chooseFrom.length; i++) {
            if (length > 0) password += getRandomChar(chooseFrom[i]);
            length--;
        }
    }


    /*
     */
    

    
    return {
        password: shuffle(password),
        strength: pwStrength
    };
}

function getRandomChar(string) {
    const length = string.length - 1;
    return string[Math.round(Math.random() * length)];
}

function shuffle(string) {
    const array = string.split("");
    var copy = [], n = array.length, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        copy.push(array.splice(i, 1)[0]);
    }

    return copy.join("");
}




