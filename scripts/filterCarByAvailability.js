function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (car.available) {
      result.push(car);
    }
  }

  // ubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
