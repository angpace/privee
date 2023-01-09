import Smiling from './Smiling.jpg'

function FounderCard({EventHeader}){

    return (
        <div>
        <div className="founder_container"> 
            <div >
            <EventHeader>About our Founder</EventHeader>
            <p className='founder-content'>Angela Pace grew up having a love for food at an early age, working in bakeries in her hometown of Staten Island, New York. After graduating culinary school at The Culinary Institue of America in Hyde Park, she moved  back to NYC to pursue a career on the opening team at NYC Le Coucou under the mentorship of Daniel Skurnick. A year later, Angela relocated to Three Michelin Starred- Eleven Madison Park, which led to an apprenticeship with Chef Laura Cronin. Following the 2019 pandemic, Angela worked as a non-profit Rethink- as a volunteer provided meals to food insecure New-Yorkers. Shortly after, moving abroad to Switzerland and then London to work as Pastry Chef of Davies and Brook.</p>
             </div>
             <div>
            <img style={{width: "460px", borderRadius: "70px"}} alt="Strawberry Shortcake" src={Smiling}/>
            </div>
        </div>
        </div>
    )
}

export default FounderCard;