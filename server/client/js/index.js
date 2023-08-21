// Replace this with your contract's ABI and address




async function login() {
  try {
    // Request user's permission to connect to their MetaMask account
    await window.ethereum.enable();
    const [userAddress] = await window.ethereum.request({ method: 'eth_accounts' });

    if (userAddress) {
      console.log('User Address:', userAddress);

      const message = "WelcomeToMyWebsite";
      const signature  = await ethereum.request({ method: 'personal_sign', params: [userAddress, message] });

      console.log('Signature:', signature);
      await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          address: userAddress,
          message:message,
          signature:signature
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(res => {
          if(res.success == true){
            window.location.href = "/home";
          }
        });
    } else {
      console.log('No accounts found.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}