import React from 'react';
import data from './rmStub.json'

const clientTable = (props) => { 

       
        var name = props.location.params
        console.log(name);
        var relationshipManagersArr = data["data"]["relationshipManagers"]
        var rmClients = []
        
        for (var i =0; i < relationshipManagersArr.length; i++){
            let rm = relationshipManagersArr[i]
            var rmName = rm['firstName']
            if(name === rmName) {
            let clients = rm['clients']['nodes']
            for (var j=0; j < clients.length; j++){
                var client = clients[j]
                var id = client['id']
                var firstName = client['firstName']
                var lastName = client['lastName']
                var displayName = client['displayName']
                var accountNumber = client['accountNumber']
                var lastAcitivityDate = client['lastActivityDate']
                var lastAcitivityDate = new Date(lastAcitivityDate)
                var lastAcitivityDate = lastAcitivityDate.toDateString()
                var segment = client['investorSegment']
                var portfolioPerformance = client['consolidatedPortfolio']['portfolioPerformance']
                var cashBalances = portfolioPerformance['cashBalances']
                var totalCashBalance = 0
                        for (var k=0; k < cashBalances.length; k++){
                                var cashBalance = cashBalances[k]
                                totalCashBalance += cashBalance['value']
                        }
                            var cumulativeCashBalances = portfolioPerformance['cumulativeCashBalance']
                            var cumulativeCashBalance = 0;
                            cumulativeCashBalance += cumulativeCashBalances['value']
                            var aums = portfolioPerformance['aums']
                            var totalAumValue = 0
                                for(var l=0; l < aums.length; l++) {
                                    var aum = aums[l]
                                    totalAumValue += aum['aum']
                                }
                                    var gains = portfolioPerformance['gain']
                                    var totalGain = 0
                                            for(var m=0; m < gains.length; m++) {
                                                var gain = gains[m]
                                                totalGain += gain['value']
                                            }

                rmClients.push({
                    'Id': id,
                    'FirstName': firstName,
                    'LastName': lastName,
                    'DisplayName': displayName,
                    'AccountNumber': accountNumber,
                    'LastActivityDate': lastAcitivityDate,
                    'InvestorSegment': segment,
                    'TotalCashBalance': totalCashBalance,
                    'CumulativeCashBalance': cumulativeCashBalance,
                    'Aum': totalAumValue,
                    "Gain": totalGain
                })

            }
        }
    }
                 return(

                       
                        <div className='flex-container'>
                                    {rmClients.map((data, index) => {
                                      
                                                return (
                                                <div className='client-card'>
                                                    <div className='body' >
                                                    <p>Id</p>
                                                    <p className='value'key={index}>{data['Id']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>FirstName</p>
                                                    <p className='value' key={index}>{data['FirstName']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>LastName</p>
                                                    <p className='value' key={index}>{data['LastName']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>DisplayName</p>
                                                    <p className='value' key={index}>{data['DisplayName']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>AccountNumber</p>
                                                    <p className='value' key={index}>{data['AccountNumber']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>LastActivityDate</p>
                                                    <p className='value' key={index}>{data['LastActivityDate']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>InvestorSegment</p>
                                                    <p className='value' key={index}>{data['InvestorSegment']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>TotalCashBalance</p>
                                                    <p className='value' key={index}>{data['TotalCashBalance']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>CumulativeCashBalance</p>
                                                    <p className='value' key={index}>{data['CumulativeCashBalance']}</p>
                                                    </div>

                                                    <div className='body'>
                                                    <p>AUM</p>
                                                    <p className='value' key={index}>{data['Aum']}</p>
                                                    </div>
                                                    
                                                    <div className='body'>
                                                    <p>Gain</p>
                                                    <p className='value' key={index}>{data['Gain']}</p>
                                                    {/* <p className='gain-arrow'></p> */}
                                                    </div>
                                                </div>
                                               
                                                )
                                            })}
                                    </div>
        
                    

                       
                        )
                    }

export default clientTable;

