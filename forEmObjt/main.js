const objetoMpa = {
    "id": "b0db4199-9649-4678-ba9f-3b4143d36f15",
    "address": {
        "zipCode": "03943-010",
        "address": "Rua  trinta quarenta dez vinte trinta vinte seis cinco dois quatro oitenta Rua Cinco trint",
        "city": "São Paulo",
        "state": "SP",
        "complement": "",
        "district": "Jardim Tietês",
        "number": "812"
    },
    "owners": [
        "103630a6-2235-41e2-a5e0-c265adc1ee97"
    ],
    "parkingSpots": 1,
    "type": "HOUSE",
    "valueCents": 250000,
    "debits": null,
    "financed": null,
    "rented": null,
    "useMainProponentAddress": "",
    "highConversion": true,
    "maxLoanAmount": 125000
  }
  
  const payload = {
    address:     undefined,
    condoFeeDebitCents:    undefined,
    debits    :     undefined,
    files    :     undefined,
    financed    :     undefined,
    financedBank    :     undefined,
    financedDebitBalanceCents    :     undefined,
    highConversion    :     undefined,
    id    :     undefined,
    maxLoanAmount    :     undefined   ,
     owners    :     undefined,
    parkingSpots    :     undefined,
    parkingSpotsSplitedRegistry    :     undefined,
    propertyTaxDebitCents    :     undefined,
    rentMonthlyValueCents    :     undefined,
    rented    :     undefined,
    type    :     "HOUSE",
    useMainProponentAddress    :     undefined,
    valueCents    :     undefined
  
    }
  
  // const entregar = {
  //   address: {"zipCode": "812"}
  //     }
  
  //     const entregar2 = {
  //       "id": "812"
  //         }
  
  function updatePayload() {
    for (const i in objetoMpa) {
  
        if (payload.hasOwnProperty(i)) {
          if (payload[i] !== undefined) {
            return ({ [i]: payload[i] });
            // console.log(`O payload tem a mesma chave "${i}"`);
            // if (objetoMpa[i] === payload[i]) {
            //   console.log('Os valores são iguais.');
            // } else {
            //   console.log('Os valores são diferentes.');
            // }
          }
          } else {
            for (const chave in objetoMpa[i]) {
                if (payload.hasOwnProperty(chave)) {
                    return ({ [i]: { [chave]: payload[chave] } });
                    // console.log(`{${i}: {${chave}: ${payload[chave]}}}`);
                    // console.log(`2-O payload tem a mesma chave "${chave}"`);
                    // if (objetoMpa[i][chave] === payload[chave]) {
                    //   console.log('2-Os valores são iguais.');
                    // } else {
                    //   console.log('2-Os valores são diferentes.');
                    // }
                  }
                }
          } 
              
      }
  }
  
  const getFuncUpdatePayload = updatePayload();
  console.log(getFuncUpdatePayload);
  // console.log(payload);
    
  // payload e updateproperty
  
  
  
  
  
  
  
  
  
  // const tudo = Object.keys(objetoMpa);
  // const parte = Object.keys(payload);
  
  // for (const address of tudo) {
  //     console.log('value payloadAddress',payload[address]);
  //     console.log('///////////////');
  //     console.log(address)
  //     console.log('*****');
  //     console.log(objetoMpa[address]);
  //     if (parte.includes(address)) {
  //         console.log("FIND");
  
  //         if (tudo[address] === parte[address]) {
  //             console.log('sim')
  //             if (tudo[adrres])
  //             //console.log(objetoMpa[address]);
  //            //console.log(payload[address]);
  //         } else {
  //             console.log('vish')
  //         }
  //     }
  // }
  
  
  
  // for (const address in objetoMpa) {
  //     if (payload.hasOwnProperty(address)) {
  //       console.log(`O payload tem a mesma chave "${address}"`);
  //       if (objetoMpa[address] === payload[address]) {
  //         console.log('Os valores são iguais.');
  //       } else {
  //         console.log('Os valores são diferentes.');
  //       }
  //     } else {
  //       console.log(`O payload não tem a mesma chave "${address}"`);
  //     }
  //   }
  
  
  
  
  // function compareTwoCases() {
  //     if (objetoMpa.hasOwnProperty("address") && payload.hasOwnProperty("address")) {
  //         console.log(objetoMpa.address, payload.address);
  //     }
  
  //     if (objetoMpa.address === payload.address) {
  //         console.log("oi");
  //     } else {
  //         console.log("omg")
  //     }
  
  
  // }
  
  // compareTwoCases();
  
  
  // const tudo = Object.keys(objetoMpa);
  //   const parte = Object.keys(payload);
  
  //   for (const address of tudo) {
  //     if (parte.includes(address)) {
  //       console.log("FIND");
  //       console.log(objetoMpa[address]);   
  //       console.log(payload[address]);
  //     }}
  
  
  
  
  
  
  
  
  
  
  
  // const objetoMpa = {
  //     "id": "b0db4199-9649-4678-ba9f-3b4143d36f15",
  //     "address": {
  //         "zipCode": "03943-010",
  //         "address": "Rua  trinta quarenta dez vinte trinta vinte seis cinco dois quatro oitenta Rua Cinco trint",
  //         "city": "São Paulo",
  //         "state": "SP",
  //         "complement": "",
  //         "district": "Jardim Tietês",
  //         "number": "812"
  //     },
  //     "owners": [
  //         "103630a6-2235-41e2-a5e0-c265adc1ee97"
  //     ],
  //     "parkingSpots": 1,
  //     "type": "HOUSE",
  //     "valueCents": 250000,
  //     "debits": null,
  //     "financed": null,
  //     "rented": null,
  //     "useMainProponentAddress": "",
  //     "highConversion": true,
  //     "maxLoanAmount": 125000
  // }
  
  // const payload = {
  //     "zipCode": "03943-010"
  //     }
  
  
  // const entregar = {
  //     address: {"number": "812"}
  // }
  
  
  // function updatePayload() {
  //     for (const i in objetoMpa) {
  
  //         if (payload.hasOwnProperty(i)) {
  //             console.log(`O payload tem a mesma chave "${i}"`);
  //             if (objetoMpa[i] === payload[i]) {
  //               console.log('Os valores são iguais.');
  //             } else {
  //               console.log('Os valores são diferentes.');
  //             }
  //           } else {
  //             for (const chave in objetoMpa[i]) {
  //                 if (payload.hasOwnProperty(chave)) {
  //                   return (`{${i}: {${chave}: ${payload[chave]}}}`);
  //                     // console.log(`{${i}: {${chave}: ${payload[chave]}}}`);
  //                     // console.log(`2-O payload tem a mesma chave "${chave}"`);
  //                     // if (objetoMpa[i][chave] === payload[chave]) {
  //                     //   console.log('2-Os valores são iguais.');
  //                     // } else {
  //                     //   console.log('2-Os valores são diferentes.');
  //                     // }
  //                   }
  //                 }
  //           } 
                
  //       }
  // }
  
  // const getFuncUpdatePayload = updatePayload();
  
  // console.log(getFuncUpdatePayload);
      
  
  
  
  
  
  
  
  
  
  
  
  // const all = [];
  // const arrPayload = [];
  
  // function compareArrays() {
  //     all.push(objetoMpa);
  //     arrPayload.push(payload);
  // for (let objeto of all) {
  //     for (const chave in objeto) {
  //         if (objeto.hasOwnProperty(chave)) {
  //           if (typeof objeto[chave] === 'object' && objeto[chave] !== null) {
  //             // Se a chave contém um objeto, faça o que precisa ser feito com as chaves dentro do objeto
  //             for (const subchave in objeto[chave]) {
  //               if (objeto[chave].hasOwnProperty(subchave)) {
  //                 console.log(`Chave: ${subchave}, Valor: ${objeto[chave][subchave]}`);
  //               }
  //             }
  //           } else {
  //             // Se a chave não é um objeto, faça o que precisa ser feito com o valor simples
  //             console.log(`Chave: ${chave}, Valor: ${objeto[chave]}`);
  //           }
           
  //         }
  
  //         for (let i in arrPayload) {
  //             if (arrPayload[i] === all[objeto]) {
  //                 console.log("oi");
  //             }
  //             if (arrPayload[i] === objeto[chave]) {
  //                 console.log("ola");
  //             }
  //             if (arrPayload[i] === chave[subchave]) {
  //                 console.log("oopa");
  //             }
  //         }
          
  //       }
  // } 
  // }
  
  // compareArrays();
  
  
  
  
  
  
  
  
  
  
  // for (const i in objetoMpa) {
  //     if (payload.hasOwnProperty(i)) {
  //         console.log(`O payload tem a mesma chave "${i}"`);
  //         if (objetoMpa[i] === payload[i]) {
  //           console.log('Os valores são iguais.');
  //         } else {
  //           console.log('Os valores são diferentes.');
  //         }
  //       } 
  //     for (const chave in objetoMpa[i]) {
  //         if (payload.hasOwnProperty(chave)) {
  //             console.log(`2-O payload tem a mesma chave "${chave}"`);
  //             if (objetoMpa[i][chave] === payload[chave]) {
  //               console.log('2-Os valores são iguais.');
  //             } else {
  //               console.log('2-Os valores são diferentes.');
  //             }
  //           }
  //           for (const subchave in objetoMpa[i][chave]) {
  //             if (payload.hasOwnProperty(subchave)) {
  //                 console.log(`3-O payload3 tem a mesma chave "${subchave}"`);
  //                 if (objetoMpa[i][chave][subchave] === payload[subchave]) {
  //                   console.log('3-Os valores são iguais.');
  //                 } else {
  //                   console.log('3-Os valores são diferentes.');
  //                 }
  //               }
  //         }
  //     }
      
  //   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  // for (const address in objetoMpa) {
  //     if (payload.hasOwnProperty(address)) {
  //       console.log(`O payload tem a mesma chave "${address}"`);
  //       if (objetoMpa[address] === payload[address]) {
  //         console.log('Os valores são iguais.');
  //       } else {
  //         console.log('Os valores são diferentes.');
  //       }
  //     } else {
  //       console.log(`O payload não tem a mesma chave "${address}"`);
  //     }
  //   }
  
  
  
  
  // function compareTwoCases() {
  //     if (objetoMpa.hasOwnProperty("address") && payload.hasOwnProperty("address")) {
  //         console.log(objetoMpa.address, payload.address);
  //     }
  
  //     if (objetoMpa.address === payload.address) {
  //         console.log("oi");
  //     } else {
  //         console.log("omg")
  //     }
  
  
  // }
  
  // compareTwoCases();
  
  
  
  
  
  // const tudo = Object.keys(objetoMpa);
  // const parte = Object.keys(payload);
  
  // for (const address of tudo) {
  //     if (objetoMpa.hasOwnProperty("address")) {
  //         console.log(objetoMpa.address);
  
  //         if (objetoMpa[address] === payload[address]) {
  //             console.log(objetoMpa[address]);
  //             console.log(payload[address]);
  //         } else {
  //             console.log('vish')
  //         }
  //     }
  // }
  
  
  
  
  // function compareObjects(obj1, obj2) {
  //     const keys1 = Object.keys(obj1);
  //     const keys2 = Object.keys(obj2);
    
  //     if (keys1.length !== keys2.length) {
  //       return false;
  //     }
    
  //     for (const key of keys1) {
  //       if (!keys2.includes(key)) {
  //         return false;
  //       }
    
  //       const value1 = obj1[key];
  //       const value2 = obj2[key];
    
  //       if (typeof value1 === "object" && typeof value2 === "object") {
  //         if (!compareObjects(value1, value2)) {
  //           return false;
  //         }
  //       } else if (Array.isArray(value1) && Array.isArray(value2)) {
  //         if (!compareArrays(value1, value2)) {
  //           return false;
  //         }
  //       } else if (value1 !== value2) {
  //         return false;
  //       }
  //     }
    
  //     return true;
  //   }
    
  //   function compareArrays(arr1, arr2) {
  //     if (arr1.length !== arr2.length) {
  //       return false;
  //     }
    
  //     for (let i = 0; i < arr1.length; i++) {
  //       if (typeof arr1[i] === "object" && typeof arr2[i] === "object") {
  //         if (!compareObjects(arr1[i], arr2[i])) {
  //           return false;
  //         }
  //       } else if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
  //         if (!compareArrays(arr1[i], arr2[i])) {
  //           return false;
  //         }
  //       } else if (arr1[i] !== arr2[i]) {
  //         return false;
  //       }
  //     }
    
  //     return true;
  //   }
    
  
  
  
  //   const tudo = Object.keys(objetoMpa);
  //   const parte = Object.keys(payload);
    
  //   for (const address of tudo) {
  //     if (parte.includes(address)) {
  //       console.log("FIND");
  //       console.log(objetoMpa[address]);   
  //       console.log(payload[address]);
  //     }}