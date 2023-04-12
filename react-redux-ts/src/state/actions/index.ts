import { ActionType } from '../types/actionTypes';

interface DepositAction {
    type: ActionType.DEPOSIT
    payload: number
  }
  
  interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
  }
  
  interface BankruptAction {
    type: ActionType.BANKRUPT
  }
  
  /*type Action = {
    type: string,
    payload?: number
  }*/
  
export  type Action = DepositAction | WithdrawAction | BankruptAction;

  