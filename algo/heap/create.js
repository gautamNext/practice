function createHeap() {
  const heap = [2, 3, 4, 5, 6, 23, 89, 12, 45];

  //   2
  //   3,4
  //   5,6:23,89
  //   12,45

  // result
  //   89
  //   45,23
  //   12,5:4,3
  //   6,2

  function insertInHeap(heap, index) {
    const temp = heap[index];
    let jindex = index;
    while (jindex > 0 && heap[parseInt(jindex / 2)] < temp) {
      heap[jindex] = heap[parseInt(jindex / 2)];
      jindex = parseInt(jindex / 2);
    }
    heap[jindex] = temp;
  }

  heap.forEach((_ele, index) => {
    insertInHeap(heap, index);
  });

  return heap;
}

const heap = createHeap();
console.log(heap);

// [2,3,4,5,6,23,89,12,45]
