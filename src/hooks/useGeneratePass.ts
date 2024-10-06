interface charAllowedInter {
    lowerAlpha: boolean, 
    upperAlpha: boolean, 
    num: boolean, 
    special: boolean
}

function generateRandomUpperAlpha() {
    return String.fromCharCode(65 + Math.floor(Math.random()*26));
}

function generateRandomLowerAlpha() {
    return String.fromCharCode(97 + Math.floor(Math.random()*26));
}

function generateRandomDigit() {
    return (Math.floor(Math.random()*10)).toString();
}

function generateRandomSpecial() {
    const candidates = [
        String.fromCharCode(33 + Math.floor(Math.random()*15)), 
        String.fromCharCode(58 + Math.floor(Math.random()*7)), 
        String.fromCharCode(91 + Math.floor(Math.random()*6)), 
        String.fromCharCode(123 + Math.floor(Math.random()*4)), 
    ];
    return candidates[Math.floor(Math.random()*4)];;
}

export default function useGeneratePass(
    length: number, 
    allowedChar: charAllowedInter, 
) {
    let retThis = "";
    let dieRoll = -1;
    for (let i=0; i<length; i++) {
        while (true) {
            dieRoll = Math.floor(Math.random()*4);
            if (dieRoll < 1 && allowedChar.upperAlpha) {
                retThis += generateRandomUpperAlpha();
                break;
            }
            else if (dieRoll < 2 && allowedChar.lowerAlpha) {
                retThis += generateRandomLowerAlpha();
                break;
            }
            else if (dieRoll < 3 && allowedChar.num) {
                retThis += generateRandomDigit();
                break;
            }
            else if (dieRoll < 4 && allowedChar.special) {
                retThis += generateRandomSpecial();
                break;
            }
        }
        
    }
    console.log("Password generated: " + retThis);
    return retThis;
}