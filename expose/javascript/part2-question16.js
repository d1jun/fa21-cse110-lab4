let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let obj in statistics){
	if(obj > 'r' || statistics[obj] % 2 == 1){
    console.log(statistics[obj]);
  }
}
