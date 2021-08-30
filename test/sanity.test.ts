import test from "tape";


test("setup", function (t) {
  t.end();
});

test("Sanity test", (t) => {
    const expected = [1,2,3,4]
		const actual = [1,2,3,4]
		t.deepEqual(actual, expected);
    t.end();
});

test("teardown", function (t) {
  t.end();
});