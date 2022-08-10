export const plainPath = (req, res) => {
    res.type('text/html');
    res.status(200);
    res.send('<p>HELLO WORLD!</p>');
};

export const errorSite = (req, res) => {
    res.type('json')
    res.status(404)
    res.json({
        error: 404,
        message: "This path doesnt exists"
    })
}
