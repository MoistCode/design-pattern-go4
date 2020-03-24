class PrivateBankAccounts {
  add(bankAccountData) { /* ... */ }
  find(bankAccountNumber) { /* ... */ }
  getList() { /* ... */ }
}

class BankAccountProxy {
  constructor() {
    this.bankAccounts = new PrivateBankAccounts();
  }

  addBankAccount(bankAccountData) {
    return this.bankAccounts.add(bankAccountData);
  }

  findBankAccount(bankAccountNumber) {
    return this.bankAccounts.find(bankAccountNumber);
  }
}