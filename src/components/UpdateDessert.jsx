import DisplayDessertsDropdown from "./DisplayDessertsDropdown";

function UpdateDessert({ desserts }) {
  return (
    <div >
      <DisplayDessertsDropdown desserts={desserts} fetchRequest={"update"} />
    </div>
  );
}
export default UpdateDessert;
