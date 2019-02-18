function isValid(rows) {
  // Check validity
  if (!(Array.isArray(rows) && rows.length === 9)) {
    return false;
  }

  const columns = [];
  const boxes = [];

  // Extract columns
  for (let i = 0; rows[i]; i++) {
    for (let j = 0, col; col = rows[i][j]; j++) {
      if (!Array.isArray(columns[j])) {
        columns[j] = columns[j] || [];
      }
      columns[j][i] = col;
    }
  }

  // Extract boxes
  let box = [];
  for (let xOffset = 0; xOffset < 9; xOffset += 3) {
    for (let yOffset = 0; yOffset < 9; yOffset += 3) {
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          box.push(rows[x + xOffset][y + yOffset]);
        }
      }
      boxes.push(box);
      box = [];
    }
  }

  // Apply check on each
  return (
    rows.every(isValidSet) &&
    columns.every(isValidSet) &&
    boxes.every(isValidSet)
  );
}

// Check if a array is 1..9 only or not.
function isValidSet(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  const t = 45; // 10*9/2 = 45
  const s = array.reduce((a, b) => a + b, 0)
  return t === s;
};

module.exports = {
  isValid
};
