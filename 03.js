const input = [
"....#..#.......#........#....#.",
"..##.#.#.#...................#.",
"....#.#.##..#....#......#......",
".........#.#......##.....#.....",
"..........#.###.##...##........",
"#....#.#.......##.....#..#.....",
"#...........#.#...#..#..##.##..",
"......##.............#.....#...",
"..##..........###..#.#..##.....",
"...........#........#......##..",
"..##...........##..............",
"..#......###.#.....#.#.#.......",
"..#..#..#..........#.#....#....",
".#.....##......................",
"...#...##..#...#.........#..##.",
".#......#..#..#...#......#.##..",
"..##.##.......#..#.....#..#...#",
"..............#..#..#...#......",
"...#...#....##.....#...#...#...",
"......................#...#....",
".......#......#...#..##...#.#..",
"##......#..#.....#....#.....#..",
"....#.#.##.#.#....#............",
"#.....##.............#.........",
"..........#...........#.#.....#",
"...#...##....#.#........#..#...",
"................#..#.##.##....#",
"......#...#...##...##....#.....",
"##....#..#..#...#..#...........",
"#..................#...#.#..#..",
"....##....##.#....#..#......#..",
".....#...........#.........##..",
"..#..............#.........#..#",
"......##....................#..",
"..#.....###...####...#...#.##..",
"#..#.#......#.....#.......#.#..",
"##.#.........######........#...",
"..#....###...#.#..............#",
".....#..............#.........#",
"....#......#..#.........#...#..",
".....###.....#.###.......###...",
"#.#..#.....#....##...#........#",
"..##....#..#.........#...#.#...",
"..#..##.............#....#.#.#.",
"..##.#..#.#.#.........##.......",
"#.#..#.........#..............#",
"#..#.........###.......#.#..#.#",
".............#...#....#......#.",
"..........#.#...##.###.....#.#.",
"..#.....#......................",
".......#......###.#.......#....",
"....#....#.........#...###.#.#.",
".#.............#............#..",
"....#..#.............#.#....#..",
"....#.....#...#...##.#.........",
"..#...#...#..................#.",
"........#....#.....#...........",
".....##.......#...#.#..#..#....",
"...#............#..#.#.........",
"......................#........",
"....#......#.....#.#....#......",
".....#..#.........#.........##.",
"...............#.....#....##...",
"...#.#.#...#..#...........#....",
".#....###......##...#.#.#.#....",
".....#...#....####....##.......",
"..#......#..#.....##.#...#.....",
"...#.##..#....#..##.....#......",
"..#......#...#...##.....#...#..",
"......#.....#........#.........",
"..#.#....#..............##....#",
"..#...#......##............#...",
".##.#.......#.......#......#..#",
"...##.##...#.....#.......#..#..",
"......##..#....#.......#.......",
".....#..#..#.#.....#.....#...##",
"##.#...#.#.#.....#...#.#.#.##.#",
"...................###...#..#..",
".#.....##.#......#........#....",
".##...##.#..........#...#....#.",
"......#..............#.#......#",
"...#.......#..#...........#....",
".###...#............##..#...##.",
"##..#.#.........#............#.",
"#...#.#......#.##...........#.#",
".#.#...#........#......##......",
"....#...#...#.....#...#....#...",
"...##...........##.........#...",
".........#...#..###............",
"..#........#...............#...",
".............#....#.#..........",
"........#......#.#.......#....#",
".................#....##.#.##..",
"..#...##........#..............",
"#..#........#...#....#.........",
"......#.#.....#.....#..###.#..#",
"....#............#...#.#.#.....",
"............#..........#...#...",
"..........#....##.#.........#..",
"..............#...#...#..#.....",
"#......#....#..##....#......##.",
"...#....#.................#....",
".#.##.............#...#....##..",
"....#..#.........#..#....#....#",
"..#.....##..#......#.#..#......",
"..#..#.....#........#...#..#..#",
".........##.#.##.#.......#....#",
"..#.......##.##...#.....#.....#",
".............##...#...........#",
"..#......#..#....#...#..#.##...",
"....#........#......#.........#",
".......#........#..#.#.#..##..#",
"..#......#...........##...#....",
".....#..#.#...#..............##",
".#..#......#......#........#..#",
"...##...............#....#.....",
".......#...#.......##..#.......",
".....#....#...#...#..#.....#.#.",
"...#.........#.....#...........",
"...#.....###....#....#...#...#.",
"#..#.....#.........#.........#.",
".................#.#.....#....#",
"...........#..........#..#.....",
"........#.#....#...#..#.....###",
"#............................#.",
"..##..#..#...##.........#......",
"......##....#.#...#.........#..",
"......#..##.#......#..#.....#..",
"...#.......##....#.#....#......",
".....#........#...#............",
"#.......#...#.........#......#.",
"......#......#....#..#.........",
"..#.#........#..#......#....#..",
".#..#.#..........##....###.#..#",
"...#....#.##..#...#....#.......",
"..#.....#......#.###.......#...",
"..............................#",
".....#..#...#...........#......",
".##...#....##....#.#.#.#....#.#",
".#...#....#...#........#.......",
"....#............#...##..#.....",
"....##..#....#....#.....#....##",
".............#..##.#.#.#.......",
"#.......#.#.#.......#..#..#....",
"#..#...........#.......###..#..",
".#..##.#.....#........#........",
"..#.#.......#............#..#..",
"...........#..#............##.#",
".....#.......#.....#..#.##.#..#",
"......#......##.....##.........",
"..##.#..#.#..#..#..............",
".....#.............##...#.#.##.",
".#......##.#..........#........",
"..#..#.........#.....#.#.#.....",
"..#.....#.......#.....#..#.....",
"#.#.#........#.#...#....#..#...",
".#.#.......#............#....#.",
"......#..................#....#",
".#...#...#.....#.#..........#..",
".#..##....####...........#.#...",
"..##.....#...#.#....#....#.....",
"#.....................#....#.#.",
"###..###.#.#...........#.....##",
"......#......#..........#......",
"...#......#.##.....#......###.#",
".............#..#.#...........#",
"..#.............#.#..#.....#...",
"...#...............#....##...##",
"........#.................#....",
"#..###.....#.......##.#......##",
"....#.#..............#.........",
"#..........#.....#..##...#.....",
"................#...#..#....#..",
"..#...#....##..........#.#.....",
"......#........##......#..#...#",
"...#....#..#.....#.......#...#.",
".#.....#..#...#..###....#......",
"....#.........#....#.#.#.....#.",
"#.#....#...#....#.....#..##....",
".......#..#..#..........#...#..",
"..#.#..#.....##.#.#............",
"..#....#.....#..##..#..#.#..#..",
"..#.##.#...........#...#..#....",
".........#........#...#........",
"..#.#.#.......##.........#.##..",
"#.#..........#.#...#..#......##",
".#..#....................#.#...",
".##......#................#...#",
"..##.#######......#....#.......",
"....#...##.#....#.#............",
".##....#...##.......#...#..#...",
"...........#...#...#...#..#....",
"#...#.....#.......#....#.....#.",
".............#.................",
"........#.#.......#...#.#.#....",
"..............#............#.#.",
"......#......##..#.......#....#",
"##...#..................#......",
".....#......###.....#.......#.#",
".....#.#............#.#........",
"..#.#..#............#....#.#...",
"##.#.###.#.#.#..#......#.......",
"...##........#..#.....#.#.#..#.",
"##......#.##.....####..#.......",
"............#...#..#...#..#....",
"...#..#................##.#..#.",
".#....#.#...........##.#.#...#.",
"####..#...........#.......###..",
".......#.................#.....",
".......#....#.......##....#....",
"..#.........#...#....#.........",
"..........#..#...#.#...##..#...",
"....##..........#.........##...",
"#.........##..#.#..#.......#...",
".#...........#....#...#...#.#..",
"....#..#.....#...##....#.#....#",
".#....#.....#......#..##.##.#.#",
"#......#..#.......##...........",
"...#..#...#.#.................#",
"......#.......##....##.#......#",
"....#....#.#.#.....#....#....#.",
"..#..........#.##...##..#......",
"...#..#........#....#.#..#....#",
"##.......#........#..........#.",
".#........#.......#...#..##...#",
"..#..#..##..#...........#...###",
"..#......#..........#..##......",
".#.....#..#.#...#...#.........#",
"#.#......##....................",
"#...#.....##...........#.......",
"........#...#....#.......##....",
"...#.##...#....#....#..#..#..#.",
"...#..#......##....#..#..##....",
"#...#..........#.#.............",
"##..#........##.....#.........#",
".....#......#.#...###..#.......",
"#..##.#..#.###...........##..#.",
".....#....#..........#.......#.",
"##.........##.#................",
"....#.........#............##..",
".......#........#......#..#..##",
".#...#...##..#....#..#.........",
".............#...#.#........#..",
"......#..#...#..#.###..#.......",
"........##.#..#.#..#..#........",
"#.##..#..#..........#...##..###",
".##...#............#.#...##..#.",
"................#....##.#...#..",
"#.................#..........#.",
"...#..#..#.....................",
"..#...##.#.#...................",
".....#...#.......#............#",
"..#..#.........#..##.#..#.#...#",
".....#.#.....#.#.......#.....#.",
"..................#..#....#.#..",
"..#.....###.##.......##....#.#.",
"..#......##.......#....##.#....",
"....#...................#..##.#",
".......#....#.##.#.......#....#",
"..#...#......#..#...###....#.#.",
"..#..#.#....#...........#.....#",
".....#..#..#.......#........#..",
"......#.##.#......#...........#",
"#...#....#.#..##.##..#..##.....",
"#...##....#.#...##........#....",
"..##............#.#.#..........",
"....#.....#.#..#.......#..#....",
"#..#.#.....#..#..##...#..##....",
"...##........#...........#...#.",
".####......#..##.........#.#...",
".......#.......................",
".................#....#..#.....",
".........##......###...........",
".##......#.#.#....#.#...#..###.",
"....#......##.###.#.#..#.......",
"..........#.......##......##..#",
"...........#.......#..##.......",
".....###..#..............##....",
"........##..#.#.#......#....#..",
"#....#.........................",
"...........#...............##..",
"......#.................#......",
".....#...#..##...##...#...#....",
"..........#.#...##.####......#.",
"..#.#.....##....#...........#..",
"..........#....#..#....##...#..",
".#.......#..##...#...#.....#...",
"...##....#.#......##...##....#.",
"#.......#.......#.##.#...#.#...",
"#...#..................#......#",
"..#.......#...............#..##",
"#.....#..................#....#",
".##.....#.....#......####.....#",
"..#........#...#.#........#...#",
"..##.....#....#...#...........#",
"..#..#.....##..#.##...#........",
"..........###..#....##.....#...",
"...#...#....#.##.#...#.#.......",
"..##......#.......#.......##...",
"............#............#.....",
".##....#.........#.............",
"....#....#....#........##...#.#",
".......##......................",
"..........#.#.................#",
"......##.#...#.........#.....#.",
"..#...#......#..#.............#",
"..........###.#..#.#...#..#..#.",
"#..#.#..#....##...#...#.#...#..",
".#........##...#......#.##.....",
"...###.#...##..............##..",
"#.#.#...#...#..#....#.#..#.....",
".#.#.##..#....#......#.#.......",
"...#..#.#....##...........#..#.",
".....##..##......#.#...........",
"......#.....#....####....#.....",
".#.#.#...#..#..#...........#...",
".....#......................#..",
".........#.........#.###.##....",
".....#......##..........#......",
"..#...........##...........#...",
"..............#.........#.....#",
"..#....#..#...#...##.#.........",
".#.#.#....#..........#........."];

