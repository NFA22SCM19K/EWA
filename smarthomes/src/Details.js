import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";

export default function Details(item){

  const detailsItem = item.item
  console.log(detailsItem);

  return (
    <>
    <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id = 'content'>

         
          <h1> NAME: {detailsItem.Name}</h1>
          <img src={'images/' + detailsItem.Type + '/' + detailsItem.Image} alt =''></img>
          <h1>Description:</h1>
          <h1> {detailsItem.Desc}</h1>
          <h1>Price: </h1>
          <h1>{detailsItem.Price}</h1>

        </div>
      </div>
    </>
  )
}