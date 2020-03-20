// Old interface
class Shipping {
  request(zipStart, zipEnd, weight)  {
    // ...
    return '$49.75';
  }
}

// New interface
class AdvancedShipping() {
  login(credentials) { /* ... */ }
  setStart(start) { /* ... */ }
  setDestination(destination) { /* ... */ }
  calculate(weight) { return "$39.50" }
}

// Adapter interface
class ShippingAdapter {
  constructor(credentials) {
    this.shipping = new AdvancedShipping();
    this.shipping.login(credentials);
  }

  request(zipStart, zipEnd, weight) {
    this.shipping.setStart(zipStart);
    this.shipping.setDestination(zipEnd);

    return this.shipping.calculate(weight);
  }
}

const shipping = new Shipping();
const credentials = { token: "38247294" };
const adapter = new ShippingAdapter(credentials);

let cost = shipping.request("35452", "23422", "2 lbs");

cost = adapter.request("35452", "23422", "2 lbs");
