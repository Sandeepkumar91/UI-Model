import React, { Component } from 'react';
import HomeCard from './Cards/HomeCard';
import RainDayCard from './Cards/RainyDayCard';
import BigSpendCard from './Cards/BigSpendCard';
import ChildEduCard from './Cards/ChildEduCard';
import RetirementCard from './Cards/RetirementCard';
import InvestmentCard from './Cards/GeneralInvestingCard';
// import imageHome from './goalHome.png';
// import imageRain from '../src/assets/goalRain.png';
// import imageSpend from '../src/assets/goalBigSpend.png';
// import imageChildEdu from '../src/assets/goalEducation.png';
// import imageRetirement from '../src/assets/goalRetirement.png';
// import imageInvestment from '../src/assets/goalGeneralInvest.png';
import CardData from '../src/CardsData.json';

class GridView extends Component {
   
    render() {

        //  const cardList = () => {
             var cardDataArr = CardData['cards']
             var firstRowCards = cardDataArr.slice(0 , 3)
             var secondRowCards = cardDataArr.slice(3 , 6)
          
             
            //  return(
           
            //         <div>
            //           {
            //             firstRowCards.map(element => 
            //                 <HomeCard title={element.title} text={element.description} image={element.image} id={element.id} />
            //           )}  
                  
            //          </div>
            //  )
        //  }
        return (
            // <div class='container'>
            //     <div class="row">
            //         <div class="col-sm-4">
            //          { cardList() }
            //         </div>
            //     </div>
            // </div>
            <div class='grid'>
                    <div class="row">
                       {
                        firstRowCards.map(element => 
                            <HomeCard title={element.title} text={element.description} image={element.image} id={element.id} />
                      )}  
                   
                    {/* <div class="col-sm-4">
                        <HomeCard title='A Rainy Day' text='Suspendisse faucibus, augue nec euismod tem, dui neque molestie, laoreet faucibus ipsum.'  />
                    </div>
                    <div class="col-sm-4">
                        <HomeCard title='My Home' text='Suspendisse faucibus, augue nec euismod tem, dui neque molestie, laoreet faucibus ipsum.'  />
                    </div>  */}
                    </div>
                    <div class="row">
                       {
                        secondRowCards.map(element => 
                            <HomeCard title={element.title} text={element.description} image={element.image} id={element.id} />
                      )}  
                    
                    {/* <div class="col-sm-4">
                        <HomeCard title='My Home' text='Suspendisse faucibus, augue nec euismod tem, dui neque molestie, laoreet faucibus ipsum.'  />
                    </div>
                    <div class="col-sm-4"> 
                        <HomeCard title='My Home' text='Suspendisse faucibus, augue nec euismod tem, dui neque molestie, laoreet faucibus ipsum.' />
                    </div> */}
                    </div>
            </div>
        );
    }
}

export default GridView;