// the sphere Volume function calculates the volume of a sphere given its radius. It uses
// the formula (4/3) * p * r^3, where r is the radius of the sphere.

const sphereVolume = (radius) => (4/3) * Math.PI * radius ** 3;
console.log(sphereVolume(5)); // 523.5987755982989