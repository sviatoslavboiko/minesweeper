const cooardinator = (numbers) => {

  const cords = [];

  numbers.forEach(number => {
    const numberCords = {
      i: Math.floor(number / 10),
      j: number % 10,
    }
  
    cords.push(numberCords)
  })
  return cords;
}

export const cellsArrGenerator = () => {
  const I = 10, J = 10;
  
  const cells = new Array(I);

  for (let i = 0; i < J; i++) {
    cells[i] = new Array(J);
  }
  
  let numberGenerator = function(arr) {
    if (arr.length >= 12) return;
    let newNumber = Math.floor(Math.random() * 99);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };

  const numbersToCoords = [];

  numberGenerator(numbersToCoords)

  const coords = cooardinator(numbersToCoords);

  for (let i = 0; i < I; i++) {
    for (let j = 0; j < J; j++) {
      cells[i][j] = {
        title: "Hello I am cell",
        isBomb: false,
        number: null
      }
    }
  }

  for (let coord of coords) {
    const {i, j} = coord;
    cells[i][j].isBomb = true;
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if(!cells[i][j].isBomb) {
        let neighbourBombCount = 0
        for (let inI = -1; inI <= 1; inI++) {
          for (let inJ = -1; inJ <= 1; inJ++) {
            const Is = i + inI;
            const Js = j + inJ;
            if(Is >= 0 && Is < 10 && Js >= 0 && Js < 10) {
              if(cells[Is][Js].isBomb){
                neighbourBombCount++
              }
            }
          }
        }

        cells[i][j].number = neighbourBombCount;
      }
    }
  }

  return cells;
}