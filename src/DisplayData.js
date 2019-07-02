import React, { Component } from 'react';
import ClientTable from './ClientTable';
import { Link , NavLink } from 'react-router-dom';
import data from './rmStub.json'

class DisplayData extends Component {

    //events
   
    render() {
        var relationshipManagersArr = data["data"]["relationshipManagers"]

        const respObjectData = () =>  {
            return (
                <table>
                    <tbody>
                            <tr>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                            </tr>
                            {relationshipManagersArr.map((data , index) => {
                                return (
                                    <tr>
                                        <td key={index}>{data['firstName']}</td>
                                        <td key={index}>{data['lastName']}</td>
                                    </tr>
                                )
                            })}
                    </tbody>  
                </table>
                )
            } 
      
        
        const commissionTable = () => {

                       
                        var obj = [];
                            for (var i = 0; i < relationshipManagersArr.length; i++) {
                     
                                let rm = relationshipManagersArr[i]  
                                let pastCommisions = rm["pastCommissions"]
                                var totalOfTotal = 0;
                                var totalCommision = 0;
                                var totalCommisionDPassive = 0;
                                var totalCommisionDThematic = 0;
                                var totalCommisionRPassive = 0;
                                var totalCommisionRThematic = 0;
                            
                                for (var j = 0; j < pastCommisions.length; j++) {
                                    let pastCommision = pastCommisions[j]
                                    if (pastCommision['groupByValue'] === "DIY Passive") {
                                        totalCommisionDPassive += pastCommision["commission"]
                                    } else if (pastCommision['groupByValue'] === "DIY Thematic")  {
                                        totalCommisionDThematic += pastCommision["commission"]
                                    } else if (pastCommision['groupByValue'] === "RM Passive") {
                                        totalCommisionRPassive += pastCommision["commission"]
                                    } else if (pastCommision['groupByValue'] === "RM Thematic") {
                                        totalCommisionRThematic += pastCommision["commission"]
                                    }
                                }
                            var totalCommision = totalCommisionDPassive + totalCommisionDThematic + totalCommisionRPassive + totalCommisionRThematic
                            let rmName = rm["firstName"]
                            obj.push ({
                                'Name': rmName,
                                'Total': totalCommision,
                                'DYThmaticTotal': totalCommisionDThematic,
                                'PassiveTotal': totalCommisionDPassive,
                                'RThematicTotal': totalCommisionRThematic,
                                'RPassiveTotal': totalCommisionRPassive
                            })

                            totalOfTotal += totalCommision

                    }



                    
                    return(
                        <table>
                            <tbody>
                                <tr>
                                    <th>RM Name</th>
                                    <th>Total commission</th>
                                    <th>DY Thematic Commision</th>
                                    <th>Passive Commission</th>
                                    <th>R Thematic Commission</th>
                                    <th>R Passive Commission</th>
                                </tr>

                            
                                {obj.map((data, index) => {
                                    
                                            return (
                                                <tr>
                                                <td key={index}>{data['Name']} </td>
                                                <td key={index}>{data['Total']}</td>
                                                <td key={index}>{data['DYThmaticTotal']}</td>
                                                <td key={index}>{data['PassiveTotal']}</td>
                                                <td key={index}>{data['RThematicTotal']}</td>
                                                <td key={index}>{data['RPassiveTotal']}</td>
                                                </tr>
                                            )
                                        })}
                            </tbody>
                        </table>
            
                    )} 


        const revenueTable = () => {

                            var rmanagers = []
                           
                            for(var i = 0; i < relationshipManagersArr.length; i++){
                                
                                let rm = relationshipManagersArr[i];
                                let pastRevenues = rm['pastRevenues'];
                                let totalRevenue = 0;
                                let totalRevenueINR = 0;
                                let totalRevenueUSD = 0;
                                   for (var j = 0; j < pastRevenues.length; j++) {
                                    let pastRevenue = pastRevenues[j];
                                    // if(pastRevenue['currency']['isoCode'] === 'SGD'){
                                    //     totalRevenueSGD += pastRevenue['revenue']
                                    // } else if(pastRevenue['currency']['isoCode'] === 'INR'){
                                    //     totalRevenueINR += pastRevenue['revenue']
                                    // } else if (pastRevenue['currency']['isoCode'] === 'USD'){
                                    //     totalRevenueUSD += pastRevenue['revenue']
                                    // }

                                    totalRevenue += pastRevenue['revenue']
                                    
                                }
                                    totalRevenueINR = totalRevenue * 51.08 
                                    totalRevenueINR=totalRevenueINR.toLocaleString();
                                    // var lastThree = totalRevenueINR.substring(totalRevenueINR.length-3);
                                    // var otherNumbers = totalRevenueINR.substring(0,totalRevenueINR.length-3);
                                    // if(otherNumbers !== '')
                                    //     lastThree = ',' + lastThree;
                                    // var totalRevenueINR = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + ' ' + 'INR';
                                    totalRevenueUSD = totalRevenue * 0.74 
                                    totalRevenueUSD = totalRevenueUSD.toLocaleString();
                                    let rmName = rm['firstName']
                                    rmanagers.push({
                                        'Name': rmName,
                                        'TotalRevenue': totalRevenue,
                                        'TotalRevenue-INR': totalRevenueINR,
                                        'TotalRevenue-USD': totalRevenueUSD,
                                    })
                            }
                        return (
                            <table>
                                <tbody>
                                    <tr>
                                        <th>RM Name</th>
                                        <th>Total Revenue</th>
                                        <th>TotalRevenue-INR</th>
                                        <th>TotalRevenue-USD</th>
                                    </tr>
                                    {rmanagers.map((data, index) => {
                                                return (
                                                    <tr>
                                                    <td key={index}>{data['Name']} </td>
                                                    <td key={index}>{data['TotalRevenue']}</td>
                                                    <td key={index}>{data['TotalRevenue-INR']}</td>
                                                    <td key={index}>{data['TotalRevenue-USD']}</td>
                                                    </tr>
                                                )
                                            })}
                                </tbody>
                            </table>
                
                        )
                    }

        const dataTable = () => {
             
            var managersTable = []
            for(var i =  0; i < relationshipManagersArr.length; i++) {
           
                let rm = relationshipManagersArr[i] 
    
                
                var targetRevenue = rm['targetRevenue']
                let pastRevenues = rm['pastRevenues']
                let rmCurrency = rm['currency']['isoCode']
                var totalRevenue = 0 
                var goalRevenue = 0
                for (var j = 0; j < pastRevenues.length; j++) {
                        let pastRevenue = pastRevenues[j];      
                        totalRevenue += pastRevenue['revenue'] 
                        }
                            
                            goalRevenue = targetRevenue - totalRevenue;
                            let rmName = rm['firstName']
                            totalRevenue = totalRevenue + ' ' + rmCurrency
                            targetRevenue = targetRevenue + ' ' + rmCurrency
                            goalRevenue = goalRevenue + ' ' + rmCurrency
                            managersTable.push({
                                'Name': rmName,
                                'TotalRevenue': totalRevenue ,
                                'TargetRevenue': targetRevenue ,
                                'GoalRevenue': goalRevenue       
                            })

                }
                   
            return(
                           <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total Revenue</th>
                                        <th>TargetRevenue</th>
                                        <th>GoalRevenue</th>
                                    </tr>
                                    {managersTable.map((data, index) => {
                                           
                                                return (
                                                    <tr>
                                                    <Link to={{pathname: '/clients', params: data.Name}} style={{ textDecoration: 'none', color: 'black' }}><td key={index} >{data['Name']}</td></Link>
                                                    <td key={index}>{data['TotalRevenue']}</td>
                                                    <td key={index}>{data['TargetRevenue']}</td>
                                                    <td key={index}>{data['GoalRevenue']}</td>
                                                    </tr>
                                                )
                                            })}
                                </tbody>
                            </table>
            )
        }





        return (
            <div>
                {/* <div>
                    { respObjectData() }
                </div>
                <div>
                    { commissionTable() }
                </div>
                <div>
                    { revenueTable() }
                </div> */}
                <div>
                    { dataTable() }
                </div>
                {/* <div>
                   <ClientTable />
                </div> */}
            </div>

        )
    }
}

export default DisplayData;