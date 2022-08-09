import DisplayDessertsDropdown from "./DisplayDessertsDropdown";

function UpdateDessert({ desserts }) {
  return (
    <div className="background">
      <DisplayDessertsDropdown desserts={desserts} fetchRequest={"update"} />
    </div>
  );
}
export default UpdateDessert;
