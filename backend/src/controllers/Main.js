export const plainPath = (req, res) => {
    res.type('text/html');
    res.status(200);
    res.send('<p>HELLO WORLD!</p>');
};

