const { runTest } = require("@playwright/test");

async function runMyTest() {
  await runTest({
    files: ["./myTest.spec.js"], // Array of test files to run
    report: false,
    headed: true,
  });
}

// Run the test multiple times
(async () => {
  for (let i = 0; i < 5; i++) {
    console.log(`Running test iteration ${i + 1}`);
    await runMyTest();
  }
  console.log("All test iterations completed");
})();
