import React from 'react'


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function sortData(classifiedData) {
   return classifiedData.sort(function(a, b) {
        var nameA = a.buildingname.toUpperCase();
        var nameB = b.buildingname.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
}

function organizeData(data) {    
    const bubb = [], infiniteL = [], apple = [], sunnyE = [], other = [],
          santa = [], sunnyW = [];
     
    data.map( item => {
        switch(item.buildingzone) {
            case "Bubb / Results Way":
               bubb.push(item);
               break;
            case "Infinite Loop":
                infiniteL.push(item);
               break;
            case "Apple Park":
               apple.push(item);
               break;
            case "Sunnyvale East":
               sunnyE.push(item);
               break;
            case "Santa Clara/San Jose":
               santa.push(item);
               break;
            case "Other Bay Area":
                other.push(item);
                break;
            case "Sunnyvale West":
                sunnyW.push(item);
                break;
        }
    })
    return [
        sortData(apple),
        sortData(bubb),
        sortData(infiniteL),
        sortData(santa),
        sortData(sunnyE),
        sortData(sunnyW),
        sortData(other),
    ];    
}

export default function Table({value}) { 
    if(!isEmpty(value)) {
        return <TableSection arrays={organizeData(value.data.items)} />
    }
    return (
        <div className="loading">
            <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="Loading Buildings"/>
        </div>
    )
}

const TableSection = ({ arrays }) => {
    console.log("Chili: ", arrays);
    return (
        <>
            <h1>Index</h1>
            <section className="table-sections">
                {
                    arrays.map( (data, index) => (
                        <ul key={index} className="table-list-container">
                            <h3>{data[0].buildingzone}</h3>
                            {
                                data.map( item => (
                                    <li key={item.id} className="table-list">
                                        { 
                                           !item.black ?
                                           <a 
                                              href="https://applefacilities.review.blueriver.com"
                                              alt="Description">
                                                {item.buildingname}
                                           </a> :
                                           item.buildingname
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </section>
        </>
    )
}
