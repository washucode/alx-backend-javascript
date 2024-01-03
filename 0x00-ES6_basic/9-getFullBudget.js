/* eslint-disable */
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    /* eslint-disable */
    getIncomeInDollars: (income) => `$${income}`,
    /* eslint-disable */
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
