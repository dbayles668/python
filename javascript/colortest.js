// function that takes two web color codes, expressed as six digit hexidecimal strings
// and averages the R, G, B elements
// and returns a new six digit hexidecimal string

//function that converts a string num of a given radix (eg, 16 for nexadecimal) to interger
function NumConvert(num,radix){
    convert = parseInt(num,radix);
    return convert;
}

// function that will handle splitting of hex values and return integer
// takes substring of h, length n, starting at comp
function HexSplit(h,n,comp) {
    hex_comp = h.substring(comp, comp+n);
    hex_conv = NumConvert(hex_comp,16)
    return hex_conv;
}

function AvgClr(clra, clrb){
//slice each input string into its components, and convert from string to integer

int_one = [HexSplit(clra,2,0), HexSplit(clra,2,2), HexSplit(clra,2,4)];
int_two = [HexSplit(clrb,2,0), HexSplit(clrb,2,2), HexSplit(clrb,2,4)];

//average color uses above variables, converts each component back to hexidecimal, and returns value
// in case of odd sum, round up to next integer

avgcolor = [Math.round((int_one[0]+int_two[0])/2), Math.round((int_one[1]+int_two[1])/2), Math.round((int_one[2]+int_two[2])/2)];
return avgcolor[0].toString(16)+avgcolor[1].toString(16)+avgcolor[2].toString(16);
}

color_a = 'df744c'; // lavender
color_b = '66cdaa'; // mediumaquamarine

document.write(AvgClr(color_a, color_b));