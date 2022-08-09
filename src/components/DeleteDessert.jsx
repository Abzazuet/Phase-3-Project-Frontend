import DisplayDessertsDropdown from "./DisplayDessertsDropdown";
function DeleteDessert({desserts}){
    return(
        <div className="background">
            <DisplayDessertsDropdown desserts={desserts}/>
        </div>
    )

}
export default DeleteDessert;