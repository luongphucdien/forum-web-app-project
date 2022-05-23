exports.publicAccess = (req, res) => {
    res.status(200).sendd('Public Content');
}


exports.userAccess = (req, res) => {
    res.status(200).send('User Content');
}