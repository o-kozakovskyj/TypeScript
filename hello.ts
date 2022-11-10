var isWinter: boolean = true;
isWinter = false;
console.log(isWinter);
const test = (au= 0, bu=0): number => {
  let re = au;
  let be = bu;
  return re + be;
}
console.log(test(1, 2));

function performDanceMove(arr): void {
  arr.forEach(el => {
    const [moveName, moveReps, hasFlair]  = el
    if (hasFlair) {
      console.log('I do it with flair!');
    } else {
      console.log(`I do the ${moveName} ${moveReps} times !`)
    };
  });
}

let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true],
];
performDanceMove(danceMoves);