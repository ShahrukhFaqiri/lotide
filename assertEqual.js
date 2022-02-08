const assertEqual = (actual, expected) => {

  if (actual !== expected) {
    console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
  } else {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);