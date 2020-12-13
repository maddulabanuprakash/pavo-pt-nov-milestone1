self.vehicle = function () {
    return fake('{{vehicle.manufacturer}} {{vehicle.model}}');
  };

  self.vehicle.schema = {
    "description": "Generates a random vehicle.",
    "sampleResults": ["BMW Explorer", "Ford Camry", "Lamborghini Ranchero"]
  };
