function saveData() {
    // Get form data
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var bloodGroup = document.getElementById("blood-group").value;
    var contactNo = document.getElementById("contact-no").value;
    var email = document.getElementById("email").value;
  
    // Create a new worksheet
    var worksheet = XLSX.utils.json_to_sheet([
      { Name: name, Age: age, Gender: gender, BloodGroup: bloodGroup, ContactNo: contactNo, Email: email }
    ]);
  
    // Set the range of the worksheet
    worksheet['!ref'] = 'A1:F2';
  
    // Create a new workbook
    var workbook = XLSX.utils.book_new();
  
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Donor Data");
  
    // Convert the workbook to a binary file
    var file = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
  
    // Save the file
    saveAs(new Blob([s2ab(file)], { type: "application/octet-stream" }), 'Donor Data.xlsx');
  }
  
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  