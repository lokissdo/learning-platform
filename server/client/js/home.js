// Connect to the Ethereum network using MetaMask's provider
const provider = new ethers.providers.Web3Provider(window.ethereum);
// const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
// Create a contract instance
const contract = new ethers.Contract(courseOpeningContractAddress, courseOpeningContractABI, provider);


const web3 = new Web3(window.ethereum);


const Transaction = {
  async getEventDataFromTransactionHash(transactionHash, formattedEvent, inputs) {
    try {
      let res = await fetch("/api/contract/transaction_hash", {
        method: "POST",
        body: JSON.stringify({
          transactionHash,
          formattedEvent,
          inputs
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        // Converting to JSON
        .then(response => response.json())
       return res
    } catch (error) {
      console.error(error);
      return error; // Rethrow the error to handle it at a higher level
    }
  },
  async sendTransaction(functionName, functionArguments, value = null) {
    try {
      // Request user's permission to connect to their MetaMask account
      await window.ethereum.enable();

      // Get the signer (user's Ethereum account)
      const signer = provider.getSigner();
      // Encode the transaction data
      // const txData = contract.interface.encodeFunctionData(functionName, functionArguments);
      const txData = contract.interface.encodeFunctionData(functionName, functionArguments);



      // Create the transaction object
      const tx = {
        to: courseOpeningContractAddress,
        data: txData,
        value: value
      };

      // Send the transaction and wait for the result
      const txResponse = await signer.sendTransaction(tx);
      console.log('Transaction sent:', txResponse);
      return txResponse
    } catch (error) {
      console.error('Error:', error);
      return false
    }
  }
}


function toggleForm(formId) {
  const forms = ["buyCourseForm", "fundContractForm", "withdrawContractForm", "openCourseForm", "earnCertificateForm", "viewDetailForm", "getTokenURIForm"];
  forms.forEach(form => {
    document.getElementById(form).style.display = "none";
  });
  document.getElementById(formId).style.display = "block";
}

async function buyCourse() {
  const courseID = document.getElementById('courseID').value;
  console.log('Buy Course:', courseID);
  console.log(contract)
  let courseIDs = await contract.getAllCourseIDs()
  console.log(courseIDs)


  const functionName = 'buyCourse'; // Replace with the name of the function you want to call
  const functionArguments = [courseID]; // Replace with the arguments for the function
  let result = await Transaction.sendTransaction(functionName, functionArguments, 20)
  if (!result) { 
    console.log('invalid transaction')
    return; 
  }
  console.log(result)
  const inputs = [
    { type: "string", name: "courseID" },
    { type: "address", name: "buyer", indexed: true },
    { type: "uint256", name: "value" },
    { type: "uint256", name: "tokenID" }
  ];
  setTimeout(async()=>{
    console.log(result.hash)
    let eventDataForMint = await Transaction.getEventDataFromTransactionHash(result.hash, "CourseBought(string,address,uint256,uint256)", inputs)
    console.log(eventDataForMint)
    eventDataForMint = eventDataForMint.res
  
  
    showMessage(`Successfull buy <ul> <li>Course id: ${eventDataForMint.courseID}</li>
  <li>Value: ${eventDataForMint.value}</li>
    <li>NFT TokenID  id: ${eventDataForMint.tokenID}</li></ul>`)
  
    closeModal();
  }, 10000);
  
}

function fundContract() {
  const amount = document.getElementById('amountFund').value;
  console.log('Fund CourseOpening Contract:', amount);
  closeModal();
}

function withdrawContract() {
  const amount = document.getElementById('amountWithdraw').value;
  console.log('Withdraw CourseOpening Contract:', amount);
  closeModal();
}

function openCourse() {
  const courseID = document.getElementById('courseIDOpen').value;
  window.location.href = `/course/view/${courseID}`;
  closeModal();
}

function earnCertificate() {
  const courseID = document.getElementById('courseIDEarn').value;
  window.location.href = `/course/earn_cert/${courseID}`;

  closeModal();
}

function viewCourseDetails() {
  const courseID = document.getElementById('courseIDDetail').value;
  console.log('View Course Details:', courseID);
  closeModal();
}

function getTokenURI() {
  const tokenID = document.getElementById('tokenID').value;
  const openingCourseNFT = document.getElementById('openingCourseNFT').checked;
  const certificateNFT = document.getElementById('certificateNFT').checked;
  console.log('Get Token URI:', tokenID, 'Opening Course NFT:', openingCourseNFT, 'Certificate NFT:', certificateNFT);
  closeModal();
}

function closeModal() {
  // hideMessage()
  const modal = new bootstrap.Modal(document.getElementById('myModal'));
  console.log(modal)
  modal.hide();
}
function showMessage(courseID) {
  const successMessage = document.getElementById('successMessage');
  const successCourseID = document.getElementById('successCourseID');
  successCourseID.innerHTML = courseID;
  successMessage.classList.remove('d-none');
  setTimeout(() => {
    hideMessage();
  }, 30000); // Adjust the delay time in milliseconds (3 seconds in this example)
}


function hideMessage() {
  const successMessage = document.getElementById('successMessage');
  successMessage.classList.add('d-none');
}