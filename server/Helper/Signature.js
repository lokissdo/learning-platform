
const ethUtil = require('ethereumjs-util');
var Signature ={
    verify(message, signature, address) {
      const messageHash = ethUtil.hashPersonalMessage(Buffer.from(message));
      const signatureBuffer = ethUtil.toBuffer(signature);
      const addressBuffer = ethUtil.toBuffer(address);
      
      const recoveredAddress = ethUtil.bufferToHex(ethUtil.pubToAddress(
        ethUtil.ecrecover(messageHash, signatureBuffer.slice(0, 32), signatureBuffer.slice(32, 64), 27)
      ));
      
      return address.toLowerCase() === recoveredAddress.toLowerCase();
    }
  } 

  module.exports = Signature