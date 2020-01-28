import {
  calculateIOF,
  calculateFinancedAmount,
  calculateInstallmentValue
} from ".";

describe("financed for 6 months", () => {
  describe("calculate iofs", () => {
    test("for R$500", () => {
      expect(calculateIOF(500, 6)).toEqual(5.59);
    });
    test("for R$1000", () => {
      expect(calculateIOF(1000, 6)).toEqual(11.18);
    });
    test("for R$1500", () => {
      expect(calculateIOF(1500, 6)).toEqual(16.77);
    });
  });

  describe("calculate financed amount", () => {
    test("for R$500", () => {
      expect(calculateFinancedAmount(500, 6)).toEqual(505.59);
    });

    test("for R$1000", () => {
      expect(calculateFinancedAmount(1000, 6)).toEqual(1011.18);
    });

    test("for R$1500", () => {
      expect(calculateFinancedAmount(1500, 6)).toEqual(1516.77);
    });
  });

  describe("calculate installment value", () => {
    test("for R$500", () => {
      expect(calculateInstallmentValue(500, 6)).toEqual(87.24);
    });

    test("for R$1000", () => {
      expect(calculateInstallmentValue(1000, 6)).toEqual(174.48);
    });

    test("for R$1500", () => {
      expect(calculateInstallmentValue(1500, 6)).toEqual(261.72);
    });
  });
});
