const IOF_TAX = 0.0038;
const IOF_DAILY = 0.000041;
const INTEREST = 0.01;

export function calculateIOF(amount, months) {
  const iofMonth = IOF_TAX * amount;
  const iofDaily = IOF_DAILY * 30 * months * amount;
  return iofMonth + iofDaily;
}

export function calculateFinancedAmount(amount, months) {
  return amount + calculateIOF(amount, months);
}

export function calculateInstallmentValue(amount, months) {
  const financedAmount = calculateFinancedAmount(amount, months);
  const financeCoeficient = INTEREST / (1 - 1 / Math.pow(1 + INTEREST, months));
  return Math.round(financedAmount * financeCoeficient * 100) / 100;
}
