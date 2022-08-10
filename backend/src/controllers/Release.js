import db from "./database"


export const getReleases = (req, res) => {
    db.query(`SELECT * FROM releases_home  ORDER BY price_usd DESC LIMIT ${req.params.page * 10},10`, (response, err) => {
        if (err) throw err
        res.send(response);
    })
};