let trees = 0;
for (let i in input) {
    let row = input[i];
    let cell = row[(i * 3) % row.length];
    if (cell == '#') {
        trees++;
    }
}
console.log(trees);

let treeCounts = [];
trees = 0;
for (let i in input) {
    let row = input[i];
    let cell = row[i % row.length];
    if (cell == '#') {
        trees++;
    }
}
treeCounts.push(trees);
trees = 0;
for (let i in input) {
    let row = input[i];
    let cell = row[(i * 3) % row.length];
    if (cell == '#') {
        trees++;
    }
}
treeCounts.push(trees);
trees = 0;
for (let i in input) {
    let row = input[i];
    let cell = row[(i * 5) % row.length];
    if (cell == '#') {
        trees++;
    }
}
treeCounts.push(trees);
trees = 0;
for (let i in input) {
    let row = input[i];
    let cell = row[(i * 7) % row.length];
    if (cell == '#') {
        trees++;
    }
}
treeCounts.push(trees);
trees = 0;
for (let i in input) {
    if (i % 2 == 1) {
        continue;
    }
    let row = input[i];
    let cell = row[(i / 2) % row.length];
    if (cell == '#') {
        trees++;
    }
}
treeCounts.push(trees);
console.log(treeCounts.reduce((acc, cur) => acc * cur, 1));