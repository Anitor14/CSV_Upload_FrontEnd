console.log("welcome");
const url = "https://glacial-waters-86710.herokuapp.com/api/v1/products/uploads";
const fileFormDOM = document.querySelector(".file-form");

const fileInputDOM = document.querySelector("#file");

fileFormDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const content = document.getElementById("content").value;
  const csvFile = fileInputDOM.files[0];
  console.log(csvFile);
  
  const formData = new FormData();
  formData.append("csvFile", csvFile);
  formData.append("content", content);
  
  console.log(formData);
  try {
    const { data } = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(data.CSV_Json);
  } catch (error) {
    // console.log(error);
    console.log(error);
  }
});
