import { describe, it, expect } from "vitest";

import { optimize } from "./optimize";

describe("optimize", () => {
  it("Match snapshot", () => {
    expect(
      optimize(`.i 4
.o 7
.ilb A B C D
.ob a b c d e f g
.p 16
0000 1111110
0001 0110000
0010 1101101
0011 1111001
0100 0110011
0101 1011011
0110 1011111
0111 1110000
1000 1111111
1001 1111011
1010 -------
1011 -------
1100 -------
1101 -------
1110 -------
1111 -------
.e`),
    ).toMatchSnapshot();
  });
});
