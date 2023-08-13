function checkPermission(role, adminCallback, nonAdminCallback) {
    if (role === "ADMIN") {
      adminCallback();
    } else {
      nonAdminCallback();
    }
  }
  
  const adminCallback = function() {
    alert("ACCESS GRANTED");
  };
  
  const nonAdminCallback = function() {
    alert("ACCESS DENIED");
  };
  
  checkPermission("ADMIN", adminCallback, nonAdminCallback); // จะ alert "ACCESS GRANTED"
  checkPermission("USER", adminCallback, nonAdminCallback);  // จะ alert "ACCESS DENIED"
  