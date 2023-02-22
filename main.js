

let column_1 = [7,
    5,
    8,
    3,
    2,
    7,
    8,
    2,
    3,
    1,
    4,
    7,
    9,
    5,
    1,
    2,
    5,
    7,
    8,
    4,
    3,
    2,
    5,
    9,
    3,
    1,
    3,
    5,
    4,
    5];
let column_2 = [2,
    4,
    6,
    7,
    1,
    3,
    9,
    6,
    4,
    2,
    3,
    7,
    5,
    3,
    1,
    5,
    7,
    9,
    8,
    5,
    3,
    1,
    9,
    3,
    4,
    7,
    6,
    4,
    3,
    3];
let column_3 = [43,
    93,
    84,
    55,
    47,
    64,
    75,
    85,
    66,
    58,
    99,
    71,
    53,
    44,
    55,
    68,
    64,
    96,
    57,
    67,
    94,
    82,
    61,
    50,
    87,
    63,
    84,
    55,
    76,
    98];

let column_4 = [77,
    57,
    97,
    67,
    41,
    96,
    65,
    72,
    82,
    65,
    49,
    86,
    56,
    88,
    77,
    73,
    41,
    73,
    50,
    54,
    62,
    84,
    95,
    72,
    43,
    64,
    95,
    88,
    66,
    47];

let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;


for (let i = 0; i < column_1.length; i++) {
    sum_1 += column_1[i];
}
for (let i = 0; i < column_2.length; i++) {
    sum_2 += column_2[i];
}
for (let i = 0; i < column_3.length; i++) {
    sum_3 += column_3[i];
}
for (let i = 0; i < column_4.length; i++) {
    sum_4 += column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];

let total_score = 0;
for (let i = 0; i < sums.length; i++) {
    total_score += sums[i];
}

const results = {
    column_1,
    column_2,
    column_3,
    column_4,
    sums,
    total_score
}

console.log(results);