const showModal = alert;
showModal('Execute modal'); // * alert Execute modal

const showModal = alert();
showModal('Execute modal'); // ** return blank because alert has been declared as ()
//showModal is now not a function but rather it is result of empty alert
