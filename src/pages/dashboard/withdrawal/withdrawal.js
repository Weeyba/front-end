import React from 'react';
import { Main,Withdraw, } from "./withdrawal.styled";




export default function withdrawal() {
 
    // const dropdown = document.getElementById('dropdown');
    // const selectedOption = document.getElementById('selectedOption');

    // dropdown.addEventListener('change', function() {
    //   selectedOption.textContent = dropdown.value;
    // });

  return (
   <Main>
   <h1> Withdrawal Portal</h1>
   
    <form >
    
    <label for="Withdrawal">Withdrawal For:</label>
    <select id="dropdown" name="dropdown">
      <option value="option1">Choose an option:</option>
      <option value="option1">Affiliate Withdrawal</option>
      <option value="option2">Activities Withdrawal</option>
    </select>


    <p>Amount</p>
    <input type="number" placeholder="Min 10,000" />

    <p>Bank Name</p>
    <input type="text" />


    <p>Account Number</p>
     <input type="text" />

     <p>Account Name</p>
     <input type="text" />

     <Withdraw type="button" id="button" onsubmit="submit()"> withdraw</Withdraw>
    </form>
   
    </Main>
    
  );
}
