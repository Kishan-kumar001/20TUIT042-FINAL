import { useState } from "react";
function Form() {
  let [companyName, setcompaNyname] = useState("");
  let [ownerName, setownerName] = useState("");
  let [rollNo, setrollNo] = useState("");
  let [ownerEmail, setownerEmail] = useState("");
  const handleChange = (event) => {
    switch (event.target.name) {
      case "companyName":
        setcompaNyname(event.target.value);
        break;
      case "ownerName":
        setownerName(event.target.value);
        break;
      case "rollNo":
        setrollNo(event.target.value);
        break;
      case "ownerEmail":
        setownerEmail(event.target.value);
        break;
      default:
        break;
    }
  };
  function One(event) {
    event.preventDefault();
    console.log(event.target.companyName);
    fetch("http://20.244.56.144/train/register", {
      method: "POST",
      body: JSON.stringify({
        companyName: companyName,
        ownerName: ownerName,
        rollNo: rollNo,
        ownerEmail: ownerEmail,
        accessCode: "pKEhWv",
      }),
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="row my-auto">
      <div className=" col-md-2 offset-sm-3 text-left d-flex justify-content-center mx-auto">
        <form onSubmit={One}>
          <label>
            CompanyName:
            <input type="text" name="companyName" onChange={handleChange} />
          </label>
          <br />
          <label>
            OwnerName:
            <input type="text" name="ownerName" onChange={handleChange} />
          </label>
          <br />
          <label>
            RollNo:
            <input type="text" name="rollNo" onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="ownerEmail" onChange={handleChange} />
          </label>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
export default Form;
