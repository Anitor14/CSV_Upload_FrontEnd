console.log("welcome");
const url = "http://localhost:5000/api/v1/products/uploads";
const fileFormDOM = document.querySelector(".file-form");

const fileInputDOM = document.querySelector("#file");

fileFormDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const csvFile = fileInputDOM.files[0];
  console.log(csvFile);
  const formData = new FormData();
  formData.append("csvFile", csvFile);
  console.log(formData);
  try {
    const { data } = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(data.CSV_Json);
    console.log("this worked");
  } catch (error) {
    // console.log(error);
    console.log(error);
  }
});
