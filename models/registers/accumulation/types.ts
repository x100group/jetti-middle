import { RegisterAccumulation } from "./register-accumulation";

export type RegisterAccumulationTypes =
    'Register.Accumulation.AccountablePersons' |
    'Register.Accumulation.Investment.Analytics' |
    'Register.Accumulation.PaymentBatch' |
    'Register.Accumulation.OrderPayment' |
    'Register.Accumulation.Acquiring' |
    'Register.Accumulation.AP' |
    'Register.Accumulation.AR' |
    'Register.Accumulation.Bank' |
    'Register.Accumulation.Balance' |
    'Register.Accumulation.Balance.RC' |
    'Register.Accumulation.Balance.Report' |
    'Register.Accumulation.Cash' |
    'Register.Accumulation.Cash.Transit' |
    'Register.Accumulation.EmployeeTimekeeping' |
    'Register.Accumulation.Inventory' |
    'Register.Accumulation.Intercompany' |
    'Register.Accumulation.Loan' |
    'Register.Accumulation.PL' |
    'Register.Accumulation.PL.RC' |
    'Register.Accumulation.Sales' |
    'Register.Accumulation.Salary' |
    'Register.Accumulation.Depreciation' |
    'Register.Accumulation.CashToPay' |
    'Register.Accumulation.StaffingTable' |
    'Register.Accumulation.BudgetItemTurnover';

interface IRegisteredRegisterAccumulation { type: RegisterAccumulationTypes; Class: typeof RegisterAccumulation; }