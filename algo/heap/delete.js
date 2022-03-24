function createHeap(heap) {
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

const heap = createHeap([2, 3, 4, 5, 6, 23, 89, 12, 45]);
console.log(heap);

// result
//   89
//   45,23
//   12,5:4,3
//   6,2

function deleteInHeap(heap) {
  const eleToBeDeleted = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.length = heap.length - 1;

  function heapify(index) {
    if (!heap[index] || !heap[index + 1]) return;
    if (heap[index + 1] > heap[index + 2]) {
      const temp = heap[index];
      heap[index] = heap[index + 1];
      heap[index + 1] = temp;
      heapify(index + 1);
    } else {
      const temp = heap[index];
      heap[index] = heap[index + 2];
      heap[index + 2] = temp;
      heapify(index + 2);
    }
  }

  heapify(0);

  return { eleToBeDeleted, heap };
}

const result = deleteInHeap(heap);

console.log(result.eleToBeDeleted, result.heap);
