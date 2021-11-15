var web3;

async function Connect(){
	await	window.web3.currentProvider.enable();
	web3=new web3(window.web3.currentProvider);
}
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
