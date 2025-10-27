const formatBudget = (amount: number): string =>
  `$${Math.round(amount / 1000000)}M`;

export default formatBudget;
