// Initial setup
const canvas = document.getElementById("solar-system");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Planet colors and sizes
const planets = [
  {
    name: "Mercury",
    radius: 2,
    orbitRadius: 40,
    speed: 0.05,
    color: "#b0b0b0",
  },
  { name: "Venus", radius: 4, orbitRadius: 70, speed: 0.03, color: "#ffa500" },
  { name: "Earth", radius: 5, orbitRadius: 100, speed: 0.02, color: "#00f" },
  { name: "Mars", radius: 3, orbitRadius: 140, speed: 0.015, color: "#ff0000" },
  {
    name: "Jupiter",
    radius: 10,
    orbitRadius: 200,
    speed: 0.01,
    color: "#ffcc99",
  },
  {
    name: "Saturn",
    radius: 8,
    orbitRadius: 250,
    speed: 0.008,
    color: "#ffcc00",
  },
  {
    name: "Uranus",
    radius: 7,
    orbitRadius: 300,
    speed: 0.006,
    color: "#00ccff",
  },
  {
    name: "Neptune",
    radius: 7,
    orbitRadius: 350,
    speed: 0.004,
    color: "#3333ff",
  },
];

// Initialize angular position for each planet
planets.forEach((planet) => (planet.angle = Math.random() * Math.PI * 2));

// Draw planets and sun
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the sun
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 15, 0, Math.PI * 2);
  ctx.fillStyle = "#ffff00";
  ctx.fill();

  // Draw planets
  planets.forEach((planet) => {
    // Calculate the position of the planet in its orbit
    const x = canvas.width / 2 + planet.orbitRadius * Math.cos(planet.angle);
    const y = canvas.height / 2 + planet.orbitRadius * Math.sin(planet.angle);

    // Draw planet's orbit
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      planet.orbitRadius,
      0,
      Math.PI * 2
    );
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.stroke();

    // Draw the planet
    ctx.beginPath();
    ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
    ctx.fillStyle = planet.color;
    ctx.fill();

    // Update angle for animation movement
    planet.angle += planet.speed;
  });

  // Repeat the animation
  requestAnimationFrame(draw);
}

// Start the animation
draw();
