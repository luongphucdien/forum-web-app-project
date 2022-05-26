exports.publicContent = (req, res) => {
    res.status(200).send('Public content');
};

exports.userContent = (req, res) => {
    res.status(200).send('User content');
};