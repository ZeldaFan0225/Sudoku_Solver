const hard_solution = 
[
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

const hard = 
[
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

const easy = [
    [6, 8, 0, 4, 0, 3, 0, 5, 0],
    [4, 0, 2, 0, 5, 0, 3, 6, 8],
    [5, 9, 3, 6, 7, 8, 0, 0, 4],
    [0, 1, 7, 2, 8, 6, 9, 4, 5],
    [8, 0, 9, 5, 0, 4, 2, 0, 7],
    [2, 5, 4, 3, 9, 7, 8, 1, 0],
    [7, 0, 0, 8, 3, 1, 5, 9, 2],
    [9, 3, 5, 0, 6, 0, 4, 0, 1],
    [0, 2, 0, 9, 0, 5, 0, 7, 3]
]

const easy_solution = [
    [6, 8, 1, 4, 2, 3, 7, 5, 9],
    [4, 7, 2, 1, 5, 9, 3, 6, 8],
    [5, 9, 3, 6, 7, 8, 1, 2, 4],
    [3, 1, 7, 2, 8, 6, 9, 4, 5],
    [8, 6, 9, 5, 1, 4, 2, 3, 7],
    [2, 5, 4, 3, 9, 7, 8, 1, 6],
    [7, 4, 6, 8, 3, 1, 5, 9, 2],
    [9, 3, 5, 7, 6, 2, 4, 8, 1],
    [1, 2, 8, 9, 4, 5, 6, 7, 3]
]

const extreme = [
    [0, 0, 0, 8, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 3],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 7, 0, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 2, 0, 0, 3, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 7, 5],
    [0, 0, 3, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 6, 0, 0]
]

const extreme_solution = [
    [2, 3, 7, 8, 4, 1, 5, 6, 9],
    [1, 8, 6, 7, 9, 5, 2, 4, 3],
    [5, 9, 4, 3, 2, 6, 7, 1, 8],
    [3, 1, 5, 6, 7, 4, 8, 9, 2],
    [4, 6, 9, 5, 8, 2, 1, 3, 7],
    [7, 2, 8, 1, 3, 9, 4, 5, 6],
    [6, 4, 2, 9, 1, 8, 3, 7, 5],
    [8, 5, 3, 4, 6, 7, 9, 2, 1],
    [9, 7, 1, 2, 5, 3, 6, 8, 4]
]

const test4 = [
    [4, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 7, 0, 6, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 8],
    [0, 0, 0, 9, 5, 0, 0, 0, 0],
    [0, 8, 6, 0, 0, 0, 2, 0, 0],
    [0, 2, 0, 6, 0, 0, 7, 5, 0],
    [0, 0, 0, 0, 0, 0, 4, 7, 6],
    [0, 7, 0, 0, 4, 5, 0, 0, 0],
    [0, 0, 8, 0, 0, 9, 0, 0, 0]
]

const test4_solution = [
    [4, 5, 3, 8, 2, 6, 1, 9, 7],
    [8, 9, 2, 5, 7, 1, 6, 3, 4],
    [1, 6, 7, 4, 9, 3, 5, 2, 8],
    [7, 1, 4, 9, 5, 2, 8, 6, 3],
    [5, 8, 6, 1, 3, 7, 2, 4, 9],
    [3, 2, 9, 6, 8, 4, 7, 5, 1],
    [9, 3, 5, 2, 1, 8, 4, 7, 6],
    [6, 7, 1, 3, 4, 5, 9, 8, 2],
    [2, 4, 8, 7, 6, 9, 3, 1, 5]
]

function verifySudoku(matrix) {
    if(matrix.some(r => r.includes(0))) return false;
    const rows = matrix
    const blocks = matrix.map((_, i) => getBlock(matrix, i))
    const columns = matrix.map((r, i, a) => {
        return r.map((_, ii) => a[ii][i])
    }) 
    const total_count = Array.from({length: 9}, () => 0)
    rows.forEach(r => r.forEach(n => ++total_count[n-1]))
    if(!total_count.every(n => n === 9)) return false
    
    if(rows.some(r => !hasAllNumbers(r))) return false
    if(blocks.some(r => !hasAllNumbers(r))) return false
    if(columns.some(r => !hasAllNumbers(r))) return false
    
    return true
}

function getBlocks(matrix) {
    return Array.from({length: 9}).map((_, i) => getBlock(matrix, i))
}

function getBlock(matrix, block) {
    let x_index = [
        3 * (block%3),
        3 * (block%3 + 1)
    ]
    let y_index = Math.floor(block/3)*3
    return [...matrix[y_index].slice(...x_index),...matrix[y_index+1].slice(...x_index),...matrix[y_index+2].slice(...x_index)]
}

function getBlockFromCoordinate(matrix, x, y) {
    const large_x = Math.floor(x/3)
    const large_y = Math.floor(y/3)
    return getBlock(matrix, large_y*3+large_x)
}

function getRow(matrix, row) {
    return matrix[row]
}

function getColumns(matrix) {
    return Array.from({length: 9}).map((_, i) => getColumn(matrix, i))
}

function getColumn(matrix, column) {
    return matrix.map(m => m[column])
}

function getAllowedNumbers(...numbers_set) {
    const used = [...new Set(numbers_set.flat())]
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !used.includes(n))
}

