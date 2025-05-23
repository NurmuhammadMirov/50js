// we can use includes() method of an array to check if the given value is any of the 
// predefined values or not.

// Long and less readable
function isFourWheeler(vehicle) {
  return (
    vehicle === 'car' ||
    vehicle === 'truck' ||
    vehicle === 'bus'
  );
}

// short and more readable
function isFourWheeler(vehicle) {
  return ['car', 'truck', 'bus'].includes(vehicle);
}