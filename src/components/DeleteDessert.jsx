import DisplayDessertsDropdown from "./DisplayDessertsDropdown";
function DeleteDessert({ desserts }) {
    return (
        <div>
            <DisplayDessertsDropdown desserts={desserts} />
        </div>
    )

}
export default DeleteDessert;