function hasAllNumbers(numbers_set) {
    return (numbers_set.slice().sort().join(",") === "1,2,3,4,5,6,7,8,9")
}

function findOutPossibleNumbers(matrix, x, y, allow_branching) {
    if(matrix[y][x]) return matrix[y][x];
    x_inside_block = x%3
    y_inside_block = y%3
    const row = getRow(matrix, y)
    const column = getColumn(matrix, x)
    const block = getBlockFromCoordinate(matrix, x, y)
    const possible = getAllowedNumbers(row, column, block)
    if(possible.length === 1) return possible[0]
    else {
        const other_row_1 = getRow(matrix, y + (y_inside_block === 0 ? 1 : y_inside_block === 1 ? -1 : -2))
        const other_row_2 = getRow(matrix, y + (!y_inside_block ? 2 : y_inside_block === 1 ? 1 : -1))
        const other_col_1 = getColumn(matrix, x + (!x_inside_block ? 1 : x_inside_block === 1 ? -1 : -2))
        const other_col_2 = getColumn(matrix, x + (!x_inside_block ? 2 : x_inside_block === 1 ? 1 : -1))
        // add check that if only one other row has the number and the other cell is not null
        /*

         -> 0 1 0 <- check if this row has 7 or 6 and see that the middle one is blocked
            2 3 4
            5 9 8

        */
        const matches = possible.filter(num => {
            return [
                other_row_1,
                other_row_2,
                other_col_1,
                other_col_2
            ].every(s => s.includes(num))
        })
        if(allow_branching && possible.length > 1 && !matches.length) return possible
        return matches.length === 1 ? matches[0] : 0
    }
}

function solveSudoku(matrix) {
    let s = matrix.slice()
    let unsolved = true
    let history = []
    let allow_branching = false
    fuerstenberger:
    while(unsolved) {
        for(let y = 0; y < 9; ++y) { 
            for(let x = 0; x < 9; ++x) {
                if(!s[y][x]) {
                    const possible = findOutPossibleNumbers(s, x, y, allow_branching)
                    if(allow_branching && Array.isArray(possible)) {
                        for(let num of possible) {
                            const m = s.slice()
                            m[y][x] = num
                            const res = solveSudoku(m)
                            if(res) {
                                s = res;
                                break fuerstenberger;
                            }
                        }
                    }
                    else s[y][x] = possible
                }
            }
        }
        
        if(verifySudoku(s.slice())) {
            unsolved = false;
            break;
        }
        if(allow_branching) break;
        if(history.length >= 10 && printSudoku(s) === printSudoku(history[history.length-10])) allow_branching = true
        history.push(s.slice())
    }
    return verifySudoku(s) ? s : undefined
}

function printSudoku(matrix) {
    return matrix.map(r => r.join("")).join("\n")
}

//console.log(verifySudoku(test4_solution))
const solved = solveSudoku(extreme, true)

console.log(printSudoku(extreme_solution))
console.log(printSudoku(extreme))
console.log(printSudoku(extreme) === printSudoku(extreme_solution))


/*const solved = solveSudoku(hard)

console.log(printSudoku(hard_solution))
console.log(printSudoku(hard))
console.log(printSudoku(hard) === printSudoku(hard_solution))*/