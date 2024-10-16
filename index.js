const {readFileSync} = require("fs")

const {sudoku: hard, solution: hard_solution} = JSON.parse(readFileSync("sudokus/hard.json", "utf-8"))

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

        const matches = possible.filter(num => {
            const cond_1 = [
                other_row_1,
                other_row_2,
                other_col_1,
                other_col_2
            ].every(s => s.includes(num))
            const cond_2 = ((other_row_1.includes(num) && matrix[y + (!y_inside_block ? 2 : y_inside_block === 1 ? 1 : -1)][x]) || (other_row_2.includes(num) && matrix[y + (!y_inside_block ? 2 : y_inside_block === 1 ? 1 : -1)][x])) && ((other_col_1.includes(num) && matrix[y][x + (!x_inside_block ? 2 : x_inside_block === 1 ? 1 : -1)]) || (other_col_2.includes(num) && matrix[y][x + (!x_inside_block ? 2 : x_inside_block === 1 ? 1 : -1)]))
            return cond_1 || cond_2
        })
        if(allow_branching && possible.length > 1 && !matches.length) return possible
        return matches.length === 1 ? matches[0] : 0
    }
}

function solveSudoku(matrix) {
    let s = matrix.slice()
    let unsolved = true
    while(unsolved) {
        for(let y = 0; y < 9; ++y) { 
            for(let x = 0; x < 9; ++x) {
                if(!s[y][x]) {
                    const possible = findOutPossibleNumbers(s, x, y)
                    s[y][x] = possible
                }
            }
        }
        
        if(verifySudoku(s.slice())) {
            unsolved = false;
            break;
        }
    }
    return verifySudoku(s) ? s : undefined
}

function printSudoku(matrix) {
    return matrix.map(r => r.join("")).join("\n")
}

solveSudoku(hard)

console.log(printSudoku(hard_solution))
console.log(printSudoku(hard))
console.log(printSudoku(hard) === printSudoku(hard_solution))