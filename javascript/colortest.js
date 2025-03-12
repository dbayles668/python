// function that takes two web color codes, expressed as six digit hexidecimal strings
// and averages the R, G, B elements
// and resturns a new six digit hexidecimal string

// first create function that will handle splitting of hex values and return integer
// comp = 1, 0substring vals 0-2, comp = 2, substring vals 2-4, comp = 3, substring vals 4-6
function HexSplit(h,comp) {
    let hex_comp = '';
    if(comp == 1){
        hex_comp = parseInt(h.substring(0, 2), 16);
    }else if(comp == 2){
        hex_comp = parseInt(h.substring(2, 4), 16);
    }else if(comp == 3){
        hex_comp = parseInt(h.substring(4, 6), 16);       
    }
    return hex_comp;
}

function AvgClr(clra, clrb){
//slice each input string into its components, and convert from string to integer
const int_one = [HexSplit(clra,1), HexSplit(clra,2), HexSplit(clra,3)];
const int_two = [HexSplit(clrb,1), HexSplit(clrb,2), HexSplit(clrb,3)];

//average color uses above variables, converts each component back to hexidecimal, and returns value
// in case of odd sum, round up to next integer

const avgcolor = [Math.round((int_one[0]+int_two[0])/2), Math.round((int_one[1]+int_two[1])/2), Math.round((int_one[2]+int_two[2])/2)];
return avgcolor[0].toString(16)+avgcolor[1].toString(16)+avgcolor[2].toString(16);
}

color_a = 'e6e6fa'; // lavender
color_b = '66cdaa'; // mediumaquamarine

console.log(AvgClr(color_a, color_b));